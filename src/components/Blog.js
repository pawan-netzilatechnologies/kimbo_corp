import React from "react";
import "../styling/blog.css";

const Blog = (props) => {
  return (
    <div className="blog-page">
      <section className="blog pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src="images/blog-image.png"
                alt="Blog Image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row align-items-center blog__user-info mt-4 gap-4 gap-md-0">
            <div className="col-12 col-md-6 d-flex align-items-center gap-3">
              <figure className="mb-0">
                <img
                  src="images/blog-user-image.png"
                  alt="Blog Writer Image"
                  className="img-fluid user-thumbnail"
                />
              </figure>
              <div className="user-name__wrapper">
                <h5 className="h5 mb-1 user-name">Andrew Johnson</h5>
                <p className="mb-0  posted-date">Posted on 27th January 2021</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="social-icons__wrapper d-flex align-items-center justify-content-start justify-content-md-end gap-3">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-start social-icon__wrapper rounded-circle p-2 bg-white"
                >
                  <img src="images/facebook.png" alt="Facebook" />
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-start social-icon__wrapper rounded-circle p-2 bg-white"
                >
                  <img src="images/twitter.png" alt="Twitter" />
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-start social-icon__wrapper rounded-circle p-2 bg-white"
                >
                  <img src="images/instagram.png" alt="Instagram" />
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-start social-icon__wrapper rounded-circle p-2 bg-white"
                >
                  <img src="images/youtube.png" alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-data bg-white">
        <div className="container">
          <div className="row">
            <h1 className="h1 my-4 fw-bold">
              35 Stellar Graphic Design Blogs to Keep You Educated and Inspired
            </h1>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
          </div>
          <div className="row">
            <h2 className="h2 my-4">
              Transform Your Idea Into Reality with Ether a Leading Digital
              Agency
            </h2>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
          </div>
          <div className="text-end mt-3 mt-md-2 mb-5">
            <a
              href="#"
              className="text-white text-decoration-none rounded-pill start-btn"
            >
              START MY ESTATE PLAN
            </a>
          </div>
        </div>
      </section>
      <section className="post-writer__data">
        <div className="container">
          <div className="row align-items-center p-4 gap-3 gap-md-0">
            <div className="col-md-3 text-center">
              <img
                src="images/user-master.png"
                alt="User"
                className="img-fluid"
              />
            </div>
            <div className="col-md-9 text-center text-md-start">
              <h3 className="h3 text-white">Andrew Janson</h3>
              <p className="font-ubuntu writer-job">Graphic Design</p>
              <p className="text-white font-ubuntu">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                porttitor est amet, volutpat augue a sodales nec, vitae.
                Pulvinar vitae eu sed elit vitae. Pulvinar vitae eu sed elit
                vitae.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="related-topics mb-5">
        <div className="container">
          <h2 className="h2 my-4">Related Topics</h2>
          <div className="d-flex align-items-center flex-wrap gap-2 gap-md-4">
            <a
              href="#"
              className="text-decoration-none rounded-pill bg-white related-topics__btn"
            >
              Business Formation
            </a>
            <a
              href="#"
              className="text-decoration-none rounded-pill bg-white related-topics__btn"
            >
              Graphic Designing
            </a>
            <a
              href="#"
              className="text-decoration-none rounded-pill bg-white related-topics__btn"
            >
              Designer
            </a>
            <a
              href="#"
              className="text-decoration-none rounded-pill bg-white related-topics__btn"
            >
              Graphics
            </a>
            <a
              href="#"
              className="text-decoration-none rounded-pill bg-white related-topics__btn"
            >
              Digital Agency
            </a>
            <a
              href="#"
              className="text-decoration-none rounded-pill bg-white related-topics__btn"
            >
              Estate Plan
            </a>
          </div>
        </div>
      </section>
      <section className="popular-blog-posts">
        <div className="container">
          <h2 className="h2 my-4">You Might Like</h2>
          <div className="row gap-5 gap-sm-5 gap-md-0">
            <div className="col-md-4 popular-blog-posts__card">
              <img
                src="images/might-like-1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-data">
                <span className="card-tag text-white mt-3">Logo Design</span>
                <h5 className="card-title mt-3 mb-3">
                  What Traveling Greece For 2 Weeks Taught Me About Life
                </h5>
                <p className="card-text card-date">
                  Jun 21, 2021 • 11 min read
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  mollis lectus vitae nulla malesuada amet purus sed. A
                  condimentum tempus a egestas sodales diam cras.
                </p>
              </div>
            </div>
            <div className="col-md-4 popular-blog-posts__card">
              <img
                src="images/might-like-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-data">
                <span className="card-tag text-white mt-3">Logo Design</span>
                <h5 className="card-title mt-3 mb-3">
                  Many desktop publishing packages and web page
                </h5>
                <p className="card-text card-date">Aug 1, 2021 • 7 min read</p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  mollis lectus vitae nulla malesuada amet purus sed. A
                  condimentum tempus a egestas
                </p>
              </div>
            </div>
            <div className="col-md-4 popular-blog-posts__card">
              <img
                src="images/might-like-3.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-data">
                <span className="card-tag text-white mt-3">Logo Design</span>
                <h5 className="card-title mt-3 mb-3">
                  Many desktop publishing packages and web page
                </h5>
                <p className="card-text card-date">Aug 1, 2021 • 7 min read</p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  mollis lectus vitae nulla malesuada amet purus sed. A
                  condimentum tempus a egestas sodales diam cras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
