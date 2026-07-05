import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export type FXVariant =
  | 'network'
  | 'torus'
  | 'cubes'
  | 'stream'
  | 'terrain'
  | 'orbit'
  | 'bubbles'
  | 'constellation'
  | 'wave'
  | 'planes'
  | 'planeStream'

type SceneProps = { colors: string[]; isDark: boolean }

function useIsDark() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    const observer = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains('dark')),
    )
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])
  return dark
}

const rand = (spread: number) => (Math.random() - 0.5) * spread

/* hero — plexus network: nodes drifting, edges between close pairs (distributed systems) */
function Network({ colors }: SceneProps) {
  const N = 80
  const group = useRef<THREE.Group>(null)
  const points = useRef<THREE.Points>(null)
  const lines = useRef<THREE.LineSegments>(null)
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(N * 3)
    const velocities = new Float32Array(N * 3)
    for (let i = 0; i < N * 3; i += 3) {
      positions[i] = rand(13)
      positions[i + 1] = rand(7)
      positions[i + 2] = rand(4)
      velocities[i] = rand(0.02)
      velocities[i + 1] = rand(0.02)
      velocities[i + 2] = rand(0.01)
    }
    return { positions, velocities }
  }, [])
  const linePositions = useMemo(() => new Float32Array(N * N * 3), [])

  useFrame(() => {
    const bounds = [6.5, 3.5, 2]
    for (let i = 0; i < N * 3; i += 3) {
      for (let a = 0; a < 3; a++) {
        positions[i + a] += velocities[i + a]
        if (Math.abs(positions[i + a]) > bounds[a]) velocities[i + a] *= -1
      }
    }
    let k = 0
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        if (dx * dx + dy * dy + dz * dz < 4.4) {
          linePositions.set(positions.subarray(i * 3, i * 3 + 3), k)
          linePositions.set(positions.subarray(j * 3, j * 3 + 3), k + 3)
          k += 6
        }
      }
    }
    if (points.current) points.current.geometry.attributes.position.needsUpdate = true
    if (lines.current) {
      lines.current.geometry.setDrawRange(0, k / 3)
      lines.current.geometry.attributes.position.needsUpdate = true
    }
    if (group.current) group.current.rotation.y += 0.0007
  })

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.07} color={colors[1]} transparent opacity={0.85} sizeAttenuation />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={colors[0]} transparent opacity={0.22} />
      </lineSegments>
    </group>
  )
}

/* about — slowly turning wireframe torus knot */
function Torus({ colors }: SceneProps) {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.12
    mesh.current.rotation.y += delta * 0.18
  })
  return (
    <mesh ref={mesh} position={[3.2, 0, -1]}>
      <torusKnotGeometry args={[1.7, 0.5, 140, 18]} />
      <meshBasicMaterial wireframe color={colors[1]} transparent opacity={0.25} />
    </mesh>
  )
}

/* skills — floating wireframe cubes (building blocks) */
function Cubes({ colors }: SceneProps) {
  const group = useRef<THREE.Group>(null)
  const items = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        pos: [rand(13), rand(6), rand(3) - 1] as [number, number, number],
        size: 0.35 + Math.random() * 0.65,
        speed: 0.15 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        color: colors[i % 3],
      })),
    [colors],
  )
  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime
    group.current?.children.forEach((child, i) => {
      const item = items[i]
      child.rotation.x += delta * item.speed
      child.rotation.y += delta * item.speed * 0.7
      child.position.y = item.pos[1] + Math.sin(t * 0.6 + item.phase) * 0.35
    })
  })
  return (
    <group ref={group}>
      {items.map((item, i) => (
        <mesh key={i} position={item.pos}>
          <boxGeometry args={[item.size, item.size, item.size]} />
          <meshBasicMaterial wireframe color={item.color} transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  )
}

/* experience — particles streaming upward (career flow) */
function Stream({ colors }: SceneProps) {
  const N = 220
  const points = useRef<THREE.Points>(null)
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(N * 3)
    const speeds = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      positions[i * 3] = rand(14)
      positions[i * 3 + 1] = rand(8)
      positions[i * 3 + 2] = rand(4)
      speeds[i] = 0.3 + Math.random() * 0.7
    }
    return { positions, speeds }
  }, [])
  useFrame((_, delta) => {
    for (let i = 0; i < N; i++) {
      positions[i * 3 + 1] += speeds[i] * delta
      if (positions[i * 3 + 1] > 4) positions[i * 3 + 1] = -4
    }
    if (points.current) points.current.geometry.attributes.position.needsUpdate = true
  })
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color={colors[2]} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

/* projects — undulating wireframe terrain (infrastructure landscape) */
function Terrain({ colors }: SceneProps) {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.elapsedTime * 0.6
    const pos = mesh.current.geometry.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      pos.setZ(i, Math.sin(x * 0.5 + t) * Math.cos(y * 0.5 + t * 0.8) * 0.7)
    }
    pos.needsUpdate = true
  })
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -2.6, 0]}>
      <planeGeometry args={[28, 18, 42, 26]} />
      <meshBasicMaterial wireframe color={colors[0]} transparent opacity={0.25} />
    </mesh>
  )
}

/* open source — orbiting rings and satellites (modules around a core) */
function Orbit({ colors }: SceneProps) {
  const rings = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    rings.current?.children.forEach((ring, i) => {
      ring.rotation.x += delta * (0.1 + i * 0.06)
      ring.rotation.y += delta * (0.14 - i * 0.03)
    })
  })
  return (
    <group position={[3.4, 0, -1]}>
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial wireframe color={colors[2]} transparent opacity={0.5} />
      </mesh>
      <group ref={rings}>
        {[1.6, 2.2, 2.8].map((radius, i) => (
          <group key={radius} rotation={[Math.PI / 3 + i, i * 0.8, 0]}>
            <mesh>
              <torusGeometry args={[radius, 0.012, 8, 90]} />
              <meshBasicMaterial color={colors[i % 3]} transparent opacity={0.4} />
            </mesh>
            <mesh position={[radius, 0, 0]}>
              <sphereGeometry args={[0.07, 12, 12]} />
              <meshBasicMaterial color={colors[(i + 1) % 3]} transparent opacity={0.9} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  )
}

/* reviews — drifting wireframe polyhedra (floating feedback) */
function Bubbles({ colors }: SceneProps) {
  const group = useRef<THREE.Group>(null)
  const items = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        pos: [rand(14), rand(7), rand(3) - 1] as [number, number, number],
        radius: 0.25 + Math.random() * 0.5,
        rise: 0.1 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
        color: colors[i % 3],
      })),
    [colors],
  )
  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime
    group.current?.children.forEach((child, i) => {
      const item = items[i]
      child.position.y += item.rise * delta
      if (child.position.y > 4.5) child.position.y = -4.5
      child.position.x = item.pos[0] + Math.sin(t * 0.4 + item.phase) * 0.4
      child.rotation.y += delta * 0.3
    })
  })
  return (
    <group ref={group}>
      {items.map((item, i) => (
        <mesh key={i} position={item.pos}>
          <icosahedronGeometry args={[item.radius, 0]} />
          <meshBasicMaterial wireframe color={item.color} transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

/* education — constellation: fixed stars linked to nearest neighbours (knowledge graph) */
function Constellation({ colors }: SceneProps) {
  const group = useRef<THREE.Group>(null)
  const material = useRef<THREE.LineBasicMaterial>(null)
  const { positions, edges } = useMemo(() => {
    const N = 32
    const positions = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      positions[i * 3] = rand(14)
      positions[i * 3 + 1] = rand(7)
      positions[i * 3 + 2] = rand(3)
    }
    const segments: number[] = []
    for (let i = 0; i < N; i++) {
      const dists = []
      for (let j = 0; j < N; j++) {
        if (i === j) continue
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        dists.push({ j, d: dx * dx + dy * dy + dz * dz })
      }
      dists.sort((a, b) => a.d - b.d)
      for (const { j } of dists.slice(0, 2)) {
        segments.push(
          positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
          positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
        )
      }
    }
    return { positions, edges: new Float32Array(segments) }
  }, [])
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.z = Math.sin(clock.elapsedTime * 0.1) * 0.05
    if (material.current) material.current.opacity = 0.2 + Math.sin(clock.elapsedTime * 0.8) * 0.08
  })
  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.09} color={colors[1]} transparent opacity={0.9} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edges, 3]} />
        </bufferGeometry>
        <lineBasicMaterial ref={material} color={colors[0]} transparent opacity={0.25} />
      </lineSegments>
    </group>
  )
}

/* contact — rippling signal wave of points */
function Wave({ colors }: SceneProps) {
  const points = useRef<THREE.Points>(null)
  const { positions, cols, rows } = useMemo(() => {
    const cols = 48
    const rows = 16
    const positions = new Float32Array(cols * rows * 3)
    let k = 0
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        positions[k++] = (i / (cols - 1) - 0.5) * 18
        positions[k++] = (j / (rows - 1) - 0.5) * 7
        positions[k++] = 0
      }
    }
    return { positions, cols, rows }
  }, [])
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    let k = 0
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = positions[k]
        const y = positions[k + 1]
        positions[k + 2] = Math.sin(x * 0.6 + t * 1.3) * 0.4 + Math.cos(y * 1.1 + t * 0.9) * 0.25
        k += 3
      }
    }
    if (points.current) points.current.geometry.attributes.position.needsUpdate = true
  })
  return (
    <points ref={points} rotation={[-0.3, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color={colors[1]} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

/* ---------- paper planes towing tech-stack banners ---------- */

const BANNER_LABELS = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'Blazor',
  'EF Core',
  'SignalR',
  'Azure',
  'PostgreSQL',
  'Kafka',
  'Redis',
  'Microservices',
  'DDD',
  'OAuth2',
  'CI/CD',
]

const bannerCache = new Map<string, THREE.CanvasTexture>()
function bannerTexture(label: string, color: string) {
  const key = `${label}|${color}`
  const cached = bannerCache.get(key)
  if (cached) return cached
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 128
  const ctx = canvas.getContext('2d')!
  ctx.strokeStyle = color
  ctx.globalAlpha = 0.55
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.roundRect(6, 6, 500, 116, 26)
  ctx.stroke()
  ctx.globalAlpha = 1
  ctx.font = "700 58px 'JetBrains Mono Variable', Consolas, monospace"
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(label, 256, 70)
  const texture = new THREE.CanvasTexture(canvas)
  texture.anisotropy = 4
  bannerCache.set(key, texture)
  return texture
}

/* folded paper dart, nose along +Z */
const PLANE_GEOMETRY = (() => {
  const geometry = new THREE.BufferGeometry()
  // prettier-ignore
  const vertices = new Float32Array([
    0, 0, 1.2,   0, 0.18, -1,   0.85, -0.14, -1, // left wing
    0, 0, 1.2,   -0.85, -0.14, -1,   0, 0.18, -1, // right wing
    0, 0, 1.2,   0, -0.42, -1,   0, 0.18, -1, // keel
  ])
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  geometry.computeVertexNormals()
  return geometry
})()

const SPAN = 24
const TRAIL = 36

type PlaneCfg = {
  label: string
  color: string
  baseY: number
  z: number
  speed: number
  phase: number
  scale: number
  offset: number
}

function PaperPlane({ cfg, contrail, bg }: { cfg: PlaneCfg; contrail: boolean; bg: string }) {
  const group = useRef<THREE.Group>(null)
  const banner = useRef<THREE.Mesh>(null)
  const target = useMemo(() => new THREE.Vector3(), [])
  const tailWorld = useMemo(() => new THREE.Vector3(), [])
  const texture = useMemo(() => bannerTexture(cfg.label, cfg.color), [cfg])
  const trailStarted = useRef(false)

  const trailLine = useMemo(() => {
    if (!contrail) return null
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(TRAIL * 3), 3))
    const colors = new Float32Array(TRAIL * 3)
    const from = new THREE.Color(cfg.color)
    const to = new THREE.Color(bg)
    const mixed = new THREE.Color()
    for (let i = 0; i < TRAIL; i++) {
      mixed.copy(from).lerp(to, i / (TRAIL - 1))
      colors.set([mixed.r, mixed.g, mixed.b], i * 3)
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const material = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.5 })
    const line = new THREE.Line(geometry, material)
    line.frustumCulled = false
    return line
  }, [contrail, cfg, bg])

  const flightY = (t: number) => cfg.baseY + Math.sin(t * 0.6 + cfg.phase) * 0.8

  useFrame(({ clock }) => {
    const g = group.current
    if (!g) return
    const t = clock.elapsedTime + cfg.offset
    const x = ((t * cfg.speed) % SPAN) - SPAN / 2
    const wrapped = x < g.position.x - SPAN / 2
    g.position.set(x, flightY(t), cfg.z)
    target.set(x + 0.6, flightY(t + 0.25 / cfg.speed), cfg.z)
    g.lookAt(target)
    if (banner.current) banner.current.rotation.x = Math.sin(t * 3.5) * 0.07

    if (trailLine) {
      g.updateMatrixWorld()
      g.localToWorld(tailWorld.set(0, -0.05, -1.2))
      const positions = trailLine.geometry.attributes.position as THREE.BufferAttribute
      const array = positions.array as Float32Array
      if (wrapped || !trailStarted.current) {
        for (let i = 0; i < TRAIL; i++) array.set([tailWorld.x, tailWorld.y, tailWorld.z], i * 3)
        trailStarted.current = true
      } else {
        array.copyWithin(3, 0, TRAIL * 3 - 3)
        array.set([tailWorld.x, tailWorld.y, tailWorld.z], 0)
      }
      positions.needsUpdate = true
    }
  })

  return (
    <>
      <group ref={group} scale={cfg.scale}>
        <mesh geometry={PLANE_GEOMETRY}>
          <meshStandardMaterial
            color={cfg.color}
            flatShading
            side={THREE.DoubleSide}
            roughness={0.55}
            metalness={0.15}
            transparent
            opacity={0.95}
          />
        </mesh>
        <mesh position={[0, 0.02, -1.85]}>
          <boxGeometry args={[0.015, 0.015, 1.3]} />
          <meshBasicMaterial color={cfg.color} transparent opacity={0.35} />
        </mesh>
        <mesh ref={banner} position={[0, 0.05, -3.9]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[2.9, 0.72]} />
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      </group>
      {trailLine && <primitive object={trailLine} />}
    </>
  )
}

function PaperPlanes({ colors, isDark, dense }: SceneProps & { dense: boolean }) {
  const bg = isDark ? '#0c0c14' : '#f7f7fd'
  const count = dense ? 6 : 4
  const cfgs = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        label: BANNER_LABELS[(i * 3 + (dense ? 0 : 1)) % BANNER_LABELS.length],
        color: colors[i % 3],
        baseY: -2.4 + (i * 5.2) / Math.max(count - 1, 1) + (i % 2) * 0.3,
        z: -2.5 + (i % 3) * 1.1,
        speed: 1.1 + ((i * 7) % 5) * 0.22,
        phase: i * 1.9,
        scale: 0.42 + (i % 3) * 0.14,
        offset: i * 4.3,
      })),
    [colors, count, dense],
  )
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} />
      {cfgs.map((cfg) => (
        <PaperPlane key={cfg.label} cfg={cfg} contrail={dense} bg={bg} />
      ))}
      {!dense && <Stream colors={colors} isDark={isDark} />}
    </>
  )
}

const Planes = (props: SceneProps) => <PaperPlanes {...props} dense />
const PlaneStream = (props: SceneProps) => <PaperPlanes {...props} dense={false} />

const scenes: Record<FXVariant, (props: SceneProps) => React.JSX.Element> = {
  network: Network,
  torus: Torus,
  cubes: Cubes,
  stream: Stream,
  terrain: Terrain,
  orbit: Orbit,
  bubbles: Bubbles,
  constellation: Constellation,
  wave: Wave,
  planes: Planes,
  planeStream: PlaneStream,
}

export default function SectionFX({ variant }: { variant: FXVariant }) {
  const dark = useIsDark()
  const colors = useMemo(
    () => (dark ? ['#818cf8', '#c084fc', '#f472b6'] : ['#6366f1', '#9333ea', '#db2777']),
    [dark],
  )
  const Scene = scenes[variant]
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene colors={colors} isDark={dark} />
    </Canvas>
  )
}
