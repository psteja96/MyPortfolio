export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Cypress',
        position: 'E2E Automation Testing',
        img: '/dist/src/assets/review1.png',
        review:
            'Proficient in end-to-end testing using Cypress, a fast, reliable, and developer-friendly testing framework that enables rapid test creation and execution.Leveraged Cypress to write robust and maintainable tests for Angular applications, ensuring high-quality and bug-free user experiences.'
    },
    {
        id: 2,
        name: 'Docker',
        position: 'Containerization',
        img: '/dist/src/assets/review2.png',
        review:'Experienced in containerizing Angular applications using Docker, ensuring consistent and reproducible deployments across various environments.Leveraged Docker to streamline development workflows, improve resource utilization, and facilitate efficient scaling of Angular applications.'
    },
    {
        id: 3,
        name: 'Amazon Web Services',
        position: 'Cloud Platform',
        img: '/dist/src/assets/review3.png',
        review:'Familiar with AWS services relevant to Angular development, including EBS, RDS, and CloudFront, for deploying and hosting scalable and high-performance web applications.Utilized AWS services to implement cloud-based solutions for Angular projects, enhancing application performance, reliability, and scalability.'
    },
    {
        id: 4,
        name: 'Agile DevOps',
        position: 'Software Development LifeCycle',
        img: '/dist/src/assets/review4.svg',
        review:'Advocate for Agile and DevOps principles, fostering collaboration between development and operations teams to streamline the software delivery lifecycle for Angular projects.Implemented continuous integration and continuous delivery (CI/CD) pipelines using tools like Jenkins CI/CD to automate builds, testing, and deployments of Angular applications.'
    },
];

export const myProjects = [
    {
        title: 'Social Blog - Microservice Architecture',
        desc: 'MERN stack application built with Microservice Architecture',
        subdesc:'Developed a social media blog using React and Node.js, implementing event-driven microservices that ensure system independence and fault tolerance. Utilized React Hooks and Node.js to manage state and data persistence, and deployed on AWS.',
        href: 'https://github.com/psteja96/Social-Blog-React--Node-Microservice',
        texture: '/dist/src/textures/project/project1.mp4',
        logo: '/dist/src/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/dist/src/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/dist/src/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/dist/src/assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/dist/src/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/dist/src/assets/jsIconGreen.svg',
            },
        ],
    },
    {
        title: 'ProShop - E-commerce Shop',
        desc: 'MERN Stack Application',
        subdesc:'Built a full-featured e-commerce platform from scratch using the MERN (MongoDB, Express, React, Node.js) stack with Redux Toolkit for state management. Implemented features like shopping cart, product reviews, user authentication (JSON Web Token), and admin dashboards for product, user, and order management',
        href: 'https://github.com/psteja96',
        texture: '/dist/src/textures/project/project4.mp4',
        logo: '/dist/src/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/dist/src/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/dist/src/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/dist/src/assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/dist/src/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/dist/src/assets/jsIconGreen.svg',
            },
        ],
    },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Gravitad(Freelance)',
        pos: 'MERN Consultant',
        duration: '2025-Present',
        title: "Reviewing Technical Requirements and providing solution architecture to the development team",
        icon: '/dist/src/assets/Gravitad.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Wipro',
        pos: 'Project Engineer',
        duration: '2019 - 2022',
        title: "Worked as Angular Full Stack Developer as well functioned as SME for projects under Automobile domain.",
        icon: '/dist/src/assets/Wipro.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Wipro',
        pos: 'Software Intern',
        duration: '2018 - 2019',
        title: "Trained under various web-technologies like Angular and React. Resolved medium priority Jira tickets",
        icon: '/dist/src/assets/Wipro.png',
        animation: 'salute',
    },
];