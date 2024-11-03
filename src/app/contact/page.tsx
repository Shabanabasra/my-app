import Link from "next/link";


export default function Contact() {
    return (
      <div className="contact-container">
        <div className="left-side">
        
                    <h1>Contact</h1>
                    <h2>Information</h2>
                    <h3>Company Name</h3>
                    <p>1234 Sample Street Austin Texas 76401t</p>
                    <p>512.333.2222</p>
                    <p> <a href="sampleemail@gmail.com">sampleemail@gmail.com</a></p>
                    <div className="button-row">
                    <button className="contact-button">Contact Us</button>
        </div>
      
         </div>
        <div className="right-side">
          <img src="/images/image14.PNG" alt="Image image14" className="map-image" />
        </div>
      </div>
    );
  }