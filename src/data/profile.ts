export const links = {
  github: 'https://github.com/mdemrulkayes',
  linkedin: 'https://www.linkedin.com/in/emrulkayes2103/',
  upwork: 'https://www.upwork.com/freelancers/~0112a346f3aff04405',
  email: 'emrul.kayes2103@gmail.com',
}

export const about = [
  'I am a Staff Software Engineer at Cefalo with 10 years of experience building and running backend systems that move money: mobile banking, payment processing, microfinance, remittance, and real-time trading. My home turf is the C# / .NET ecosystem — ASP.NET Core APIs, microservices, and the databases behind them.',
  'What I care about is the architecture underneath the feature list. I have designed systems around Clean Architecture, Domain-Driven Design, and event-driven patterns, built SSO from the ground up with IdentityServer4 and OpenID Connect, and kept GDPR-regulated data safe for Nordic clients. On one key project, tightening design and review practices cut bugs by 30%.',
  'I lead a team day to day — distributing work, reviewing designs, and staying hands-on in the code. I am also comfortable across the fence: CI/CD on Azure DevOps and GitHub Actions on one side, Angular and React on the other, so the backend I ship fits the whole system around it.',
]

export const skillGroups = [
  {
    title: 'Backend & Frameworks',
    skills: [
      'C#',
      'ASP.NET Core',
      'Web API',
      'Blazor Server / WASM',
      'Entity Framework Core',
      'Dapper',
      'SignalR',
      'WPF',
      'NodeJS / NestJS',
    ],
  },
  {
    title: 'Architecture & Patterns',
    skills: [
      'Microservices',
      'Modular Monolith',
      'Clean Architecture',
      'Domain-Driven Design',
      'Event-Driven Design',
      'CQRS / MediatR',
      'Vertical Slice',
      'TDD',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'Azure (Functions, AD, Storage, Key Vault)',
      'Azure Cache for Redis',
      'Application Insights',
      'Azure DevOps',
      'GitHub Actions',
      'CI/CD Pipelines',
      'ELK Stack',
      'Kafka',
    ],
  },
  {
    title: 'Databases',
    skills: ['MSSQL', 'PostgreSQL', 'MySQL', 'EventStore DB', 'Redis', 'Relational DB Design'],
  },
  {
    title: 'Security & Identity',
    skills: ['OAuth2', 'OpenID Connect', 'IdentityServer4', 'Single Sign-On', 'RBAC', 'GDPR Compliance'],
  },
  {
    title: 'Frontend',
    skills: ['Angular', 'React', 'NextJS', 'TypeScript', 'Redux'],
  },
]

export const experience = [
  {
    role: 'Staff Software Engineer',
    company: 'Cefalo Bangladesh Ltd.',
    period: 'Jul 2025 — Present',
    points: [
      'Lead a team of developers on a Norwegian payment-platform client, owning task distribution, design reviews, and delivery.',
      'Build ASP.NET Core Web APIs in a microservice architecture alongside Blazor Server / WASM and WPF clients.',
      'Handle large datasets across PostgreSQL and MSSQL under strict GDPR compliance.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Cefalo Bangladesh Ltd.',
    period: 'Jul 2022 — Jun 2025',
    points: [
      'Built backend services for a multi-country mobile banking system and wallet application.',
      'Designed complex microservice architecture including Azure Function apps.',
      'Delivered event-driven applications with ASP.NET Core, applying DDD and established design patterns.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'ASAI Management Services Ltd.',
    period: 'Jun 2021 — Jun 2022',
    points: [
      'Built the authentication and authorization server with IdentityServer4, delivering SSO across a microfinance platform.',
      'Designed the application architecture on DDD and Clean Architecture.',
      'Developed ASP.NET Core APIs consumed by React and Angular frontends.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'BRAC IT Services Ltd.',
    period: 'Apr 2019 — Jun 2021',
    points: [
      'Built banking-product lifecycle and remittance systems for BRAC Bank on ASP.NET Core and ASP.NET MVC.',
      'Designed relational databases and wrote complex, optimized SQL queries and procedures.',
      'Maintained and extended N-tier, service-oriented applications.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Dimik Infotech Ltd.',
    period: 'Jul 2016 — Mar 2019',
    points: [
      'Built a real-time stock market trading platform with ASP.NET MVC and SignalR live market boards.',
      'Analyzed complex broker-house requirements and translated them into database design and optimized SQL.',
    ],
  },
  {
    role: 'Programmer',
    company: 'Q-Soft Precise Assistance',
    period: 'Jan 2016 — Jun 2016',
    points: ['Developed and maintained ASP.NET web applications, database schemas, and stored procedures.'],
  },
]

export const projects = [
  {
    name: 'Convene — MPT & LEAP',
    context: 'Nordic payment & administration platform · Cefalo',
    description:
      'Self-service payment terminals (check-in, cash/card/invoice/mobile payment) and the management platform behind them, used by a Nordic payment provider serving 6M+ people yearly. Microservice Web APIs with Blazor WASM admin and SignalR real-time flows.',
    stack: ['ASP.NET Core', 'Blazor WASM/Server', 'WPF', 'SignalR', 'PostgreSQL', 'MSSQL', 'OAuth2/OIDC', 'Azure'],
  },
  {
    name: 'SPENN / Blockbonds',
    context: 'Mobile banking & blockchain wallet · Cefalo',
    description:
      'Backend for a mobile banking system operating across multiple countries — wallet-to-wallet transfers, lending, and money-flow control connected to a blockchain ledger. Microservice architecture on ASP.NET Core.',
    stack: ['ASP.NET Core', 'Microservices', 'EF Core', 'MSSQL', 'OAuth2', 'SSO', 'Azure'],
  },
  {
    name: 'Cefalo Payroll',
    context: 'Internal payroll platform · Cefalo',
    description:
      'Payroll system synchronizing with HR through Kafka service-bus messaging, with Google SSO, role-based access control, and event-triggered email notifications for promotions and reviews.',
    stack: ['NestJS', 'Kafka', 'MySQL', 'TypeORM', 'NextJS', 'Google SSO', 'RBAC'],
  },
  {
    name: 'AMBS',
    context: 'Microfinance & banking · ASAI',
    description:
      'Loan origination platform serving low-income entrepreneurs across Asia and Africa — customer onboarding, KYC verification, loan disbursement, and repayment scheduling. Custom-built SSO with IdentityServer4.',
    stack: ['ASP.NET Core', 'IdentityServer4', 'Microservices', 'Redis', 'ELK', 'MSSQL', 'DDD'],
  },
  {
    name: 'EndToEnd & Remittance',
    context: 'Banking operations · BRAC IT',
    description:
      'Product lifecycle system for issuing, tracking, and destroying banking products (cards, chequebooks) plus a remittance management system for BRAC Bank.',
    stack: ['ASP.NET Core', 'EF', 'MSSQL', 'Angular', 'Complex SQL'],
  },
  {
    name: 'BASE',
    context: 'Stock trading & broker-house suite · Dimik',
    description:
      'Real-time stock market trading for broker houses — live market price board over SignalR, portfolio deposits and withdrawals, plus finance and HRM modules across web and desktop.',
    stack: ['ASP.NET MVC', 'SignalR', 'ADO.NET', 'EF', 'MSSQL'],
  },
]

export const openSource = [
  {
    name: 'Quizzer',
    description: 'Online quiz platform built as a Modular Monolith — module boundaries without microservice overhead.',
    url: 'https://github.com/mdemrulkayes/Quizzer',
    language: 'C#',
  },
  {
    name: 'HotelManagementSystem',
    description: 'Hotel management application spanning Blazor Server, Blazor WASM, and ASP.NET Core APIs.',
    url: 'https://github.com/mdemrulkayes/HotelManagementSystem',
    language: 'C#',
  },
  {
    name: 'UrlShortener',
    description: 'URL shortener demonstrating EF Core with PostgreSQL — compact, focused reference implementation.',
    url: 'https://github.com/mdemrulkayes/UrlShortener',
    language: 'C#',
  },
]
