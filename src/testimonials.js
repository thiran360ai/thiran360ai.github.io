import React, { useRef } from 'react'

const cardData = [
  {
    name: 'Eben Paul',
    image: 'c1.jpg',
    cardContent: ['★★★★★', 'Thank you for your outstanding work.'],
  },
  {
    name: 'Siddhu',
    image: 'c2.jpeg',
    cardContent: ['★★★★★', 'I deeply appreciate your exceptional work.'],
  },
  {
    name: 'Sathish Kumar',
    image: 'c3.jpeg',
    cardContent: [
      '★★★★★',
      'I am incredibly grateful for your outstanding work.',
    ],
  },
]

const Card = ({ image, cardContent, name }) => {
  return (
    <div style={styles.card}>
      {/* Image */}
      <img src={image} alt={name} style={styles.cardImage} />
      {/* Name */}
      <h3 style={styles.cardTitle}>{name}</h3>
      {/* Card Content */}
      <ul style={styles.cardContent}>
        {cardContent.map((point, index) => (
          <li key={index} style={styles.cardText}>
            {point}
          </li>
        ))}
      </ul>
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
          {cardData.map((card, index) => (
            <li key={index} style={styles.carouselItem}>
              <Card
                image={card.image}
                cardContent={card.cardContent}
                name={card.name}
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
    maxWidth: 'auto',
    margin: '0 auto',
    padding: '20px',
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
    padding: '10px',
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
    width: '300px',
    transition: 'transform 0.3s ease-in-out',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '10px',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '10px',
  },
  cardContent: {
    listStyleType: 'none',
    padding: '0',
    margin: '10px 0 0',
  },
  cardText: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
}

export default Carousel