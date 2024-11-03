
import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaEnvelope  } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "40px 20px",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* Left Side - Logo */}
                <div>
                    <Image src="/images/Group111.PNG" alt="Digital Project Logo" width={100} height={50} />
                </div>

                {/* Center Columns */}
                <div>
                    <h4>Information</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><a href="/">Home </a></li>
                        <li><a href="http://localhost:3000/gallery">Gallery</a></li>
                        <li><a  href="http://localhost:3000/projects">Projects</a></li>
                        <li><a href="http://localhost:3000/certification">Certification </a></li>
                        <li><a href="http://localhost:3000/contact">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Contact</h4>
                    <p>1234 Sample St<br />Downtown, Your City</p>
                    <p>987-654-3210</p>
                    <p> <a href="mailto:info@example.com">samplecontact@gmail.com</a></p>
                   <a href="mailto:info@example.com"><FaEnvelope /></a>
                </div>

                {/* Right Side - Social Media */}
                <div>
                    <h4>Social Media</h4>
                    <div>
                        <a href="https://www.facebook.com" style={{ color: "#fff", fontSize: "1.5rem", marginRight: "10px" }}><FaFacebook /></a>
                        <a href="https://www.twitter.com" style={{ color: "#fff", fontSize: "1.5rem", marginRight: "10px" }}><FaTwitter /></a>
                        <a href="https://www.lnstagram.com" style={{ color: "#fff", fontSize: "1.5rem", marginRight: "10px" }}><FaInstagram /></a>
                        <a href="https://www.linkedin.com" style={{ color: "#fff", fontSize: "1.5rem" }}><FaLinkedin /></a>
                        
                    </div>
                </div>
            </div>
            <div
                style={{
                    borderTop: "1px solid #555",
                    paddingTop: "10px",
                    marginTop: "20px",
                    flex: "row"
                }}
            >
                <p>&copy; 2024 Digital Project. All Rights Reserved.</p>
            </div>
        </footer>
    );
}