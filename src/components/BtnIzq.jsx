//boton que seleccione el siguiente elemento de la lista a la derecha
import React from "react";

import style from "../styles/BotonDE.module.css";

const BtnIzq = ({ number, setNumber }) => {
  const changeNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <button className={style.btn} onClick={changeNumber}>
        <svg
          width="37"
          height="32"
          viewBox="0 0 37 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0296 32L18.2952 29.3011L31.5054 16.0909L18.2952 2.91619L21.0296 0.181819L36.9387 16.0909L21.0296 32ZM0.397461 22.2699V18.3636H32.0381L28.1318 22.2699H0.397461ZM0.397461 13.8182V9.91193H28.1318L32.0381 13.8182H0.397461Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default BtnIzq;
