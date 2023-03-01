
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Our Barbershop</h1>
      <p>
        We are a team of experienced and highly skilled barbers dedicated to providing the highest quality grooming services to our customers. Our barbershop is a warm and inviting space that is designed to make you feel comfortable and relaxed from the moment you walk through the door.
      </p>
      <p>
        Our services include haircuts, beard trims, shaves, and grooming products. We use only the best products and equipment to ensure that your experience with us is nothing short of exceptional. Whether you're looking for a classic cut or a modern style, our barbers will work with you to achieve the perfect look.
      </p>
      <p>
        We believe that a visit to the barbershop is more than just a routine grooming appointment. It's an opportunity to connect with other people in the community, to relax, and to take some time for yourself. We're proud to be a part of this tradition and to provide our customers with an experience that is both enjoyable and memorable.
      </p>
      <h2>Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Barber 1" />
          <h3>John Doe</h3>
          <p>Master Barber</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Barber 2" />
          <h3>Jane Smith</h3>
          <p>Barber</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Barber 3" />
          <h3>Bob Johnson</h3>
          <p>Barber</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
