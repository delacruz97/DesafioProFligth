import React, { useState } from "react";
import style from "../styles/Carousel.module.css";
import BtnDer from "./BtnDer";
import BtnIzq from "./BtnIzq";
import imagen from "../image/FondoI.png";

const Carrousel = () => {
  const [number, setNumber] = useState(0);

  if (number > 3) {
    setNumber(0);
  }
  if (number < 0) {
    setNumber(3);
  }

  return (
    <div className={style.containerP}>
      <div className={style.containerUl}>
        <BtnIzq setNumber={setNumber} number={number} />

        <ul className={style.ul}>
          {number === 0 ? (
            <li className={style.lis}>
              <img className={style.im} src={imagen} alt="imagenFondo " />
            </li>
          ) : (
            <li className={style.li}>
              <img className={style.im} src={imagen} alt="imagenFondo " />
            </li>
          )}

          {number === 1 ? (
            <li className={style.lis}>
              <img className={style.im} src={imagen} alt="imagenFondo " />
            </li>
          ) : (
            <li className={style.li}>
              <img className={style.im} src={imagen} alt="imagenFondo " />
            </li>
          )}
          {number === 2 ? (
            <li className={style.lis}>
              <img className={style.im} src={imagen} alt="imagenFondo " />
            </li>
          ) : (
            <li className={style.li}>
              <img className={style.im} src={imagen} alt="imagenFondo " />
            </li>
          )}
          {number === 3 ? (
            <li className={style.lis}>
              <img className={style.im} src={imagen} alt="imagenFondo " />
            </li>
          ) : (
            <li className={style.li}>
              <img className={style.im} src={imagen} alt="imagenFondo " />
            </li>
          )}
        </ul>

        <BtnDer setNumber={setNumber} number={number} />
      </div>
    </div>
  );
};

export default Carrousel;
