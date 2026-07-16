export const links = {
  github: "https://github.com/mdemrulkayes",
  linkedin: "https://www.linkedin.com/in/emrulkayes2103/",
  upwork: "https://www.upwork.com/freelancers/~0112a346f3aff04405",
  email: "emrul.kayes2103@gmail.com",
};

export const about = [
  "I am a Staff Software Engineer at Cefalo with 10 years of experience building and running backend systems that move money: mobile banking, payment processing, microfinance, remittance, and real-time trading. My home turf is the C# / .NET ecosystem — ASP.NET Core APIs, microservices, and the databases behind them.",
  "What I care about is the architecture underneath the feature list. I have designed systems around Clean Architecture, Domain-Driven Design, and event-driven patterns, built SSO from the ground up with IdentityServer4 and OpenID Connect, and kept GDPR-regulated data safe for Nordic clients. On one key project, tightening design and review practices cut bugs by 30%.",
  "I lead a team day to day — distributing work, reviewing designs, and staying hands-on in the code. Beyond my full-time role, I am open to consulting engagements: architecture reviews, .NET modernization, API design, or getting a struggling backend back on rails. If you have a hard problem, I would love to hear about it.",
];

export const skillGroups = [
  {
    title: "Backend & Frameworks",
    skills: [
      "C#",
      "ASP.NET Core",
      "Web API",
      "Blazor Server / WASM",
      "Entity Framework Core",
      "Dapper",
      "SignalR",
      "WPF",
      "NodeJS / NestJS",
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "Microservices",
      "Modular Monolith",
      "Clean Architecture",
      "Domain-Driven Design",
      "Event-Driven Design",
      "CQRS / MediatR",
      "Vertical Slice",
      "TDD",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Azure (Functions, AD, Storage, Key Vault)",
      "Azure Cache for Redis",
      "Application Insights",
      "Azure DevOps",
      "GitHub Actions",
      "CI/CD Pipelines",
      "ELK Stack",
      "Kafka",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MSSQL",
      "PostgreSQL",
      "MySQL",
      "EventStore DB",
      "Redis",
      "Relational DB Design",
    ],
  },
  {
    title: "Security & Identity",
    skills: [
      "OAuth2",
      "OpenID Connect",
      "IdentityServer4",
      "Single Sign-On",
      "RBAC",
      "GDPR Compliance",
    ],
  },
  {
    title: "Frontend",
    skills: ["Angular", "React", "NextJS", "TypeScript", "Redux"],
  },
];

export const experience = [
  {
    role: "Staff Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    period: "Jul 2025 — Present",
    summary:
      "Technical lead for a Norwegian payment-platform client, responsible for both the delivery of the team and the architecture of the product.",
    points: [
      "Lead a team of developers end to end — breaking down features, distributing work, reviewing designs and code, and staying hands-on in the critical paths myself.",
      "Design and build ASP.NET Core Web APIs in a microservice architecture, alongside Blazor Server / WASM web clients and a WPF desktop terminal application.",
      "Own data handling for large volumes across PostgreSQL and MSSQL, from schema design through query optimization.",
      "Guard GDPR compliance across the platform — data retention, access boundaries, and audit trails for a privacy-sensitive Nordic market.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    period: "Jul 2022 — Jun 2025",
    summary:
      "Senior backend engineer across three products: a multi-country mobile banking system, an internal payroll platform, and a payment-processing suite.",
    points: [
      "Built and maintained backend services for SPENN, a mobile banking and wallet product serving customers across multiple countries — transfers, lending flows, and blockchain-connected money movement.",
      "Designed complex microservice architectures, including Azure Function apps for asynchronous and scheduled workloads.",
      "Delivered event-driven systems on ASP.NET Core, applying DDD and established design patterns to keep domains cleanly separated.",
      "Built a payroll platform integrating with the HR system through Kafka service-bus messaging, with Google SSO authentication and role-based access control.",
    ],
  },
  {
    role: "Software Developer",
    company: "ASAI Management Services Ltd.",
    period: "Jun 2021 — Jun 2022",
    summary:
      "Core backend developer on a microfinance platform issuing socially responsible loans to entrepreneurs across Asia and Africa.",
    points: [
      "Built the authentication and authorization server from the ground up with IdentityServer4, delivering single sign-on across the whole product suite.",
      "Designed the application architecture on Domain-Driven Design and Clean Architecture — layered, testable, and explicit about its domain.",
      "Developed ASP.NET Core APIs backing loan origination: customer onboarding, KYC verification, disbursement, and repayment scheduling.",
      "Introduced Redis caching and ELK-based logging to keep the platform observable and fast under load.",
    ],
  },
  {
    role: "Software Developer",
    company: "BRAC IT Services Ltd.",
    period: "Apr 2019 — Jun 2021",
    summary:
      "Backend developer on banking operations systems for BRAC Bank, one of the largest banks in Bangladesh.",
    points: [
      "Built EndToEnd, a product-lifecycle system that issues, tracks, and destroys banking products such as cards and chequebooks.",
      "Developed the remittance management system handling inbound money transfers for the bank.",
      "Analyzed complex business requirements and translated them into relational database designs, complex SQL queries, and stored procedures.",
      "Maintained and extended N-tier, service-oriented applications on ASP.NET Core, ASP.NET MVC, and Entity Framework.",
    ],
  },
  {
    role: "Software Developer",
    company: "Dimik Infotech Ltd.",
    period: "Jul 2016 — Mar 2019",
    summary:
      "Developer on BASE, a stock-market and broker-house management suite spanning web and desktop.",
    points: [
      "Built real-time trading features with ASP.NET MVC and SignalR — a live market price board pushing updates to every connected client.",
      "Implemented portfolio management: deposits, withdrawals, and real-time position tracking for brokerage clients.",
      "Designed databases and wrote heavily optimized SQL queries and procedures for market-data workloads.",
    ],
  },
  {
    role: "Programmer",
    company: "Q-Soft Precise Assistance",
    period: "Jan 2016 — Jun 2016",
    summary:
      "First professional role — full development lifecycle on ASP.NET web applications.",
    points: [
      "Developed and maintained ASP.NET web applications, designed database schemas, and wrote stored procedures.",
    ],
  },
];

export const projects = [
  {
    name: "Convene — MPT & LEAP",
    context: "Nordic payment & administration platform · Cefalo",
    description:
      "Payment infrastructure for a leading Nordic payment and administration provider. MPT is a self-service terminal where patients check in with their date of birth, register arrival, print directions, and pay by cash, card, invoice, or mobile. LEAP is the management platform behind it — service providers, contracts, creditors, debtors, and every terminal configuration. I work across the full backend: microservice Web APIs, real-time SignalR flows, and the data layer spanning PostgreSQL and MSSQL, under strict GDPR requirements.",
    stack: [
      "ASP.NET Core",
      "Blazor WASM/Server",
      "WPF",
      "SignalR",
      "PostgreSQL",
      "MSSQL",
      "OAuth2/OIDC",
      "Azure",
    ],
  },
  {
    name: "SPENN / Blockbonds",
    context: "Mobile banking & blockchain wallet · Cefalo",
    description:
      "A mobile banking system with a large customer base across multiple countries. Customers manage wallets, send and receive money instantly, and lend or borrow — with every money movement controlled through a blockchain-connected core. I built and maintained backend microservices on ASP.NET Core: wallet-to-wallet transfer flows, the lending process, and the integration layer between the banking services and the ledger, secured with OAuth2 and SSO on Azure.",
    stack: [
      "ASP.NET Core",
      "Microservices",
      "EF Core",
      "MSSQL",
      "OAuth2",
      "SSO",
      "Azure",
    ],
  },
  {
    name: "Cefalo Payroll",
    context: "Internal payroll platform · Cefalo",
    description:
      "The system that runs payroll for the company itself. It synchronizes employee data from the HR system over Kafka service-bus messaging, authenticates through Google SSO, and gates every action behind role-based access control. Engineering managers review performance and issue promotions from the system, and each promotion automatically triggers salary changes and notification emails through the notification service.",
    stack: [
      "NestJS",
      "Kafka",
      "MySQL",
      "TypeORM",
      "NextJS",
      "Google SSO",
      "RBAC",
    ],
  },
  {
    name: "AMBS",
    context: "Microfinance & banking · ASAI",
    description:
      "A microfinance and banking solution that helps issue small, socially responsible loans to low-income entrepreneurs — most of them women — across Asia and Africa. The platform handles the entire lending journey: customer creation, KYC verification, loan disbursement, and repayment schedule calculation. I designed the architecture on DDD and Clean Architecture, and built the SSO authentication server with IdentityServer4 that secures the whole suite.",
    stack: [
      "ASP.NET Core",
      "IdentityServer4",
      "Microservices",
      "Redis",
      "ELK",
      "MSSQL",
      "DDD",
    ],
  },
  {
    name: "EndToEnd & Remittance",
    context: "Banking operations · BRAC IT",
    description:
      "Two operational systems for BRAC Bank. EndToEnd manages the full lifecycle of physical banking products — issuing, tracking, and destroying cards and chequebooks with a complete audit trail. Remittance manages inbound money transfers for the bank. Both are built on ASP.NET with heavy relational database work: complex SQL, stored procedures, and carefully designed schemas for compliance-grade record keeping.",
    stack: ["ASP.NET Core", "EF", "MSSQL", "Angular", "Complex SQL"],
  },
  {
    name: "Portfolio Management & Trade Online",
    context: "Stock portfolio & online trading · Dimik",
    description:
      "The online face of a broker house — where stock-market customers manage their portfolios and trade over the web. Customers pull portfolio, trade, daily-transaction, and gain/loss reports, send deposit and withdrawal requests, and submit instrument buy/sell orders straight to an online trader. A customizable instrument board shows live market prices for every listed instrument, arranged the way each customer wants it.",
    stack: [
      "ASP.NET MVC",
      ".NET Framework",
      "C#",
      "MSSQL",
      "Database Design",
      "jQuery",
      "Bootstrap",
      "IIS",
    ],
  },
  {
    name: "BASE",
    context: "Stock trading & broker-house suite · Dimik",
    description:
      "A complete broker-house platform for the Dhaka stock market: real-time online trading for clients plus stock-market, finance, and HRM management for the house — across both web and desktop applications. The centerpiece is a live market board over SignalR showing real-time price movements, with portfolio deposits, withdrawals, and trade execution flowing through an ASP.NET MVC backend tuned for market-hours load.",
    stack: ["ASP.NET MVC", "SignalR", "ADO.NET", "EF", "MSSQL"],
  },
];

export const upworkReviews = [
  {
    project: ".NET Blazor affiliate marketing web application",
    period: "Apr 2021 — Dec 2021",
    rating: 4.7,
    endorsements: [] as string[],
    quotes: [
      "Emrul made great programming and functionality decisions and showed initiative on jumping in and finding technical solutions to problems we were having. Efficient with his work and offered good advice. We were very happy with him and are already using him on another project.",
    ],
  },
  {
    project: "Developers needed for creating Blazor Server application",
    period: "Mar 2021 — Apr 2021",
    rating: 5.0,
    endorsements: [] as string[],
    quotes: [
      "Emrul has great coding skills, takes initiative when required. Follows instructions and has a great work ethic. It was great working with him.",
    ],
  },
  {
    project: "ASP.NET Core Blazor website with payment gateway (WASM & Server)",
    period: "Oct 2020 — Nov 2020",
    rating: 5.0,
    endorsements: [] as string[],
    quotes: [
      "My project was in a new technology that is changing dynamically with time. He had knowledge about the subject. Emrul is a dedicated and hardworking freelancer! Went above and beyond to meet the expectations and completed the project sooner than anticipated. I would highly recommend him and will definitely hire him again in the future. Thank you for all the hard work!",
    ],
  },
  {
    project:
      "C# / Node.js developer — image manipulation & Facebook/Google Ads API",
    period: "Sep 2020 — Feb 2021",
    rating: 5.0,
    endorsements: ["Clear Communicator", "Reliable", "Committed to Quality"],
    quotes: [
      "Emrul is fast, fluent, and extremely capable. You won't regret hiring him. He delivered to tight deadlines, and was great at communicating the whole way through. Highly recommended.",
      "Emrul is diligent, forward-thinking, and efficient. He's a delight to work with, and has brought great insight and value to our projects. We plan to continue working with him in the future! If you're looking for someone with great C#, HTML, CSS, JS, and SQL skills (specifically in .NET Core), Emrul is your man.",
    ],
  },
  {
    project: "Backend C# and APIs",
    period: "Jul 2020 — Aug 2020",
    rating: 5.0,
    endorsements: [] as string[],
    quotes: [
      "Very reliable developer and his responses are very quick. He completed the tasks as proposed. I will certainly hire Emrul again soon.",
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "Jahangirnagar University",
    location: "Dhaka, Bangladesh",
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
  },
];

export const openSource = [
  {
    name: "Quizzer",
    description:
      "Online quiz and exam platform built as a Modular Monolith — Identity, Quiz, and Exam modules over a layered Core / Application / Infrastructure / Endpoints structure, with CQRS through MediatR. Backs JWT auth with refresh-token flow and multi-role RBAC (SuperAdmin, SupportAdmin, QuizAuthor, Examinee), plus timed exam delivery with countdown, auto-submit, and per-examinee analytics. Angular front end uses standalone components with a signals-based state model.",
    url: "https://github.com/mdemrulkayes/Quizzer",
    language: "C#",
    stack: [
      ".NET 10",
      "ASP.NET Core Web API",
      "CQRS / MediatR",
      "EF Core",
      "SQL Server",
      "JWT / RBAC",
      "Angular",
      "PrimeNG",
      "Tailwind CSS",
      "Docker Compose",
      "xUnit",
    ],
  },
  {
    name: "HotelManagementSystem",
    description:
      "Hotel management application spanning three UI/serving models over a shared Business / DataAccess / Common layering — an ASP.NET Core API backend with both a Blazor Server and a Blazor WebAssembly client. Covers room creation, booking, and payment configuration, packaged for containerized deployment via Docker Compose.",
    url: "https://github.com/mdemrulkayes/HotelManagementSystem",
    language: "C#",
    stack: [
      ".NET",
      "ASP.NET Core API",
      "Blazor Server",
      "Blazor WASM",
      "Layered Architecture",
      "Docker Compose",
    ],
  },
  {
    name: "UrlShortener",
    description:
      "URL shortener on ASP.NET Core Minimal APIs with EF Core and PostgreSQL — short-code generation, redirects, request validation, and a chronological list of shortened links. Request validation via FluentValidation, API exploration through OpenAPI + Scalar, and a Blazor Server UI (MudBlazor) that calls the API with Refit. Tested with xUnit and Shouldly on the EF Core InMemory provider, shipped through a GitHub Actions CI pipeline.",
    url: "https://github.com/mdemrulkayes/UrlShortener",
    language: "C#",
    stack: [
      ".NET 10",
      "ASP.NET Core Minimal APIs",
      "EF Core",
      "PostgreSQL",
      "Blazor Server",
      "MudBlazor",
      "Refit",
      "FluentValidation",
      "OpenAPI / Scalar",
      "xUnit + Shouldly",
      "GitHub Actions",
    ],
  },
];
