import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

const logos = [
  "abp.svg",
  "kapiva.png",
  "lic.svg",
  "swiggy.svg",
  "pebble.png",
  "timesnow.jpeg",
  "indiatoday.png",
  "zomato.svg",
  "mensxp.jpeg",
  "blinkit.svg",
  "meesho.png",
  "aryans.png",
  "starpowerz.png",
  "logiqids.png",
  "cvoter.webp",
  "anubhutee.png",
  "karagiri.png",
  "dennis lingo.jpeg",
  "priyaasi.jpeg",
  "myfitness.png",
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [speed, setSpeed] = useState(2);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;
    const direction = 1; // Right to left

    const animate = () => {
      carousel.scrollLeft += direction * speed;
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(animate);
    };

    startAnimation();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed]);

  const handleMouseEnter = () => setSpeed(0.5);
  const handleMouseLeave = () => setSpeed(2);

  return (
    <div
      ref={carouselRef}
      className="carousel relative overflow-hidden whitespace-nowrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {[...logos, ...logos].map((logo, index) => (
        <img
          key={index}
          src={`/Logo/${logo}`}
          alt={`${logo}`}
          className="carousel-img inline-block w-1/5 px-5 py-1"
        />
      ))}
    </div>
  );
};

export default Carousel;
