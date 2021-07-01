import "./listcontainer.css";
import React, { useState, useEffect } from "react";

export default function Listcontainer(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.screen.width >= 600) {
      setOpen(true);
    }
  });

  const handleOpen = (e) => {
    setOpen(!open);
    console.log(e);
  };

  return (
    <>
      <div className="listChild">
        <div className="headerWrapper">
          <h4> {props.name}</h4>
          {open ? (
            <button onClick={handleOpen} className="expandButton">
              <svg width="3em" height="3em" viewBox="0 0 20 20">
                <path d="M15 14l-5-5l-5 5l-2-1l7-7l7 7z" fill="#86a0ec" />
              </svg>
            </button>
          ) : (
            <button onClick={handleOpen} className="expandButton">
              <svg width="3em" height="3em" viewBox="0 0 20 20">
                <path d="M5 6l5 5l5-5l2 1l-7 7l-7-7z" fill="#86a0ec" />
              </svg>
            </button>
          )}
        </div>

        {open && (
          <div>
            <h4>Package Includes</h4>
            <ul className="list">
              {props.items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <button className="footerButton">BUTTON</button>
          </div>
        )}
      </div>
    </>
  );
}
