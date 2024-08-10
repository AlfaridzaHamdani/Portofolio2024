"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { ProjectsData } from "../data";

const page = ({ params }) => {
  const projects = ProjectsData;
  const id = params.projectId;
  const [data, setData] = useState([]);
  const [features, setFeatures] = useState([]);
  const [openFeatureId, setOpenFeatureId] = useState(1);
  const [featuredImg, setFeaturedImg] = useState(null);

  const toggleDropdown = (featureId) => {
    setOpenFeatureId(openFeatureId === featureId ? null : featureId);
  };

  useEffect(() => {
    if (data?.features) {
      const selectedFeature = data.features.find(
        (item) => item.id == openFeatureId
      );
      setFeaturedImg(selectedFeature?.img || null);
    }
  }, [openFeatureId, data]);

  useEffect(() => {
    const data = projects.find((item) => item.id == id);
    setData(data);
    setFeatures(data.features);
  }, [id]);

  const title = data.title ? data.title.toUpperCase() : "No Title";

  return (
    <>
      <div className={styles.studyCase}>
        <div className={styles.container}>
          <div className={styles.title}>
            <div>
              <div className={styles.bullet}></div>
              <h1>STUDY CASE</h1>
            </div>
            <h1>{title}</h1>
            <p>Role : {data.cat}</p>
            <p className={styles.tech}>Tech : {data.tech}</p>
            <p>Date : {data.date || "-"}</p>
          </div>
          <div className={styles.paragraph}>
            <p>{data.studycase}</p>
          </div>
        </div>
      </div>

      <div className={styles.imagePreview}>
        <div className={styles.imgWrapper}>
          <img src={`/images/${data.img}`} id="img" />
          <div className={styles.darken}>
            {data.type ? (
              <a href={data.url} target="_blank" rel="Download Design">
                View
              </a>
            ) : (
              <>
                <a href={data.url} target="_blank" rel="Live View">
                  Live View
                </a>
                <a href={data.github} target="_blank" rel="Github">
                  Github
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {features.length > 0 && (
        <div className={styles.features}>
          <div className={styles.container}>
            {features.map((item) => (
              <div key={item.id} className={styles.dropdown}>
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className={styles.dropdownButton}
                >
                  <h1>{item.title}</h1>
                  <span
                    className={
                      openFeatureId === item.id
                        ? styles.arrowUp
                        : styles.arrowDown
                    }
                  ></span>
                </button>
                {openFeatureId === item.id && <p>{item.desc}</p>}
                {item.id !== features.length && <hr />}
              </div>
            ))}
          </div>
          <div className={styles.featureImg}>
            <img
              src={
                featuredImg && openFeatureId
                  ? `/images/${featuredImg}`
                  : `/images/${data.img}`
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default page;
