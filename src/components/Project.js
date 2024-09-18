import React, { useRef, useState } from 'react'
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
    title: 'EduTrack 360',
    imgSrc:
      'https://png.pngtree.com/thumb_back/fh260/background/20230620/pngtree-educational-essentials-3d-school-desk-and-learning-tools-image_3646625.jpg',
    points: [
      'Provides quality education',
      'Offers placements to corporate sectors',
      'Customizable learning modules',
      'Focus on practical skills',
      'Connects students with industry leaders',
    ],
  },
  {
    title: 'E-com 360',
    imgSrc:
      'https://media.licdn.com/dms/image/D4D12AQG_ouCNoeut8Q/article-cover_image-shrink_720_1280/0/1679638788377?e=2147483647&v=beta&t=FmOcgD4kkGcHtM5xdEiGlgWyobjF4IWtUONNK3qRfxw',
    points: [
      'User-friendly online store',
      'Advanced inventory management',
      'Secure payment processing',
      'Detailed sales analytics',
      'Customizable product catalogs',
    ],
  },
  {
    title: 'CheckIn360',
    imgSrc:
      'https://q-xx.bstatic.com/xdata/images/hotel/max1200/23172828.jpg?k=81a281a64d4499b17fde477b5d75187a91d93a96a5bbed6e434b65d86161dd19&o=',
    points: [
      'Dining sales monitor',
      '50% sales increase',
      'Efficient reservation management',
      'Comprehensive inventory tracking',
      'Customer satisfaction enhancement',
    ],
  },
  {
    title: 'CRM360',
    imgSrc:
      'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/09/CRM_automation.jpeg.jpg',
    points: [
      'Better dashboard for business',
      'Monitor your revenue with analyzed data',
      'Analyze business data effectively',
      'Monitor every activity with precision',
      'All business operations in your hand',
    ],
  },
  {
    title: 'BioVision360',
    imgSrc:
      'https://www.lystloc.com/blog/wp-content/uploads/2023/12/7-Applications-Of-Facial-Recognition-Technology.webp',
    points: [
      'Monitor employee activity',
      'Track employee in and out times',
      'Employee attendance and count monitoring',
      'High accuracy facial recognition',
      'Secure access control system',
    ],
  },
]

const FlipCard = ({ imgSrc, points, title }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseEnter = () => {
    setIsFlipped(true)
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
  }

  return (
    <div
      style={styles.flipCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          ...styles.flipCardInner,
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div style={styles.flipCardFront}>
          <img src={imgSrc} alt={title} style={styles.flipCardImage} />
          <h3 style={styles.flipCardTitle}>{title}</h3>
        </div>
        <div style={styles.flipCardBack}>
          <h3 style={styles.flipCardBackTitle}>{title}</h3>
          <ul style={styles.backContentList}>
            {points.map((point, index) => (
              <li key={index} style={styles.backContentItem}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const Carousel = () => {
  const contentRef = useRef(null)

  const handleNext = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.carouselWrapper}>
        <div style={styles.carouselHeader}>
          {/* <div style={styles.carouselControls}> */}
            <button style={styles.carouselArrow} onClick={handlePrev}>
              &lt;
            </button>
            <button style={styles.carouselArrow} onClick={handleNext}>
              &gt;
            </button>
          {/* </div> */}
        </div>
        <ul style={styles.carouselContent} ref={contentRef}>
          {cards.map((card, index) => (
            <li key={index} style={styles.carouselItem}>
              <FlipCard
                imgSrc={card.imgSrc}
                points={card.points}
                title={card.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1500px',
    margin: '0 auto',
    padding: '20px',
  },
  carousel: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  carouselWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  carouselHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  carouselControls: {
    display: 'flex',
    gap: '14px',
  },
  carouselArrow: {
    // padding: '10px',
    paddingBottom: '6px',
    backgroundColor: 'white',
    color: 'black',
    border: 'solid black',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContent: {
    display: 'flex',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    padding: 0,
    margin: 0,
    gap: '20px',
    listStyle: 'none',
  },
  carouselItem: {
    flex: '0 0 auto',
    width: '300px', // Increased the width of each card
    transition: 'transform 0.3s ease-in-out',
  },
  flipCard: {
    width: '100%',
    height: '300px',
    perspective: '1000px',
    cursor: 'pointer',
    borderRadius: '10px',
  },
  flipCardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  flipCardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 0, // Removed padding
    margin: 0, // Removed margin
  },
  flipCardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ececec',
    color: '#333',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Start the content from the top
    padding: '20px',
    borderRadius: '10px',
  },
  flipCardImage: {
    width: '100%',
    height: '100%', // Ensure image fills the card
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    margin: 0, // Removed margin
  },
  flipCardTitle: {
    marginTop: '0px', // Removed space above the card
    fontSize: '20px',
    color: '#333',
    fontWeight: '600',
  },
  flipCardBackTitle: {
    textAlign: 'center',
    marginBottom: '10px', // Space between title and content
    fontSize: '20px',
    fontWeight: '600',
  },
  backContentList: {
    marginTop: '0',
    padding: '0 0 0 20px', // Left aligned with bullet points
    listStyle: 'disc',
    textAlign: 'left',
    width: '100%',
  },
  backContentItem: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
}

export default Carousel