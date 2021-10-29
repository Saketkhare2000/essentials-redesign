//On this page call to database to get all softwares
import React, { useEffect, useState } from "react";
import SoftwareRow from "../components/SoftwareRow";
import { db } from "../firebase";

//get all softwares from database

const Softwares = () => {
  const [softwares, setSoftwares] = useState([]);
  const [category, setCategory] = useState([]);
  //get all softwares from database
  useEffect(() => {
    db.collection("data").onSnapshot((snapshot) => {
      setSoftwares(snapshot.docs.map((doc) => doc.data()));
      const categories = snapshot.docs.map((doc) => doc.data().category);
      setCategory(
        categories.filter((doc, i, arr) => {
          return arr.indexOf(doc) === i;
        })
      );
    });
  }, []);

  // console.log(softwares);
  // console.log(category);
  return (
    <div>
      {category &&
        category.map((category) => (
          <SoftwareRow
            heading={category}
            data={softwares.filter((software) => {
              return software.category === category;
            })}
          />
        ))}
    </div>
  );
};

export default Softwares;
