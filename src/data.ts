import { Project, Education, Skill, Experience, Certification } from './types';

export const personalInfo = {
  name: 'BANDLA HARIKA',
  role: 'Aspiring Software Engineer',
  subRoles: [
    'Aspiring Software Engineer',
    'AI & Machine Learning Enthusiast',
    'Cloud Computing Learner'
  ],
  location: 'Hyderabad, India',
  email: 'bandlaharika@gmail.com',
  about: 'I am a Computer Science undergraduate at CMR Engineering College(2024–2027) with a CGPA of 8.98. I enjoy solving problems, building AI-powered applications, and continuously learning new technologies. My interests include Artificial Intelligence, Machine Learning, Cloud Computing, and Software Development. I am looking for internship and research opportunities where I can contribute while continuously improving my technical skills.',
  careerObjective: 'Motivated and detail-oriented Computer Science Engineering student seeking a challenging Software Engineering internship. Eager to leverage strong analytical abilities, hands-on experience in AI/ML model development, and cloud computing foundations to build robust, scalable solutions in a collaborative environment.',
  socials: {
    github: 'https://github.com/Harika1234-git',
    linkedin: 'https://www.linkedin.com/in/bandla-harika-0794a5347',
    leetcode: 'https://leetcode.com/u/HARIKA_BANDLA02/'
  }
};

export const educationList: Education[] = [
  {
    institution: 'CMR Engineering College',
    degree: 'B.Tech in Computer Science Engineering',
    duration: '2024 – 2027',
    grade: 'CGPA: 8.98',
    details: [
      'Core Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Machine Learning.',
      'Active member of the Technical & Coding Club.',
      'Participated in campus-wide hackathons and coding challenges.'
    ]
  },
  {
  institution: 'Government Polytechnic Korutla',
  degree: 'Diploma in Civil Engineering',
  duration: '2021 – 2024',
  grade: 'CGPA: 9.77 / 10',
  details: [
    'Graduated with a CGPA of 9.77/10, demonstrating consistent academic excellence throughout the diploma program.',
    'Built a strong foundation in Surveying, Structural Engineering, Building Materials, RCC Design, Transportation Engineering, and Construction Technology.',
    'Gained practical experience through laboratory sessions, engineering drawing, surveying fieldwork, and academic projects, strengthening technical, analytical, and problem-solving skills.'
  ]

  },
  {
    institution: 'Secondary School Certificate (SSC)',
    degree: 'Class X Board Education',
    duration: '2021',
    grade: 'GPA: 10.0',
    details: [
      'Graduated with a perfect GPA of 10.0.',
      'Represented school in regional mathematics olympiad and science exhibitions.'
    ]
  }
];

export const skillsList: Skill[] = [
  // Programming
  { name: 'Java', category: 'Programming', level: 4 },
  { name: 'C', category: 'Programming', level: 4 },
  
  // Web
  { name: 'HTML', category: 'Web', level: 5 },
  { name: 'CSS', category: 'Web', level: 4 },
  
  // AI & Machine Learning
  { name: 'Machine Learning', category: 'AI & Machine Learning', level: 4 },
  { name: 'Deep Learning', category: 'AI & Machine Learning', level: 3 },
  { name: 'Data Preprocessing', category: 'AI & Machine Learning', level: 5 },
  { name: 'Model Evaluation', category: 'AI & Machine Learning', level: 4 },
  
  // Cloud
  { name: 'Google Cloud Platform (GCP)', category: 'Cloud', level: 4 },
  
  // Database
  { name: 'MySQL', category: 'Database', level: 4 },
  
  // Core CS
  { name: 'Data Structures & Algorithms (DSA)', category: 'Core CS', level: 4 },
  { name: 'DBMS', category: 'Core CS', level: 4 },
  { name: 'Operating Systems (OS)', category: 'Core CS', level: 4 },
  
  // Tools
  { name: 'Git', category: 'Tools', level: 4 },
  { name: 'GitHub', category: 'Tools', level: 5 },
  { name: 'VS Code', category: 'Tools', level: 5 },
  { name: 'Tableau', category: 'Tools', level: 3 },
  { name: 'Excel', category: 'Tools', level: 4 }
];

export const projectsList: Project[] = [
  {
    id: 'lung-cancer-detection',
    title: 'Hybrid Deep Learning Framework for Automated Lung Cancer Diagnosis',
    description:
      'Developed a hybrid deep learning framework integrating InceptionV3 and Vision Transformer (ViT) for automated lung cancer diagnosis using CT and X-ray images. Built a web-based dashboard to classify images into Normal, Benign, and Malignant categories with confidence scores, supporting early clinical diagnosis. Achieved 99.54% classification accuracy using TensorFlow and transfer learning techniques.',
    githubUrl: 'https://github.com/Harika1234-git/Lung-Cancer-detection',
    tags: [
      'Python',
      'TensorFlow',
      'InceptionV3',
      'Vision Transformer',
      'Deep Learning',
      'Medical AI',
      'Flask'
    ],
    image: 'lung_cancer_img',
    featured: true,
    metrics: '99.54% Classification Accuracy'
  },

  {
    id: 'sign-language-translator',
    title: 'Two-Way Sign Language Translator',
    description:
      'Developed an AI-powered communication system that converts sign language into text and speech, and transforms text or speech back into sign language using TensorFlow, OpenCV, MediaPipe, and Django. Implemented real-time gesture recognition, speech recognition, and text-to-speech to improve accessibility for the deaf and hard-of-hearing community.',
    githubUrl: 'https://github.com/Harika1234-git/Two-Way-Sign-Language-Translator',
    tags: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'MediaPipe',
      'Django',
      'Computer Vision'
    ],
    image: 'sign_language_img',
    featured: true,
    metrics: 'Real-Time Gesture Recognition'
  },
  {
  id: 'second-hand-vehicle-ecommerce',
  title: 'Second-Hand Vehicle E-Commerce Website',
  description:
    'Developed a full-stack web application for buying and selling second-hand vehicles with dedicated Buyer, Seller, and Admin dashboards. Implemented secure user authentication, role-based access control, vehicle listing management, image uploads using Multer, seller contact functionality, and an admin panel for managing users and vehicle listings. Built a responsive interface using HTML, CSS, and JavaScript with a Node.js, Express.js, and MySQL backend.',
  githubUrl: 'https://github.com/Harika1234-git/Second-Hand-Vehicle-E-Commerce-Website',
  tags: [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MySQL',
    'Multer',
    'Full Stack'
  ],
  image: 'vehicle_ecommerce_img',
  featured: true,
  metrics: 'Role-Based Buyer, Seller & Admin Platform'
}
];

export const experiencesList: Experience[] = [
  {
    id: 'exp-microsoft-elevate',
    organization: 'Microsoft Elevate — Supported by Microsoft and AICTE',
    role: 'Virtual Intern – Power BI for Business Applications',
    duration: 'Feb 2026 – Mar 2026',
    description: [
      'Completed a 4-week virtual internship in Power BI for Business Applications under the Microsoft Elevate initiative.',
      'Developed interactive dashboards and reports using Power BI for business data visualization and analysis.',
      'Gained hands-on experience in data modeling, Power Query, DAX, and business intelligence concepts.',
      'Strengthened analytical and reporting skills by creating data-driven insights and interactive visualizations.'
    ],
    type: 'Virtual Internship',
    skills: [
      'Power BI',
      'Data Visualization',
      'Business Intelligence',
      'Power Query',
      'DAX',
      'Data Modeling'
    ],
    certificateUrl: 'https://drive.google.com/file/d/1IlBom0JDizlxCCm56xAGyACj5wOacDvQ/view?usp=drive_link'
  }

];

export const certificationsList: Certification[] = [
  {
    title: 'Agentforce Specialist',
    issuer: 'Salesforce',
    date: 'May 2026',
    category: 'AI & ML',
    credentialUrl: 'https://trailhead.salesforce.com/',
    skillsGained: ['Salesforce', 'AI Agents', 'Agentforce', 'NLP Integration', 'Copilot Setup'],
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/Harika1234-git/Protfolio-assets/main/certificates/salesforce.pdf',
    viewUrl: 'https://github.com/Harika1234-git/Protfolio-assets/blob/main/certificates/salesforce.pdf'
  },
  {
    {
  title: 'AWS Cloud Practitioner Essentials',
  issuer: 'AWS Training & Certification',
  date: 'Jul 2025',
  category: 'Cloud',
  credentialUrl: 'https://aws.amazon.com/training/',
  skillsGained: [
    'Amazon Web Services (AWS)',
    'Cloud Computing',
    'AWS Core Services',
    'Cloud Security',
    'AWS Pricing and Support'
  ],
  previewImage:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'',
  pdfUrl: 'https://raw.githubusercontent.com/Harika1234-git/Protfolio-assets/main/certificates/AWS%20Practioner.pdf',
  viewUrl: 'https://github.com/Harika1234-git/Protfolio-assets/blob/main/certificates/AWS%20Practioner.pdf'
},
  },
  {
    title: 'Hexart AI',
    issuer: 'Hexart AI',
    date: 'Aug 2025',
    category: 'AI & ML',
    credentialUrl: '#',
    skillsGained: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python', 'Model Evaluation', 'Hyperparameter Tuning'],
    previewImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/hexart-ai.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/hexart-ai.pdf'
  },
  {
    title: 'Deloitte Job Simulation',
    issuer: 'Deloitte',
    date: 'May 2025',
    category: 'Professional',
    credentialUrl: '#',
    skillsGained: ['Cloud Migration Strategy', 'API Specification', 'Technology Consulting', 'Enterprise Architecture', 'Business Presentation'],
    previewImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/deloitte.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/deloitte.pdf'
  },
  {
    title: 'Tata iQ Job Simulation',
    issuer: 'Tata iQ',
    date: 'Mar 2025',
    category: 'Professional',
    credentialUrl: '#',
    skillsGained: ['Tableau', 'Data Analysis', 'Business Intelligence', 'Excel Dashboards', 'Visual Storytelling'],
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/tata-iq.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/tata-iq.pdf'
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2025',
    category: 'Software Engineering',
    credentialUrl: '#',
    skillsGained: ['Python', 'Object-Oriented Programming', 'Algorithms', 'Basic Syntax'],
    previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/python-essentials-1.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/python-essentials-1.pdf'
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'Mar 2025',
    category: 'AI & ML',
    credentialUrl: '#',
    skillsGained: ['Data Analysis', 'Statistics', 'Data Visualization', 'Python'],
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/introduction-to-data-science.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/introduction-to-data-science.pdf'
  },
  {
    title: 'Network Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2025',
    category: 'Networking',
    credentialUrl: '#',
    skillsGained: ['Network Protocols', 'Subnetting', 'Routing', 'Switching', 'OSI Model'],
    previewImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/network-basics.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/network-basics.pdf'
  },
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2025',
    category: 'Networking',
    credentialUrl: '#',
    skillsGained: ['IoT Architecture', 'Sensors', 'Smart Devices', 'Embedded Systems', 'Network Connectivity'],
    previewImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/introduction-to-iot.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/introduction-to-iot.pdf'
  },
  {
    title: 'Artificial Intelligence Primer',
    issuer: 'Infosys Springboard',
    date: 'Nov 2024',
    category: 'AI & ML',
    credentialUrl: '#',
    skillsGained: ['AI Core Concepts', 'Search Algorithms', 'Knowledge Representation', 'Machine Learning Intro'],
    previewImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/infosys-ai-primer.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/infosys-ai-primer.pdf'
  },
  {
    title: 'Generative AI',
    issuer: 'Infosys Springboard',
    date: 'Jan 2025',
    category: 'AI & ML',
    credentialUrl: '#',
    skillsGained: ['Generative Models', 'LLMs', 'Prompt Engineering', 'Transformer Architectures', 'AI Safety'],
    previewImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    pdfUrl: 'https://raw.githubusercontent.com/sharanya-1521/portfolio-assets/main/certificates/infosys-generative-ai.pdf',
    viewUrl: 'https://github.com/sharanya-1521/portfolio-assets/blob/main/certificates/infosys-generative-ai.pdf'
  }
];
