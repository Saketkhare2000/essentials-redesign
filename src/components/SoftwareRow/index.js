import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "../../animation";
import Card from "./Card";
import "./style.css";
const SoftwareRow = ({ heading, data }) => {
  console.log(data);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="software-row"
    >
      {/* Heading */}
      <h1>{heading}</h1>

      <div className="cards">
        {/* row of cards (map all the data and put as props)  */}
        {data.map((data) => {
          return (
            <Card
              name={data.name}
              image={data.image}
              link={data.link}
              desc={data.desc}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default SoftwareRow;
