import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useRef, useState } from "react";

const cardData = [
  {
    title: "Web Application",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQEwpyokFp1-KQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687153407109?e=2147483647&v=beta&t=2Q-VYQMua5tRYrLKaFSrN6MHo-43pJRxdo3Q4M0Ou2g",
    description:
      "A web application is a software accessible via a browser, enabling user interaction over the internet. It runs on a server and handles tasks like data storage and processing.",
    backContent: [
      "Churn Analytics",
      "Prescriptive Analytics",
      "Predictive Analytics",
      "Data Visualization",
    ],
  },
  {
    title: "Android Application",
    image: "https://www.inforises.com/assets/app-development/android-app.png",
    description:"An Android application is software created for devices using the Android OS. It offers various functions, from entertainment to productivity, and is available on platforms like Google Play.",
    backContent: ["User-Centered Design", "Iconography", "Responsive Design"],
  },
  {
    title: "IOS Application",
    image:
      "https://i0.wp.com/ahex.co/wp-content/uploads/2022/06/iphone-application-development.webp?fit=409%2C400&ssl=1",
      description:"An iOS application is a mobile software program developed specifically for Apple's iOS operating system, which powers iPhones, iPads, and iPod Touch devices. These apps are distributed through the Apple App Store and are built using languages like Swift or Objective-C.",
    backContent: [
      "Structural Engineering",
      "Interior Design",
      "3D Modeling",
      "Roofing Systems",
      "Lighting Design",
    ],
  },
  {
    title: "UX and UI Design",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGXHu8GXxovS-TZNEkiBi6LfjGIUr0mqNeQ&s",
      description: "UI (User Interface) design focuses on the look, layout, and interactive elements of a product. UX (User Experience) design centers on the overall feel, usability, and user satisfaction when interacting with the product.",
    backContent: [
      "User-Centered Design",
      "User Interface (UI) Design",
      "User Experience (UX) Design",
    ],
  },
  {
    title: "Front end Development",
    image:
      "https://i8is.com/wp-content/uploads/2024/03/front-end-developer.png",
      description:"Front-end development involves creating the part of a website or web application that users interact with directly. It focuses on building the user interface using technologies like HTML, CSS, and JavaScript to ensure a visually appealing and responsive experience.",
    backContent: [
      "HTML & CSS",
      "API Integration",
      "Accessibility (a11y)",
      "Web Components",
    ],
  },
  {
    title: "Back end Development",
    image:
      "https://www.netguru.com/hs-fs/hubfs/DALL%C2%B7E%202023-10-30%2010.33.27%20-%20A%20photo%20of%20a%20modern%20workspace%20with%20a%20computer%20displaying%20a%20code%20editor%20focused%20on%20back-end%20development.%20Surrounding%20the%20computer%20are%20holographic%20proje.png?width=1000&height=571&name=DALL%C2%B7E%202023-10-30%2010.33.27%20-%20A%20photo%20of%20a%20modern%20workspace%20with%20a%20computer%20displaying%20a%20code%20editor%20focused%20on%20back-end%20development.%20Surrounding%20the%20computer%20are%20holographic%20proje.png",
      description: "Back-end development is the server-side programming that manages the logic, databases, and server configurations of a web application. It ensures data is processed and delivered to the front end, typically using languages like Python, Java, or Node.js.",
    backContent: [
      "Session Management",
      "CRUD Operations",
      "Data Security",
      "Backend as a Service",
      "Load Balancing",
    ],
  },
  {
    title: "Testing and QA",
    image:
      "https://www.softwebsolutions.com/wp-content/uploads/2023/06/QA-Automation-Testing-Services.png",
      description: "Testing and Quality Assurance (QA) involve evaluating software to ensure it meets specified requirements and functions correctly. Testing identifies bugs and issues, while QA focuses on improving processes to enhance product quality and reliability.",
    backContent: ["Software Testing", "Test Case", "Unit Testing"],
  },
  {
    title: "Web Hosting",
    image:
      "https://sm.pcmag.com/pcmag_uk/about/h/how-we-tes/how-we-test-web-hosting-services_q3pf.jpg",
      description: "Web hosting is a service that allows individuals or organizations to store and make their websites accessible on the internet. It involves providing server space, connectivity, and other technologies required to serve web pages to users online.",
    backContent: ["Web Server", "Domain Name", "Bandwidth", "SSL Certificate"],
  },
  {
    title: "Cloud Server",
    image:
      "https://www.clook.net/wp-content/uploads/2020/11/cloud-server-illustration-1-768x609.png",
      description: "A cloud server is a virtual server hosted in a cloud computing environment, providing on-demand resources and scalable computing power over the internet. It allows users to access and manage applications and data without relying on physical hardware.",
    backContent: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
    ],
  },
];

const FlipCard = ({ image, description, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      style={styles.flipCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          ...styles.flipCardInner,
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div style={styles.flipCardFront}>
          <img src={image} alt={title} style={styles.flipCardImage} />
          <h3 style={styles.flipCardTitle}>{title}</h3>
        </div>
        <div style={styles.flipCardBack}>
          <h3 style={styles.flipCardBackTitle}>{title}</h3>
          <ul style={styles.description}>{description}</ul>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const contentRef = useRef(null);

  const handleNext = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.carousel}>
        <div style={styles.carouselWrapper}>
          <div style={styles.carouselHeader}>
            <div style={styles.carouselControls}>
              <button style={styles.carouselArrow} onClick={handlePrev}>
                &lt;
              </button>
              <button style={styles.carouselArrow} onClick={handleNext}>
                &gt;
              </button>
            </div>
          </div>
          <ul style={styles.carouselContent} ref={contentRef}>
            {cardData.map((card, index) => (
              <li key={index} style={styles.carouselItem}>
                <FlipCard
                  image={card.image}
                  description={card.description}
                  title={card.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1300px",
    marginTop: "-30px ",
    padding: "20px",
  },
  carousel: {
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  carouselWrapper: {
    position: "relative",
    overflow: "hidden",
  },
  carouselHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  carouselControls: {
    display: "flex",
    gap: "14px",
  },
  carouselArrow: {
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselContent: {
    display: "flex",
    overflowX: "auto",
    scrollbarWidth: "none",
    padding: 0,
    margin: 0,
    gap: "20px",
    listStyle: "none",
  },
  carouselItem: {
    flex: "0 0 auto",
    width: "300px", // Increased the width of each card
    transition: "transform 0.3s ease-in-out",
  },
  flipCard: {
    width: "100%",
    height: "300px",
    perspective: "1000px",
    cursor: "pointer",
    borderRadius: "10px",
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: 0, // Removed padding
    margin: 0, // Removed margin
  },
  flipCardBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#ececec",
    color: "#333",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Start the content from the top
    padding: "20px",
    borderRadius: "10px",
  },
  flipCardImage: {
    width: "100%",
    height: "100%", // Ensure image fills the card
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
    margin: 0, // Removed margin
  },
  flipCardTitle: {
    marginTop: "0px", // Removed space above the card
    fontSize: "20px",
    color: "#333",
    fontWeight: "600",
  },
  flipCardBackTitle: {
    textAlign: "center",
    marginBottom: "10px", // Space between title and content
    fontSize: "20px",
    fontWeight: "600",
  },
  backContentList: {
    marginTop: "0",
    padding: "0 0 0 20px", // Left aligned with bullet points
    listStyle: "disc",
    textAlign: "left",
    width: "100%",
  },
  backContentItem: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
  },
  description: {
  textAlign: "justify",
  fontSize: "15px",
  }
};

export default Carousel;
