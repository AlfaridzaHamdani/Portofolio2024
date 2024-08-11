"use client";
import styles from "./styles.module.scss";

const ImagePreview = ({ data }) => {
  return (
    <div className={styles.imagePreview}>
      <div className={styles.imgWrapper}>
        <img src={`./images/${data.img}`} id="img" />
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
  );
};

export default ImagePreview;
