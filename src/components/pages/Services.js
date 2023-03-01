import React from "react";
import "./Services.css";


function AboutServices() {
  return (
    <div className="about-services">
      <h1>Our Services</h1>
      <p>
        At BarberShop, we offer a wide range of services to cater to the unique needs of our clients. Our skilled and experienced barbers are dedicated to providing the highest quality of services and ensuring that each client leaves our shop feeling confident and looking their best.
      </p>

      <div className="service-types">
        <div className="service-type">
          <h2>Haircuts</h2>
          <p>
            Our haircuts are designed to give you a fresh, stylish look that suits your personality and lifestyle. Whether you're looking for a classic cut or something more modern, our barbers have the skills and experience to deliver the perfect haircut for you.
          </p>
          <ul>
            <li>Classic Haircut</li>
            <li>Beard Trim</li>
            <li>Kid's Haircut</li>
            <li>Clipper Cut</li>
            <li>Buzz Cut</li>
          </ul>
        </div>

        <div className="service-type">
          <h2>Shaves</h2>
          <p>
            Our traditional hot towel shaves are a relaxing and luxurious experience that will leave your skin feeling smooth and rejuvenated. Our barbers use only the finest shaving products to ensure that you get the best possible shave.
          </p>
          <ul>
            <li>Straight Razor Shave</li>
            <li>Beard Trim & Shave</li>
            <li>Head Shave</li>
          </ul>
        </div>

        <div className="service-type">
          <h2>Grooming</h2>
          <p>
            We offer a variety of grooming services to help you look and feel your best. From beard trims to eyebrow shaping, our barbers will help you achieve a polished, put-together look.
          </p>
          <ul>
            <li>Beard Trim</li>
            <li>Eyebrow Shaping</li>
            <li>Moustache Trim</li>
            <li>Nose & Ear Wax</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default AboutServices;
