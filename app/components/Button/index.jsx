"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ text, linkTo, type }) => {
  const borderStyle = type === "dark" ? "1px solid #fff" : "1px solid #161616";
  const textStyle = type === "dark" ? "#fff" : "#161616";

  return (
    <Link
      href={linkTo}
      className="buttonLight"
      style={{ border: borderStyle, color: textStyle }}
    >
      <span>{text}</span>
    </Link>
  );
};

export default Button;
