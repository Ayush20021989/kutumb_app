import React from 'react';
import './App.css';
import blockImage from './block.jpg'; 
import facebook from './facebook.png';
import twitter from './linkedin.png';
import instagram from './instagram.png';
import linkedin from './twitter.png';
import tick from './tick.png'

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Header-left">
          <nav>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">Profession</a></li>
              <li><a href="#">Program</a></li>
              <li><a href="#">Life At Ekalakar</a></li>
              <li><a href="#">Hiring Tips</a></li>
            </ul>
          </nav>
        </div>
        <div className="Header-right">
          <a href="#" className="Search">Search</a>
          <a href="#" className="SignIn">Sign In</a>
        </div>
      </header>
      <main className="Main">
        <div className="Main-background">
          <div className="Welcome">
            <h1>Welcome</h1>
            <p>Create the future you want</p>
          </div>
        </div>
        <div className="LifeAtEkalakar">
          <h2>Life at Ekalakar</h2>
        </div>
        <div className="Blocks">
          <div className="Block">
            <img src={blockImage} alt="Block" />
            <div className="Block-text">
              <h3>Flexible Work</h3>
              <p>At EKalakaar, we value flexibility as part of our hybrid workplace so that you can feel empowered to do your best work.</p>
            </div>
          </div>
          <div className="Block">
            <img src={blockImage} alt="Block" />
            <div className="Block-text">
              <h3>Diversity and Inclusion</h3>
              <p>We are committed to celebrating the diversity around us and its power to drive us forward together.</p>
            </div>
          </div>
          <div className="Block">
            <img src={blockImage} alt="Block"/>
            <div className="Block-text">
              <h3>Culture</h3>
              <p>We will only achieve our mission if we live our culture, which starts with applying a growth mindset.</p>
            </div>
          </div>
          <div className="Block">
            <img src={blockImage} alt="Block"/>
            <div className="Block-text">
              <h3>Benefits</h3>
              <p>Explore EKalakaar's world-class benefits designed to help you and your family live well.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="Footer">
        <div className="Footer-left">
          <p>English|</p>
          <span>Support</span>
          <span>Accessibility</span>
          <span>Ekalakar Data Privacy Notice</span>
          <span>Legal Policies</span>
        </div>
        <div className="Footer-right">
          <a href="#"><img src={facebook} /></a>
          <a href="#"><img src={twitter} /></a>
          <a href="#"><img src={linkedin} /></a>
          <a href="#"><img src={instagram} /></a>
          <div className="Footer-privacy">
          <img src={tick} />
            <p>Your Privacy Choices</p>
          </div>
          <span>Privacy</span>
          <span>Trademarks</span>
          <span>Terms of Use</span>
          <span>@Ekalakar2023</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
