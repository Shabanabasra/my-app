import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <div>
            <img   src="/images/logo.PNG"alt="image logo"/>
            </div>
            <ul className=" header-button">
                
                <li><Link href="/">Main</Link></li>
                <li><Link href="gallery">GALLARY</Link></li>
                <li><Link href="projects">PROJECTS</Link></li>
                <li><Link href="certification">CERTIFICATION </Link></li>
                <li><Link href="contact">CONTACTS</Link></li>

            </ul>
        </div>
    )

}