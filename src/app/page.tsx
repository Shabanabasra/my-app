import React from "react";
import Images from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1 className="project-text"> PROJECT</h1>
            <h2 className="Project-name"> Lorum</h2>
          </div>
          <img
            src="/images/build.PNG"
            alt="image-build"
            width={770}
            height={829}
            className="build-image"
          />
          <div className="view-point-box">
            <p>View Point</p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <div className="about-images">
              <img
                src="/images/sample1.PNG"
                alt=" image-sample1"
                width={270}
                height={265}
                className="about-image"
              />
              <img
                src="/images/sample2.PNG"
                alt=" image-sample2"
                width={270}
                height={265}
                className="about-image"
              />
              <img
                src="/images/sample3.PNG"
                alt=" image-sample3"
                width={270}
                height={140}
                className="about-image"
              />
            </div>
            <div className="about-text">
              <h2>About</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <button>Read More</button>
            </div>
          </div>
        </section>
        <section className="focus-section">
          <h2> Main Focus / Mission Statement</h2>
          <div className="focus-content">
            <div className="focus-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>

            <div className="focus-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat, magna mauris porttitor
                tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
          <br />
        </section>
        <section className="ourProjectsContainer">
          <h2 className="heading">Our Projects</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="firstRow">
            <div className="projectItem">
              <div className="innerImageContainer">
                <img
                  src="/images/Rectangle12.PNG"
                  alt="Image Rectangle12"
                  className="innerImage"
                />
                <span className="projectTitle">
                  Sample
                  <br />
                  Project
                </span>
              </div>
              <img
                src="/images/Rectangle17.PNG"
                alt="image Rectangle17"
                className="mainImage"
              />
            </div>

            <div className="projectItem">
              <img
                src="/images/image15.PNG"
                alt="Image image15"
                className="mainImage"
              />
            </div>
          </div>

          <div className="secondRow">
            <div className="projectItem">
              <img
                src="/images/image16.PNG"
                alt="Image image16"
                className="mainImage1"
              />
            </div>

            <div className="projectItem">
              <img
                src="/images/image17.PNG"
                alt="Image image17"
                className="mainImage2"
              />
            </div>

            <div className="projectItem">
              <img
                src="/Images/image18.PNG"
                alt="Image image18"
                className="mainImage3"
              />
            </div>
          </div>
         <div className="buttonContainer">
            <button className="allProjectsButton">All Projects</button>
          </div>
        </section>
        <br />
        <br />

        <br />

        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-content flex flex-col md:flex-row gap-8">
            {/* Contact Form Section */}
            <div className="contact-form w-full md:w-[391px]">
              <form>
                <label
                  className="block text-sm font-medium border-gray-300"
                  htmlFor="name"
                ></label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-3 border text-gray-700 rounded-md"
                  placeholder="Your Name"
                  required
                />

                <label
                  className="block text-sm font-medium border-gray-300"
                  htmlFor="phonenumber"
                ></label>
                <input
                  type="text"
                  id="phonenumber"
                  className="mt-1 block w-full p-3 border text-gray-700 rounded-md"
                  placeholder="Phone Number"
                  required
                />

                <label
                  className="block text-sm font-medium border-gray-300"
                  htmlFor="email"
                ></label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Email"
                  required
                />

                <label
                  className="block text-sm font-medium border-gray-300"
                  htmlFor="interestedin"
                ></label>
                <input
                  type="text"
                  id="interestedin"
                  className="mt-1 block w-full p-3 border text-gray-700 rounded-md"
                  placeholder="Interested In"
                  required
                />

                <label
                  className="block text-sm font-medium border-gray-300"
                  htmlFor="message"
                ></label>
                <textarea
                  id="message"
                  className="mt-1 block w-full p-3 border text-gray-700 rounded-md"
                  placeholder="Message"
                  rows={4}
                  required
                ></textarea>
              </form>

              <button className="submit-button">Send Email</button>
            </div>

            {/* Contact Image Section */}
            <div className="contact-image w-full md:w-[749px] md:h-[369px] flex justify-center items-center">
              <img
                src="/images/image12.PNG"
                alt="Contact Us"
                className="rounded-md w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
