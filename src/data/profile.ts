export const links = {
  github: 'https://github.com/mdemrulkayes',
  linkedin: 'https://www.linkedin.com/in/emrulkayes2103/',
  upwork: 'https://www.upwork.com/freelancers/~0112a346f3aff04405',
  email: 'emrul.kayes2103@gmail.com',
}

export const about = [
  'I am a Staff Software Engineer at Cefalo with 10 years of experience building and running backend systems that move money: mobile banking, payment processing, microfinance, remittance, and real-time trading. My home turf is the C# / .NET ecosystem — ASP.NET Core APIs, microservices, and the databases behind them.',
  'What I care about is the architecture underneath the feature list. I have designed systems around Clean Architecture, Domain-Driven Design, and event-driven patterns, built SSO from the ground up with IdentityServer4 and OpenID Connect, and kept GDPR-regulated data safe for Nordic clients. On one key project, tightening design and review practices cut bugs by 30%.',
  'I lead a team day to day — distributing work, reviewing designs, and staying hands-on in the code. Beyond my full-time role, I am open to consulting engagements: architecture reviews, .NET modernization, API design, or getting a struggling backend back on rails. If you have a hard problem, I would love to hear about it.',
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
    summary:
      'Technical lead for a Norwegian payment-platform client, responsible for both the delivery of the team and the architecture of the product.',
    points: [
      'Lead a team of developers end to end — breaking down features, distributing work, reviewing designs and code, and staying hands-on in the critical paths myself.',
      'Design and build ASP.NET Core Web APIs in a microservice architecture, alongside Blazor Server / WASM web clients and a WPF desktop terminal application.',
      'Own data handling for large volumes across PostgreSQL and MSSQL, from schema design through query optimization.',
      'Guard GDPR compliance across the platform — data retention, access boundaries, and audit trails for a privacy-sensitive Nordic market.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Cefalo Bangladesh Ltd.',
    period: 'Jul 2022 — Jun 2025',
    summary:
      'Senior backend engineer across three products: a multi-country mobile banking system, an internal payroll platform, and a payment-processing suite.',
    points: [
      'Built and maintained backend services for SPENN, a mobile banking and wallet product serving customers across multiple countries — transfers, lending flows, and blockchain-connected money movement.',
      'Designed complex microservice architectures, including Azure Function apps for asynchronous and scheduled workloads.',
      'Delivered event-driven systems on ASP.NET Core, applying DDD and established design patterns to keep domains cleanly separated.',
      'Built a payroll platform integrating with the HR system through Kafka service-bus messaging, with Google SSO authentication and role-based access control.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'ASAI Management Services Ltd.',
    period: 'Jun 2021 — Jun 2022',
    summary:
      'Core backend developer on a microfinance platform issuing socially responsible loans to entrepreneurs across Asia and Africa.',
    points: [
      'Built the authentication and authorization server from the ground up with IdentityServer4, delivering single sign-on across the whole product suite.',
      'Designed the application architecture on Domain-Driven Design and Clean Architecture — layered, testable, and explicit about its domain.',
      'Developed ASP.NET Core APIs backing loan origination: customer onboarding, KYC verification, disbursement, and repayment scheduling.',
      'Introduced Redis caching and ELK-based logging to keep the platform observable and fast under load.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'BRAC IT Services Ltd.',
    period: 'Apr 2019 — Jun 2021',
    summary:
      'Backend developer on banking operations systems for BRAC Bank, one of the largest banks in Bangladesh.',
    points: [
      'Built EndToEnd, a product-lifecycle system that issues, tracks, and destroys banking products such as cards and chequebooks.',
      'Developed the remittance management system handling inbound money transfers for the bank.',
      'Analyzed complex business requirements and translated them into relational database designs, complex SQL queries, and stored procedures.',
      'Maintained and extended N-tier, service-oriented applications on ASP.NET Core, ASP.NET MVC, and Entity Framework.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Dimik Infotech Ltd.',
    period: 'Jul 2016 — Mar 2019',
    summary:
      'Developer on BASE, a stock-market and broker-house management suite spanning web and desktop.',
    points: [
      'Built real-time trading features with ASP.NET MVC and SignalR — a live market price board pushing updates to every connected client.',
      'Implemented portfolio management: deposits, withdrawals, and real-time position tracking for brokerage clients.',
      'Designed databases and wrote heavily optimized SQL queries and procedures for market-data workloads.',
    ],
  },
  {
    role: 'Programmer',
    company: 'Q-Soft Precise Assistance',
    period: 'Jan 2016 — Jun 2016',
    summary: 'First professional role — full development lifecycle on ASP.NET web applications.',
    points: [
      'Developed and maintained ASP.NET web applications, designed database schemas, and wrote stored procedures.',
    ],
  },
]

export const projects = [
  {
    name: 'Convene — MPT & LEAP',
    context: 'Nordic payment & administration platform · Cefalo',
    description:
      'Payment infrastructure for a leading Nordic payment and administration provider. MPT is a self-service terminal where patients check in with their date of birth, register arrival, print directions, and pay by cash, card, invoice, or mobile. LEAP is the management platform behind it — service providers, contracts, creditors, debtors, and every terminal configuration. I work across the full backend: microservice Web APIs, real-time SignalR flows, and the data layer spanning PostgreSQL and MSSQL, under strict GDPR requirements.',
    stack: ['ASP.NET Core', 'Blazor WASM/Server', 'WPF', 'SignalR', 'PostgreSQL', 'MSSQL', 'OAuth2/OIDC', 'Azure'],
  },
  {
    name: 'SPENN / Blockbonds',
    context: 'Mobile banking & blockchain wallet · Cefalo',
    description:
      'A mobile banking system with a large customer base across multiple countries. Customers manage wallets, send and receive money instantly, and lend or borrow — with every money movement controlled through a blockchain-connected core. I built and maintained backend microservices on ASP.NET Core: wallet-to-wallet transfer flows, the lending process, and the integration layer between the banking services and the ledger, secured with OAuth2 and SSO on Azure.',
    stack: ['ASP.NET Core', 'Microservices', 'EF Core', 'MSSQL', 'OAuth2', 'SSO', 'Azure'],
  },
  {
    name: 'Cefalo Payroll',
    context: 'Internal payroll platform · Cefalo',
    description:
      'The system that runs payroll for the company itself. It synchronizes employee data from the HR system over Kafka service-bus messaging, authenticates through Google SSO, and gates every action behind role-based access control. Engineering managers review performance and issue promotions from the system, and each promotion automatically triggers salary changes and notification emails through the notification service.',
    stack: ['NestJS', 'Kafka', 'MySQL', 'TypeORM', 'NextJS', 'Google SSO', 'RBAC'],
  },
  {
    name: 'AMBS',
    context: 'Microfinance & banking · ASAI',
    description:
      'A microfinance and banking solution that helps issue small, socially responsible loans to low-income entrepreneurs — most of them women — across Asia and Africa. The platform handles the entire lending journey: customer creation, KYC verification, loan disbursement, and repayment schedule calculation. I designed the architecture on DDD and Clean Architecture, and built the SSO authentication server with IdentityServer4 that secures the whole suite.',
    stack: ['ASP.NET Core', 'IdentityServer4', 'Microservices', 'Redis', 'ELK', 'MSSQL', 'DDD'],
  },
  {
    name: 'EndToEnd & Remittance',
    context: 'Banking operations · BRAC IT',
    description:
      'Two operational systems for BRAC Bank. EndToEnd manages the full lifecycle of physical banking products — issuing, tracking, and destroying cards and chequebooks with a complete audit trail. Remittance manages inbound money transfers for the bank. Both are built on ASP.NET with heavy relational database work: complex SQL, stored procedures, and carefully designed schemas for compliance-grade record keeping.',
    stack: ['ASP.NET Core', 'EF', 'MSSQL', 'Angular', 'Complex SQL'],
  },
  {
    name: 'BASE',
    context: 'Stock trading & broker-house suite · Dimik',
    description:
      'A complete broker-house platform for the Dhaka stock market: real-time online trading for clients plus stock-market, finance, and HRM management for the house — across both web and desktop applications. The centerpiece is a live market board over SignalR showing real-time price movements, with portfolio deposits, withdrawals, and trade execution flowing through an ASP.NET MVC backend tuned for market-hours load.',
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
