import Link from "next/link";

export default function Gallery() {
    return (
        <div className="container">
            <h1 className="heading">Photo</h1>
                <h1 className="heading-text"> Gallery</h1>
            <div className="gallery">
                {/* First Row of Images */}
                <div className="row">
                    <img src="/images/Rectangle22.PNG" alt="Image Reectangle22" className="image" />
                    <img src="/images/Rectangle23.PNG" alt="Image Reectangle23" className="image" />
                    <img src="/images/Rectangle24.PNG" alt="Image Reectangle24" className="image" />
                    <img src="/images/Rectangle 25.PNG" alt="Image Reectangle25" className="image" />
                    <img src="/images/Rectangle26.PNG" alt="Image Reectangle26" className="image" />
                </div>
                {/* Second Row of Images */}
                <div className="row">
                    <img src="/images/Rectangle 27.PNG" alt="Image Reectangle27" className="image" />
                    <img src="/images/Rectangle28.PNG" alt="Image Reectangle28" className="image" />
                    <img src="/images/Rectangle29.PNG" alt="Image Reectangle29" className="image" />
                    <img src="/images/Rectangle30.PNG" alt="Image Reectangle30" className="image" />
                    <img src="/images/Rectangle31.PNG" alt="Image Reectangle31" className="image" />
                </div>
            </div>
            <div className="frameRow">
            <div className="slideNumber">0/5</div>       {/* Slide number */}
                <div className="frame arrow">&#8592;</div> {/* Left arrow */}
                <div className="frame arrow">&#8594;</div>   {/* Right arrow */}
                
                
            </div>
     </div>
    );
}