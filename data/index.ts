export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/intro.gif",
      spareImg: "",
    },
    {
      id: 2,
      title: "I’m flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building scalable Instgarm auto responder",
      description: "For Business Owners",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CloudVault",
      des: "Modern fullstack Storage Mangement Platform, enabling real-time collaboration, editing, and sharing of files with ease.",
      img: "/prj-cloudvault.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/Developer-RONNIE/cloudvault",
    },
    {
      id: 2,
      title: "EduScore",
      des: "An enterprise-grade, full-stack Learning Management Application using modern web technologies and AWS services.",
      img: "/prj-eduscore.png",
      iconLists: ["../next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/Developer-RONNIE/lmsPortal",
    },
    {
      id: 3,
      title: "Easy Scrape",
      des: "Simple yet Powerful web extension designed for business owners and analysts to effortlessly extract and analyze data from Google Maps",
      img: "/prj-gmaps.png",
      iconLists: ["/tail.svg", "/ts.svg"],
      link: "https://github.com/Developer-RONNIE/google-maps-easy-scrape",
    },
    {
      id: 4,
      title: "3D animated Website ",
      des: "A frontend based luxury-inspired website featuring elegant scroll-triggered animations and geometric transitions for a premium visual experience.",
      img: "/prj-animated.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/Developer-RONNIE/beeown-animated-website",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Alapan made the whole process feel effortless. From the start, our collaboration was enjoyable, and the way he handled everything, from the smooth negotiations to delivering the project on time. My ShimmerLuxe jewelry site turned out just as I imagined, clean and elegant. I’m already excited to work with him again.",
      name: "Bibek",
      title: "Director of ShimerLuxe",
      img: "/t4.png",
    },
    {
      quote:
        "Collaborating with Alapan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Alapan is the ideal partner.",
      name: "Adam",
      title: "Music Beats Creator",
      img: "/t5.png",
    },
    {
      quote:
        "Alapan did a fantastic job building my 3D e-commerce site. The website looks amazing, and the CMS he created makes managing everything so simple. I also love the sales graphs and the built-in calculator for the admin dashboard—they’re really helpful. Overall, I’m very happy with the outcome. Couldn't be happier with his work!",
      name: "Elizabeth",
      title: "E-commerce store Owner",
      img: "/t3.png",
    },
    {
      quote:
        "Working with such a young talent on our poker game and other projects was fun. His expertise and problem-solving were key to our success, and his enthusiasm energized the team. Alapan consistently delivered exceptional work. I highly recommend him and wish him the best of luck in his future ventures and adventures.",
      name: "Rahul",
      title: "CTO, Sherlock Studio",
      img: "/t2.png",
    },
    {
      quote:
        "Alapan excelled as both a backend developer and technical team lead at Sherlock Games. His sharp market awareness & insightful contributions at board meetings helped shape our strategy. A team player who consistently goes above and beyond. I’m confident in his bright future and wish him success in all his ventures.",
      name: "Akash",
      title: "CEO, Sherlock Studio",
      img: "/t1.png",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Backend Engineer Intern - Sherlock Games",
      desc: "Assisted in development of web-based poker game, utilizing React.js, Express.js & socket.io to integrated video streaming into the game",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Backend Engineer SDE - Sherlock Games",
      desc: "Worked under CTO to convert the web-based poker game for Android platform using React Native libraries",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Web Dev Projects",
      desc: "Helped multiple satisfied clients build their customized e-commerce stores and admin dashboards.",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Backend Developer",
      desc: "Maintained production-grade code and resolved user-facing feature issues.",
      className: "md:col-span-2", 
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Developer-RONNIE",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/ronnie002_",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/alapan-banerjee/",
    },
  ];