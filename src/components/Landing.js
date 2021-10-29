import { motion } from "framer-motion";
import React from "react";
import landingImg from "../images/landing.png";
import arrow from "../images/Arrowsvg.svg";
import "../styles/landing.css";
import { fade, photoAnim, titleAnim } from "../animation";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <motion.div className="frame1"></motion.div>
      <motion.div className="frame2"></motion.div>
      <motion.div className="frame3"></motion.div>
      <motion.div className="frame4"></motion.div>
      <motion.div className="landing">
        <motion.div className="landingContent">
          <div>
            <motion.div className="hide">
              <motion.h1 initial="hidden" animate="show" variants={titleAnim}>
                Download all the{" "}
              </motion.h1>
            </motion.div>
            <motion.div className="hide">
              <motion.h1 initial="hidden" animate="show" variants={titleAnim}>
                <span>Essential Softwares,</span>
              </motion.h1>
            </motion.div>
            <motion.div className="hide">
              <motion.h1 initial="hidden" animate="show" variants={titleAnim}>
                now with a single <span>Click</span>
              </motion.h1>
            </motion.div>
          </div>
          <Link to="/softwares">
            <motion.button
              variants={fade}
              initial="hidden"
              animate="show"
              className="button"
            >
              Check Them Out
              <img className="arrow" src={arrow} alt="arrow" />
            </motion.button>
          </Link>
        </motion.div>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          className="landingImg"
          src={landingImg}
          alt="landing"
        />
      </motion.div>
    </>
  );
};

export default Landing;
