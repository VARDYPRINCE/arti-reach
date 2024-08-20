import "../styles/footer.css";
import logo2 from "../assets/images/Frame 352.png";
import phone from "../assets/images/Phone.png";
import email from "../assets/images/fi-br-envelope.png";
import location from "../assets/images/fi-br-marker.png";
import facebook from "../assets/images/Facebook.png";
import linkdeln from "../assets/images/LinkedIn Circled.png";
import twitter from "../assets/images/TwitterX.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="name">
      <div className="footer_ptn">
        <div className="footer_logo">
          <img src={logo2} alt="" />
          <div className="motto">
            Our motto at Arti-reach is to Redefine Service bringing the sense of
            excellence and professionalism introducing an innovative means of
            artisan business transaction.
          </div>
          <div className="social_images">
            <a href="https://www.facebook.com" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img src={linkdeln} alt="" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>

        <div className="company_footer">
          <h4>Company</h4>
          <div>
            {" "}
            <a href="#aboutUs">About Us</a>
          </div>
          <div>
            <a href="#review">Clients Review</a>
          </div>
          {/* <div>
            <a href="#booking">Booking</a>
          </div> */}
          {/* <div>
            <a href="">Company Policies</a>
          </div> */}
          <div>
            {" "}
            <a href="">Terms and conditions</a>
          </div>
          <div>
            {" "}
            <a href="">FAQ</a>
          </div>
          {/* <div>
            {" "}
            <a href="">Blog</a>
          </div> */}
        </div>

        <div className="service_footer">
          <h4>Service</h4>
          <div>
            <a href="">Plumbing Services</a>
          </div>
          <div>
            <a href="">Carpenty Services</a>
          </div>
          {/* <div>
            <a href="">Driving Services</a>
          </div> */}
          <div>
            <a href="">Electrical Services</a>
          </div>
          {/* <div>
            <a href="">Tutoring Services</a>
          </div> */}
          {/* <div>
            <a href="">Hair Dressing Services</a>
          </div> */}
          <div>
            <a href="">Cleaning Services</a>
          </div>
        </div>

        <div className="contact_footer">
          <h4>Contact Us</h4>

          <div className="phone" id="contactUs">
            <a href="tel:+2349137274377">
              <img src={phone} alt="" className="centerimg" />
              2349137274377
            </a>
          </div>
          <div className="phone">
            <a href="malito:vardyjamie001@gmail.com">
              <img src={email} alt="" />
              Arti Reach@gmail.com
            </a>
          </div>
          <div className="phone">
            <a href="">
              <img src={location} alt="" />
              Port Harcourt - Enugu Expy, Ugwuaji, Enugu 400108, Enugu.
            </a>
          </div>
        </div>
      </div>
      <div className="div_line"></div>
      <div className="copyright">
        &copy;{currentYear} Arti-Reach All rights reserved
      </div>
    </div>
  );
};

export default Footer;
