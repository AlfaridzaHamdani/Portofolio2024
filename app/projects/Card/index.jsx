"use client";
import React from "react";
import styles from "./styles.module.scss";

export default function index({ index, title, setModal, desc, url }) {
  const handleClick = () => {
    window.open(url, "_self");
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>{index + 1}</span>
    </div>
  );
}
