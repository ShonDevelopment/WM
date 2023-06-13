import React, { useEffect } from "react";
import "./App.css";

import logo from "./logo.png";
import cartoon from "./cartoon.png";
import arrow from "./arrow.png";

function handlePayment(productName, price) {
  alert(`you buyed ${productName} for ${price} dollars.`);
}

function ScrollToTop() {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const target = document.querySelector(href);
      const offset = 100;

      if (target) {
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    document.querySelector(".box").addEventListener("click", handleClick);

    return () => {
      document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });

      document.querySelector(".box").removeEventListener("click", handleClick);
    };
  }, []);

  return <></>;
}

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <a href="#home">
          <img className="logo" src={logo} alt="WM Websites Solutions" />
        </a>
        <ul>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
      </nav>
      <section className="section" id="home">
        <img className="cartoon" src={cartoon} alt="Cartoon" />
        <div className="text">
          Helping you to <i className="transform">transform</i> your brand
        </div>
        <div className="sub-text">
          We are professional & experienced UI/UX designers and 
          <i className="transform"> frontend</i> &
          <i className="transform"> backend</i> developers.
        </div>
        <div className="box-container">
          <a href="#contact" className="box">
            <div className="box-text">Contact us for an offer</div>
            <div className="arrow-container">
              <img className="arrow" src={arrow} alt="Arrow" />
            </div>
          </a>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="product-container">
            <div className="product">
              <h3 className="product-title">Basic Website</h3>
              <p className="product-price">$30</p>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <button
                className="buy-button"
                onClick={() => handlePayment("Basic Website", 30)}
              >
                Buy Now
              </button>
            </div>

            <div className="product">
              <h3 className="product-title">Advanced Website</h3>
              <p className="product-price">$60</p>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button
                className="buy-button"
                onClick={() => handlePayment("Advanced Website", 60)}
              >
                Buy Now
              </button>
            </div>
            <div className="product">
              <h3 className="product-title">Professional Website</h3>
              <p className="product-price">$90</p>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button
                className="buy-button"
                onClick={() => handlePayment("Professional Website", 90)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="contact"></section>
      <script>{ScrollToTop()}</script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    </div>
  );
}

export default App;
