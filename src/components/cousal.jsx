import React from 'react';
import { motion } from 'framer-motion';

const CarouselComponent = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {/* Carousel Images */}
      <div className="carousel-inner" style={{ height: '100%' }}>
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src="img/DSC06119.jpg"
            className="d-block w-100"
            alt="Slide 1"
            style={{
              height: '100vh',
              objectFit: 'cover',
              filter: 'brightness(70%)',
            }}
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="img/adarshwaah-13-08-2025-0017.jpg"
            className="d-block w-100"
            alt="Slide 2"
            style={{
              height: '100vh',
              objectFit: 'cover',
              filter: 'brightness(70%)',
            }}
          />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="img/fruit.JPG"
            className="d-block w-100"
            alt="Slide 3"
            style={{
              height: '100vh',
              objectFit: 'cover',
              filter: 'brightness(70%)',
            }}
          />
        </div>
      </div>

      {/* Animated Text Overlay */}
     {/* Animated Text Overlay */}
<motion.div
  className="position-absolute top-50 start-50 translate-middle text-center text-white"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  style={{
    background: 'rgba(0, 0, 0, 0.55)', // dark overlay for contrast
    backdropFilter: 'blur(6px)', // subtle glass effect
    padding: '50px 40px',
    borderRadius: '16px',
    color: 'white',
    maxWidth: '600px',
    boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
  }}
>
  <motion.h2
    style={{
      fontWeight: '700',
      marginBottom: '10px',
      color: '#f4a261', // matches your warm orange brand tone
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
  >
    Capturing
  </motion.h2>

  <motion.h2
    style={{
      fontWeight: '700',
      marginBottom: '20px',
      color: '#ffffff',
      textTransform: 'uppercase',
      fontSize: '2rem',
    }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    Moments of Change
  </motion.h2>

  <motion.p
    style={{
      fontSize: '1.1rem',
      marginBottom: '25px',
      color: '#e0e0e0',
      lineHeight: '1.6',
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.8 }}
  >
    Discover the art of filmmaking with <strong>Hanuman Action & Art</strong>.
    <br />
    Connect with us today.
  </motion.p>

  <motion.a
   href="#contact"
    className="btn"
    style={{
      backgroundColor: '#f4a261',
      border: 'none',
      color: '#fff',
      fontWeight: '600',
      borderRadius: '8px',
      padding: '10px 28px',
      cursor: 'pointer',
      fontSize: '1rem',
    }}
    whileHover={{
      scale: 1.08,
      backgroundColor: '#e76f51',
      boxShadow: '0px 0px 15px rgba(247, 127, 0, 0.6)',
    }}
    whileTap={{ scale: 0.95 }}
  >
    Contact Us
  </motion.a>
</motion.div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
