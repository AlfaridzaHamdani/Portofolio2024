"use client";
import React from "react";
import style from "../styles/variables.module.scss";
import Button from "./Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <h1>lets work together</h1>
        <Button text="GET IN TOUCH" linkTo="/" type="dark" />
      </div>

      <div className={style.bottomFooter}>
        <div>
          <h3>alfaridzah@gmail.com</h3>
        </div>
        <hr />
        <div>
          <div>
            <span>VERSION</span>
            <span>2024</span>
          </div>
          <div>
            <span>Connect</span>
            <ul>
              <li>
                <Link href="https://www.instagram.com/alfrdza/">Instagram</Link>
                <Link href="https://github.com/AlfaridzaHamdani">Github</Link>
                <Link href="https://www.linkedin.com/in/AlfaridzaHamdani/">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
