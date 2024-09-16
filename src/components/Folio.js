import React, { useEffect } from 'react';
import './Folio.css';
import Project from './Project';
import Services from './Services';
import Testimonials from '../testimonials';

const Folio = () => {
  useEffect(() => {
    const handleResize = () => {
      const cards = document.querySelectorAll('.card');
      const isMobile = window.innerWidth <= 768;

      cards.forEach((card, index) => {
        if (isMobile) {
          // On mobile, remove sticky position and adjust animation duration
          card.style.position = 'relative';
          card.style.animationDuration = '0.5s';
          card.style.animationName = 'none';
        } else {
          // On desktop, reset to original settings
          card.style.position = 'sticky';
          const topOffset = window.innerHeight * 0.15;
          card.style.top = `${topOffset}px`; // Adjust top offset
          card.style.animationDuration = `${0.4 * index}s`; // Animation duration based on index
          card.style.animationName = 'scroll-animation-0';
        }
      });
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <main style={{ backgroundColor: 'white' }}>
        <ul id="cards" style={{ paddingTop: '50px' }}>
          {/* Card 1 */}
          <li className="card" id="card_1" style={{ marginTop: '70px' }}>
            <div className="card__content">
              <h2>Who is Thiran</h2>
              <div className="card-body">
              <div className="row">
  <div className="col-md-4 d-flex justify-content-center align-items-center">
    <figure>
      <img
        src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg"
        alt="Thiran Solution"
        className="img-fluid"
      />
    </figure>
  </div>

  <div className="col-md-8 d-flex align-items-start">
    <div className="text-justify">
      <p>
        Thiran360AI's solutions are designed to address the most complex
        problems with precision and efficiency. By combining advanced AI
        technology with deep industry expertise, Thiran360AI delivers
        solutions that drive success.
      </p>
    </div>
  </div>
</div>

              </div>
            </div>
          </li>

          {/* Card 2 */}
          <li className="card" id="card_2" style={{ marginTop: '70px' }}>
            <div className="card__content">
              <h2>Why Thiran</h2>
              <div className="card-body">
                <figure>
                  <img
                    src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"
                    alt="Why Thiran"
                  />
                </figure>
                <div className="text-content">
                  <p>
                    Thiran360AI stands out for its commitment to ethical AI, delivering solutions that are not only innovative but also responsible. With a strong focus on customer satisfaction, Thiran360AI ensures every project is tailored to meet specific needs.
                  </p>
                </div>
              </div>
            </div>
          </li>

          {/* Card 3 */}
          <li className="card" id="card_3" style={{ marginTop: '70px' }}>
            <div className="card__content">
              <h2>Thiran Solution</h2>
              <div className="card-body">
                <figure>
                  <img
                    src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg"
                    alt="Thiran Solution"
                  />
                </figure>
                <div className="text-content">
                  <p>
                    Thiran360AI's solutions are designed to address the most complex problems with precision and efficiency. By combining advanced AI technology with deep industry expertise, Thiran360AI delivers solutions that drive success.
                  </p>
                </div>
              </div>
            </div>
          </li>

          {/* Card 4 */}
          <li
            className="card"
            id="card_4"
            style={{ marginTop: '70px', backgroundColor: 'whitesmoke' }}
          >
            <div className="card__content">
              <h2>What Thiran can do</h2>
              <div className="card-body">
                <div className="text-content">
                  <Services />
                </div>
              </div>
            </div>
          </li>

          {/* Card 5 */}
          <li className="card" id="card_5">
            <div className="card__content">
              <h2>Thiran History</h2>
              <div className="card-body">
                <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
                  <Project />
                </div>
              </div>
            </div>
          </li>

          {/* Card 6 */}
          <li className="card" id="card_6" style={{ marginTop: '70px' }}>
            <div className="card__content">
              <h2>Testimonials</h2>
              <div className="testimonials-container">
                <Testimonials />
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Folio;
