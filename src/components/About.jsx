import React from 'react';

const About = () => {
  const sectionStyle = {
    background: 'linear-gradient(360deg, rgb(245, 255, 245) 0%, rgb(68, 127, 181) 100%)',
    padding: '100px 0 20px 0',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#323030',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const aboutInfoStyle = {
    margin: '2rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
  };

  const aboutImgStyle = {
    width: '20rem',
    height: '20rem',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    objectFit: 'contain',
  };

  const buttonStyle = {
    border: 'none',
    outline: '0',
    padding: '10px',
    margin: '2rem',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#40b736',
    textAlign: 'center',
    cursor: 'pointer',
    width: '15rem',
    borderRadius: '4px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#1f9405',
  };

  const footerStyle = {
    backgroundColor: '#222',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  };

  return (
    <>
      <section style={sectionStyle} id='about'>
        <h1 style={headingStyle}>Welcome to Space Up</h1>
        <p style={{ fontWeight: 'bold' }}>Your Gateway to the Future of Aerospace!...</p>
        <div style={aboutInfoStyle}>
          <div style={aboutImgStyle}>
          <img style={imgStyle}
              className="img"
              src="https://images.pexels.com/photos/14356220/pexels-photo-14356220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div>
            <h2 style={{ textAlign: 'center' }}>About Us</h2>
            <p style={paragraphStyle}>
              At Space Up, we are passionate about bringing you the latest updates and insights from the dynamic and
              ever-evolving world of aerospace. Our platform is your go-to source for cutting-edge news, breakthrough
              innovations, and in-depth analyses that shape the future of the aerospace industry.
            </p>
            <button style={buttonStyle}>Read More...</button>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={aboutInfoStyle}>
          <div style={aboutImgStyle}>
          <img style={imgStyle}
              className="img"
              src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg"
            />
          </div>
          <div>
            <h2 style={{ textAlign: 'center' }}>What Sets Us Apart</h2>
            <p style={paragraphStyle}>
              Timely Updates: Stay ahead of the curve with real-time news and developments in the aerospace sector. We
              pride ourselves on delivering the most recent and relevant information to keep you informed.
            </p>
            <br />
            <p style={paragraphStyle}>
              Comprehensive Coverage: From space exploration to aviation technology, we cover a wide spectrum of topics
              within the aerospace industry. Our team of experts ensures that you get a comprehensive view of the latest
              trends and advancements.
            </p>
            <br />
            <p style={paragraphStyle}>
              Insightful Analyses: Dive deep into the complexities of the aerospace landscape through our insightful
              analyses. We break down complex topics, providing you with a clear understanding of the industry's current
              landscape and future trajectory.
            </p>
            <br />
            <p style={paragraphStyle}>
              Community Hub: Connect with like-minded enthusiasts, professionals, and industry experts in our vibrant
              community. Share your thoughts, engage in discussions, and be part of a community that shares your passion
              for aerospace.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={aboutInfoStyle}>
          <div style={aboutImgStyle}>
          <img style={imgStyle}
              className="img"
              src="https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg"
            />
          </div>
          <div>
            <h2 style={{ textAlign: 'center' }}>Our Vision</h2>
            <p style={paragraphStyle}>
              As a hub for aerospace enthusiasts and professionals, our vision is to inspire and educate. We aim to
              foster a community that appreciates the wonders of aerospace, understands its impact on our world, and looks
              forward to the exciting possibilities the future holds.
            </p>
            <br />
            <p style={paragraphStyle}>
              Whether you're an aerospace professional, an enthusiast, or someone curious about the latest advancements,
              [Your Website Name] is here to be your trusted companion on this exhilarating journey through the skies and
              beyond.
            </p>
            <br />
            <p style={paragraphStyle}>
              Join us as we explore the vast horizons of aerospace innovation and discovery. Your adventure begins here!
            </p>
          </div>
        </div>
      </section>
{/* 
      <footer style={footerStyle}>
        <p>© 2023 Space Up. All Rights Reserved.</p>
      </footer> */}
    </>
  );
};

export default About;
