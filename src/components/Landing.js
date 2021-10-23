import { motion } from "framer-motion";
import React from "react";
import landingImg from "../images/landing.png";
import "../styles/landing.css";
import { fade, photoAnim, titleAnim } from "../animation";
const Landing = () => {
  return (
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
              now with a single Click
            </motion.h1>
          </motion.div>
        </div>
        <motion.button
          variants={fade}
          initial="hidden"
          animate="show"
          className="button"
        >
          Check Them Out
        </motion.button>
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
  );
};

export default Landing;
