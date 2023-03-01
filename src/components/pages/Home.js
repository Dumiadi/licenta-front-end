// // import React from 'react';
// // import '../../App.css';

// // export default function Home() {
// //   return (
// //     <>
// //       <h1 className='home'>Home</h1>
      
// //     </>
// //   );
// // }
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home">
//       <div className="home-top">
//         <h1>Welcome to our BarberShop</h1>
//         <p>Book your appointment today</p>
//         <Link to="/services">
//           <button>View Our Services</button>
//         </Link>
//       </div>
//       <div className="home-middle">
//         <div className="home-middle-text">
//           <h2>About Us</h2>
//           <p>
//             Our BarberShop has been providing quality haircuts and grooming
//             services for men since 1990. Our team of experienced barbers are
//             dedicated to providing the best possible experience for our clients.
//           </p>
//         </div>
//         <div className="home-middle-image"></div>
//       </div>
//       <div className="home-bottom">
//         <h2>Featured Services</h2>
//         <div className="home-bottom-services">
//           <div className="home-service">
//             <div className="home-service-image service1"></div>
//             <h3>Haircuts</h3>
//             <p>
//               Our experienced barbers will provide you with the best haircut to
//               fit your style and personality.
//             </p>
//           </div>
//           <div className="home-service">
//             <div className="home-service-image service2"></div>
//             <h3>Beard Grooming</h3>
//             <p>
//               Let our expert barbers help you maintain your beard and keep it
//               looking its best.
//             </p>
//           </div>
//           <div className="home-service">
//             <div className="home-service-image service3"></div>
//             <h3>Hot Towel Shave</h3>
//             <p>
//               Relax and let our barbers provide you with the most luxurious hot
//               towel shave experience.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import './Home.css';
// import '../../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
    <div className="home-service">
            {/* <div className="home-service-image service3"></div>
            <h1>Hot Towel Shave</h1>
            <p>
              Relax and let our barbers provide you with the most luxurious hot
              towel shave experience.
            </p> */}
          </div>
      <h1>WELCOME TO OUR BARBERSHOP</h1>
      <p>We specialize in traditional haircuts and shaves</p>
      <div className='home-btns'>
        <Link to='/services' className='btn'>Services</Link>
        <Link to='/contactus' className='btn'>Contact Us</Link>
      </div>
    </div>
  );
}

export default Home;
