import Link from "next/link";
export default function Projects(){
    return(
        <div className="project-container">
      <h2 className="project-heading">
        Our <span className="project-heading-bold">Projects</span>
      </h2>

      <div className="project-row">
        <img src="/images/image 30.PNG" alt=" Image image 30" className="project-image" />
        <div className="project-content1">
          <h3 className="project-title1">Sample Project 1</h3>
          <p className="project-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="project-view-button">View More</button>
        </div>
      </div>

      <div className="project-row project-row-reverse">
        <img src="/images/image 33.PNG" alt="Image image 33" className="project-image" />
        <div className="project-content1">
          <h3 className="project-title1">Sample Project 2</h3>
          <p className="project-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="project-view-button">View More</button>
        </div>
      </div>

      <div className="project-row">
        <img src="/images/image 32.PNG" alt="Image image 32" className="project-image" />
        <div className="project-content1">
          <h3 className="project-title1">Sample Project 3</h3>
          <p className="project-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="project-view-button">View More</button>
        </div>
      </div>
    </div>
  );
}
    
