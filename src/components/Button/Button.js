import React from "react";
import "../../assets/css/style.css";
import "./button.css";

export default function Button({ title, className, style, onClick }) {
  return (
    <a
      className={`book_now_btn button_hover btn_now ${className}`} 
      style={style} 
      href="./index"
      onClick={onClick} 
    >
     {title}
     
    </a>
  );
}
