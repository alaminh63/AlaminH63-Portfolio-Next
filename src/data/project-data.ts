const projectData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart, payment processing, and order management.",
    longDescription:
      "This e-commerce platform was built to provide a seamless shopping experience. It includes user authentication, product catalog with search and filtering, shopping cart functionality, secure payment processing with Stripe, and a comprehensive order management system for both customers and administrators.",
    githubLink: "https://github.com/username/ecommerce-platform",
    liveLink: "https://ecommerce-demo.example.com",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe API",
      "AWS S3",
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart functionality",
      "Secure payment processing with Stripe",
      "Comprehensive order management",
    ],
    challenges: [
      "Handling large-scale data and user interactions",
      "Implementing real-time notifications for orders and updates",
      "Ensuring high availability and scalability",
    ],
    screenshots: [
      "https://example.com/screenshot1.png",
      "https://example.com/screenshot2.png",
    ],
    fullDetails:
      "This project was developed using a microservices architecture to ensure scalability and maintainability. The frontend is built with React, providing a dynamic and responsive user interface. The backend services are implemented using Node.js and Express, with MongoDB as the database. The application is deployed on AWS, utilizing S3 for storage and CloudFront for content delivery.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Web",
    date: "Jan 2023 - Jun 2023",
    rank: 1,
  },
  {
    id: 2,
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application that uses machine learning to prioritize and suggest tasks.",
    longDescription:
      "This task manager goes beyond simple to-do lists by incorporating machine learning algorithms to analyze user behavior and task patterns. It suggests optimal task scheduling, provides intelligent reminders, and adapts to the user's productivity patterns over time.",
    githubLink: "https://github.com/username/ai-task-manager",
    liveLink: "https://ai-tasks.example.com",
    technologies: [
      "React Native",
      "Python",
      "TensorFlow",
      "Flask",
      "PostgreSQL",
      "Firebase",
    ],
    features: [
      "ML-based task prioritization",
      "Adaptive reminder system",
      "Productivity analytics dashboard",
      "Natural language task entry",
      "Cross-platform synchronization",
      "Voice command support",
    ],
    challenges: [
      "Developed a custom ML model for task prioritization based on user behavior",
      "Implemented efficient data synchronization across multiple devices",
      "Designed battery-efficient background processing for mobile devices",
    ],
    screenshots: [
      "https://example.com/screenshot3.png",
      "https://example.com/screenshot4.png",
    ],
    fullDetails:
      "The application leverages TensorFlow for machine learning capabilities and is built with React Native for cross-platform compatibility. The backend is powered by Flask and PostgreSQL, ensuring robust data handling and processing.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mobile",
    date: "Apr 2023 - Aug 2023",
    rank: 2,
  },
  {
    id: 3,
    title: "Real-time Data Analytics Pipeline",
    description:
      "A scalable data processing system that ingests, processes, and visualizes streaming data in real-time.",
    longDescription:
      "This data pipeline was designed to handle high-volume streaming data from multiple sources. It processes millions of events per minute, applies complex transformations and analytics, and provides real-time visualizations and alerts. The architecture is fully distributed and fault-tolerant.",
    githubLink: "https://github.com/username/data-pipeline",
    technologies: [
      "Apache Kafka",
      "Spark Streaming",
      "Elasticsearch",
      "Kibana",
      "Docker",
      "Kubernetes",
      "Golang",
    ],
    features: [
      "Real-time data ingestion from multiple sources",
      "Scalable stream processing with automatic partitioning",
      "Complex event processing and anomaly detection",
      "Interactive dashboards for data visualization",
      "Configurable alerting system",
      "Historical data replay capabilities",
    ],
    challenges: [
      "Designed a fault-tolerant architecture that can handle node failures",
      "Optimized processing to maintain sub-second latency at high volumes",
      "Implemented a schema evolution strategy for changing data structures",
    ],
    screenshots: [
      "https://example.com/screenshot5.png",
      "https://example.com/screenshot6.png",
    ],
    fullDetails:
      "The pipeline is built using Apache Kafka for data ingestion and Spark Streaming for real-time processing. Elasticsearch and Kibana are used for data storage and visualization, while Docker and Kubernetes ensure scalability and deployment flexibility.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Data Science",
    date: "Sep 2023 - Dec 2023",
    rank: 3,
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for managing multiple social media accounts, scheduling posts, and analyzing engagement.",
    longDescription:
      "This social media dashboard allows users to connect and manage multiple social media accounts from a single interface. It includes features for scheduling posts, tracking engagement metrics, and analyzing audience demographics.",
    githubLink: "https://github.com/username/social-dashboard",
    liveLink: "https://social-dashboard.example.com",
    technologies: [
      "Vue.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "Social Media APIs",
    ],
    features: [
      "Multi-account management",
      "Post scheduling and automation",
      "Engagement tracking and analytics",
      "Audience demographics analysis",
      "Customizable reports",
    ],
    challenges: [
      "Integrating with multiple social media APIs",
      "Handling API rate limits and authentication",
      "Creating a user-friendly interface for complex data",
    ],
    screenshots: [
      "https://example.com/screenshot7.png",
      "https://example.com/screenshot8.png",
    ],
    fullDetails:
      "The frontend is built with Vue.js for a responsive and interactive user experience. The backend is powered by Node.js and Express, with MongoDB used for data storage. Chart.js is used for creating interactive charts and graphs.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e7d035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web",
    date: "Jul 2023 - Oct 2023",
    rank: null,
  },
  {
    id: 5,
    title: "Mobile Game - Space Shooter",
    description:
      "A classic space shooter game for iOS and Android with multiple levels, enemies, and power-ups.",
    longDescription:
      "This is a mobile space shooter game developed for iOS and Android. The game features multiple levels with increasing difficulty, various types of enemies, power-ups, and a scoring system.",
    technologies: ["Unity", "C#"],
    features: [
      "Multiple levels with increasing difficulty",
      "Variety of enemies with unique behaviors",
      "Power-ups and special weapons",
      "Scoring system and leaderboards",
      "Intuitive touch controls",
    ],
    challenges: [
      "Optimizing performance for mobile devices",
      "Balancing gameplay difficulty",
      "Creating engaging and addictive gameplay",
    ],
    screenshots: [
      "https://example.com/screenshot9.png",
      "https://example.com/screenshot10.png",
    ],
    fullDetails:
      "The game was developed using Unity and C#. It is designed to be easy to pick up and play but challenging to master.  Future updates may include online multiplayer and additional levels.",
    image:
      "https://images.unsplash.com/photo-1587833676435-2252079d4765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    category: "Mobile",
    date: "Nov 2022 - Feb 2023",
    githubLink: null,
    liveLink: null,
    rank: null,
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description:
      "A web application to track income, expenses, and budgets, providing insights into personal finances.",
    longDescription:
      "This personal finance tracker helps users manage their finances by tracking income, expenses, and budgets. It provides visual insights into spending patterns and helps users make informed financial decisions.",
    githubLink: "https://github.com/username/finance-tracker",
    liveLink: "https://finance-tracker.example.com",
    technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Income and expense tracking",
      "Budgeting and goal setting",
      "Financial reporting and visualizations",
      "Transaction categorization",
      "Account aggregation",
    ],
    challenges: [
      "Ensuring data security and privacy",
      "Integrating with bank APIs for automatic transaction import",
      "Creating intuitive and informative visualizations",
    ],
    screenshots: [
      "https://example.com/screenshot11.png",
      "https://example.com/screenshot12.png",
    ],
    fullDetails:
      "The frontend is built with React and Redux for state management. The backend is powered by Node.js and Express, with PostgreSQL used for data storage.  Security is a top priority, with encryption and secure authentication mechanisms in place.",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b79886f104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web",
    date: "Mar 2023 - Jul 2023",
    rank: null,
  },
];

export { projectData };
