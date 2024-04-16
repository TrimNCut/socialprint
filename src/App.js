import './App.css';
import logo from './img/logo.png';
import heroimg1 from './img/heroimgs/heroimg1.png';
import heroimg2 from './img/heroimgs/heroimg2.png';
import heroimg3 from './img/heroimgs/heroimg3.png';
import shopifyboost from './img/shopifyboost.png';
import adscreation from './img/adscreation.png';
import consultancy from './img/consultancy.png';
import user from './img/usericon.png';
import mail from './img/mail.png';
import instagram from './img/instagram.png';
import uparrow from './img/uparrow.png';

function App() {
  return (
    <>
      <nav id="home">
        <a href="#home">Home</a>
        <a href="#services">Our Services</a>
        <a href="#clients">What Our Clients Say</a>  
        <a href="#contact">Contact Us</a>
      </nav>
      <div className="hero">
        <div className="left">
          <span className="logo">
            <img className="logoimg" src={logo} alt="logo"/>
            <p className="logoname">Social Print</p>
          </span> 
          <h1>Instant <label>Growth!</label><br/><p className="largetext">Just With A Click.</p></h1>
          <p className="smalltext">Contact us, to get the best of what you could ever will.</p>
          <button><a href="#contact">Contact Us</a></button>
        </div>
        <div className="right">
          <div className="bannercon">
            <img className="bannerimg top" src={heroimg1} alt="banner images"/>
            <img className="bannerimg mid" src={heroimg2} alt="banner images"/>
            <img className="bannerimg bottom" src={heroimg3} alt="banner images"/>
          </div>
        </div>
      </div>
      <div className="backtotop"><a href="#home"><img src={uparrow} alt="up arrow"/></a></div>
      <div id="services">
        <h1>Our Services</h1>
        <div className="servicecon">
          <div className="service">
            <img className="servicesimg" src={shopifyboost} alt="banner images"/>
            <p className="topic">Shopify Boost</p>
            <p>From <label>$<label>100</label></label></p>
          </div>
          <div className="service">
            <img className="servicesimg" src={adscreation} alt="banner images"/>
            <p className="topic">Ads Creation</p>
            <p>From <label>$<label>100</label></label></p>
          </div>
          <div className="service">
            <img className="servicesimg" src={consultancy} alt="banner images"/>
            <p className="topic">Consultation</p>
            <p>From <label>$<label>100</label></label></p>
          </div>
        </div>
      </div>
      <div id="clients">
        <h1>Our Clients</h1>
        <div className="allclients">
          <div className="clientcon">
            <div>
              <img src={user} alt="client's profile"/>
              <p>Dave</p>
            </div>
            <p>A big thanks to Social Print for helping my business grow all the way from loss to profit in less than a month!</p>
          </div>
          <div className="clientcon">
            <div>
              <img src={user} alt="client's profile"/>
              <p>Lisa</p>
            </div>
            <p>Im so grateful I found this platform. This has been a life changing experience working with Social Print!</p>
          </div>
          <div className="clientcon">
            <div>
              <img src={user} alt="client's profile"/>
              <p>John</p>
            </div>  
            <p>As a business owner, I've alwyas loved to advertise my business and that was exactly what Social Print did for me.</p>
          </div>
        </div>
      </div>
      <div id="contact">
        <h1>Contact Us</h1>
        <p>Connect with us on these platforms</p>
        <div className="iconcon">
          <div className="icondetails">
            <div>
              <img src={mail} alt="our mail"/>
            </div>
            <label className="icontext">xxxxxxxxx@xxxxx.com</label> 
          </div>
          <div className="icondetails">
            <div>
              <img src={instagram} alt="our instagram"/>
            </div>
            <label className="icontext">@socialprintofficial</label> 
          </div>
          {/*<div className="icondetails">
            <div>
              <img src="./phone.png" alt="our phonenumber"/>
            </div>
            <label className="icontext">+x xxxxxxxxx</label> 
          </div>*/}
        </div>
      </div>
      <footer>
          <p>Social Print © 2024</p>
      </footer>
    </>
  );  
}

export default App;