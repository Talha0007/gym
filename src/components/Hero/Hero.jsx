import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";

import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>TThe Premier Gym Facility in the City</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Craft </span>
            <span>The Perfect</span>
          </div>
          <div>
            <span>Physique for Yourself</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} preFix="+" delay="4" />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
              <NumberCounter start={800} end={978} preFix="+" delay="4" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter start={10} end={50} preFix="+" delay="4" />
            </span>
            <span>finess programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          className="heart-rate"
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>16 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories_Burned</span>
            <span>220_kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
