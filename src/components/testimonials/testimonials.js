import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';

import "./styles.css";

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 3) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 6000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    {
      name: "Ian Alexander.",
      citation: "Twinkl - ARC Product owner",
      quote:
        "Thanks so much for all your hard work on Arc. You've been there from the beginning always offering a different point of view and solving the problem at hand."
    },
    {
      name: "Mike Kent",
      citation: "Co-Owner - Kitlocker",
      quote:
        "George is extremely passionate about the work he does and throughout his time here at Kitlocker he has shown brilliant communication and development skills."
    },
    {
      name: "Martin Cooper",
      citation: "Sheffield Hallam Tutor",
      quote:
        "During his final year project George has shown an ability to effectively manage his time to meet project deadlines while maintaining an outstanding quality of work."
    },
  ];

  return (
    <div id="testimonials" className="App">
      <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { citation, name, quote } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
              key={count}
            >
              <blockquote className="carousel__quote">
                <cite>
                  <span className="carousel__name">{name}</span>
                  <span className="carousel__citation">{citation}</span>
                </cite>
                <p>"{quote}"</p>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Testimonials />)
