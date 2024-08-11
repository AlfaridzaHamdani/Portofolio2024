"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import prefix from "../../components/Prefix";

const Features = ({ features, defaultImg }) => {
  const [openFeatureId, setOpenFeatureId] = useState(null);
  const [featuredImg, setFeaturedImg] = useState(null);

  const toggleDropdown = (featureId) => {
    setOpenFeatureId(openFeatureId === featureId ? null : featureId);
  };

  const handleFeatureImgChange = (id) => {
    const selectedFeature = features.find((item) => item.id === id);
    setFeaturedImg(selectedFeature?.img || null);
  };

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        {features.map((item) => (
          <div key={item.id} className={styles.dropdown}>
            <button
              onClick={() => {
                toggleDropdown(item.id);
                handleFeatureImgChange(item.id);
              }}
              className={styles.dropdownButton}
            >
              <h1>{item.title}</h1>
              <span
                className={
                  openFeatureId === item.id ? styles.arrowUp : styles.arrowDown
                }
              ></span>
            </button>
            {openFeatureId === item.id && <p>{item.desc}</p>}
            {/* Ensure `item.id` and `features.length` are compared correctly */}
            {item.id !== features.length && <hr />}
          </div>
        ))}
      </div>
      <div className={styles.featureImg}>
        <img
          src={
            featuredImg ? `./images/${featuredImg}` : `./images/${defaultImg}`
          }
          alt="Feature image"
        />
      </div>
    </div>
  );
};

export default Features;
