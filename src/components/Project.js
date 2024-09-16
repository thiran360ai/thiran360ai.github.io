import React, { useEffect, useState } from 'react';

const Project = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const cardListStyles = {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
    height: '400px',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const cardStyles = {
    flex: '0 0 100%',
    transition: 'transform 0.8s ease-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardImageWrapperStyles = {
    width: '40%', // Increased image width
    height: '350px', // Fixed image height
    padding: '10px',
    border: '2px solid #4B7CB6',
    borderRadius: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const cardImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  };

  const cardContentStyles = {
    padding: '1rem',
    width: '60%', // Adjusted content width to fit with increased image width
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  };

  const cardTitleStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'left', // Left-align title
    marginBottom: '16px',
    color: '#333',
    textTransform: 'uppercase',
    marginLeft: '10px', // Added space on the left
  };

  const cardTextStyles = {
    fontFamily: 'serif',
    fontSize: '16px',
    lineHeight: '1.5',
    paddingLeft: '0', // Remove padding for list
  };

  const pointStyles = {
    marginBottom: '8px',
    listStyleType: 'disc',
    marginLeft: '20px',
    color: '#555',
  };

  const sectionStyles = {
    margin: '32px',
    position: 'relative',
  };

  const buttonStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 1,
  };

  const leftButtonStyles = {
    ...buttonStyles,
    left: '10px',
  };

  const rightButtonStyles = {
    ...buttonStyles,
    right: '10px',
  };

  const carouselStyles = {
    display: 'flex',
    flexDirection: 'row',
    transition: 'transform 0.8s ease-out',
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const cards = [
    {
      title: 'Capture360',
      imgSrc: 'https://i.ytimg.com/vi/cRzBL4fhDnM/maxresdefault.jpg',
      points: [
        'Captures 360-degree views',
        'Enhanced immersive experience',
        'Suitable for virtual tours and panoramic imagery',
        'High-resolution image capture',
        'Seamless integration with VR systems',
      ],
    },
    {
      title: 'Educational System',
      imgSrc: 'https://png.pngtree.com/thumb_back/fh260/background/20230620/pngtree-educational-essentials-3d-school-desk-and-learning-tools-image_3646625.jpg',
      points: [
        'Provides quality education',
        'Offers placements to corporate sectors',
        'Customizable learning modules',
        'Focus on practical skills',
        'Connects students with industry leaders',
      ],
    },
    {
      title: 'E-commerce',
      imgSrc: 'https://media.licdn.com/dms/image/D4D12AQG_ouCNoeut8Q/article-cover_image-shrink_720_1280/0/1679638788377?e=2147483647&v=beta&t=FmOcgD4kkGcHtM5xdEiGlgWyobjF4IWtUONNK3qRfxw',
      points: [
        'User-friendly online store',
        'Advanced inventory management',
        'Secure payment processing',
        'Detailed sales analytics',
        'Customizable product catalogs',
      ],
    },
    {
      title: 'Hotel Management',
      imgSrc: 'https://acropolium.com/img/articles/hotel-management-system-development/img08.jpg',
      points: [
        'Dining sales monitor',
        '50% sales increase',
        'Efficient reservation management',
        'Comprehensive inventory tracking',
        'Customer satisfaction enhancement',
      ],
    },
    {
      title: 'Kovais',
      imgSrc: 'https://media.licdn.com/dms/image/D4D12AQEkkZKE3ebPiw/article-cover_image-shrink_720_1280/0/1682337224891?e=2147483647&v=beta&t=M6mEOw7VHPWVr63kC57t0n2Axy-alxBcO_LbGx9yycE',
      points: [
        'Turns business problems into solutions',
        'Increases sales by 80%',
        'Automates 80% of manual work',
        'Data-driven decision-making',
        'Optimizes operational efficiency',
      ],
    },
    {
      title: 'Pago Achievers',
      imgSrc: 'https://static-content.cihms.com/wp-content/uploads/2022/03/ai-in-hospitality.jpg',
      points: [
        'Student placements',
        'Transition from college to corporate',
        'Career counseling and guidance',
        'Industry-ready skill development',
        'Networking opportunities with employers',
      ],
    },
    {
      title: 'CRM',
      imgSrc: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/09/CRM_automation.jpeg.jpg',
      points: [
        'Better dashboard for business',
        'Monitor your revenue with analyzed data',
        'Analyze business data effectively',
        'Monitor every activity with precision',
        'All business operations in your hand',
      ],
    },
    {
      title: 'Face Recognition',
      imgSrc: 'https://www.lystloc.com/blog/wp-content/uploads/2023/12/7-Applications-Of-Facial-Recognition-Technology.webp',
      points: [
        'Monitor employee activity',
        'Track employee in and out times',
        'Employee attendance and count monitoring',
        'High accuracy facial recognition',
        'Secure access control system',
      ],
    },
  ];

  return (
    <section style={sectionStyles}>
      <div style={cardListStyles}>
        <div
          style={{
            ...carouselStyles,
            transform: `translateX(-${currentCardIndex * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div key={index} style={cardStyles}>
              <div style={cardImageWrapperStyles}>
                <img src={card.imgSrc} alt={card.title} style={cardImageStyles} />
              </div>
              <div style={cardContentStyles}>
                <h3 style={cardTitleStyles}>{card.title}</h3>
                <ul style={cardTextStyles}>
                  {card.points.map((point, idx) => (
                    <li key={idx} style={pointStyles}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button style={leftButtonStyles} onClick={handlePrev}>
          &lt;
        </button>
        <button style={rightButtonStyles} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Project;
