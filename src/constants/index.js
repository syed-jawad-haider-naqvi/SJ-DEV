const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Education",
      link: "#education",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 6, suffix: "", label: "Months of Training" },
    { value: 5, suffix: "+", label: "Projects Completed" },
    { value: 7, suffix: "+", label: "Technologies Mastered" },
    { value: 100, suffix: "%", label: "Commitment to Quality" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/logo.svg",
    },
    {
      imgPath: "/images/logos/expresslogo.png",
    },
    {
      imgPath: "/images/logos/nodejs.png",
    },
    {
      imgPath: "/images/logos/mongo.png",
    },
    {
      imgPath: "/images/logos/redux.png",
    },
    {
      imgPath: "/images/logos/firebase logo.png",
    },
    {
      imgPath: "/images/logos/git.png",
    },
    {
      imgPath: "/images/logos/figma.png",
    },
    {
      imgPath: "/images/logos/tailwind.png",
    },
    {
      imgPath: "/images/logos/pylogo.png",
    },
    {
      imgPath: "/images/logos/jup.png",
    },
    {
      imgPath: "/images/logos/csharplogo.png",
    },
    {
      imgPath: "/images/logos/dotnet.png",
    },
    {
      imgPath: "/images/logos/ssms.png",
    },
    {
      imgPath: "/images/logos/three.png",
    },
    {
      imgPath: "/images/logos/postman.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "Elegant Frontend",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "AI/ML Fusion",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Scalable Backend",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Experience",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Streamlined Workflows",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Jawad consistently delivered dependable backend systems and improved our workflows with well-structured, scalable solutions. His ownership of tasks, and optimizations and fixes made him a reliable part of the engineering team.",
      imgPath: "/images/exp 2.png",
      logoPath: "/images/logo2.png",
      title: "Associate Software Engineer",
      date: "Nov 2025 - Present",
      responsibilities: [
        "Set up event-driven microservices with RabbitMQ on Docker, implementing retries, DLQs, and fanout/direct exchanges for resilient message workflows.",
        "Applied clean architecture principles using modular layering, MongoDB transactions, structured logging, and factory patterns in Node.js services.",
        "Built scalable, client-facing workflows using Remix, Polaris, and Liquid for Shopify Apps and Extensions."
      ],
    },
    {
      review:
        "Jawad showed strong curiosity and commitment as an intern, implementing tasks with dedication. He learned fast, contributed meaningfully, and demonstrated clear potential for growth.",
      imgPath: "/images/exp 2.png",
      logoPath: "/images/logo2.png",
      title: "Software Engineering Intern",
      date: "August - October 2025",
      responsibilities: [
        "Migrated APIs from REST to GraphQL while working with OAuth2 and multi-system communication for Shopify Apps and Extensions.",
        "Collaborated on integrations with courier and messaging services, gaining exposure to logistics, ERP, and e-commerce ecosystems.",
        "Automated routine workflows using Python scripting and explored gRPC fundamentals, multithreading, and core Java."
      ],
    },
    {
      review:
        "Jawad quickly immersed at Tinkerbyte Labs, working hard—even late nights—on full-stack tasks, understanding and explaining client requirements. Though he faced challenges, being exposed to the actual lifecycle for the first time, he stayed committed, supported the team, and has strong potential with much more to unlock than he delivered here.",
      imgPath: "/images/exp3 (2).png",
      logoPath: "/images/logo3 (2).png",
      title: "Junior Full Stack Developer (MERN)",
      date: "June - July 2025",
      responsibilities: [
        "Built full-stack features using Next.js, PostgreSQL, and MERN in a collaborative team with clean, reusable code.",
        "Integrated payment integrations like Stripe and Fiserv for subscription logic in Fintech modules.",
        "Coordinated with the team in implementing features and understanding client requirements.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    // {
    //   name: "insta",
    //   url: "https://www.instagram.com/",
    //   imgPath: "/images/insta.png",
    // },
 
    // {
    //   name: "linkedin",
    //   url: "https://www.linkedin.com/",
    //   imgPath: "/images/linkedin.png",
    // },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };