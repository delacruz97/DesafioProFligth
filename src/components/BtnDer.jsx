//boton que seleccione el siguiente elemento de la lista a la izquierda
import React from "react";
import style from "../styles/BotonIZ.module.css";

const BtnDer = ({ number, setNumber }) => {
  const changeNumber = () => {
    setNumber(number + 1);
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
            d="M15.9704 32L18.7048 29.3011L5.49458 16.0909L18.7048 2.91619L15.9704 0.181819L0.0613453 16.0909L15.9704 32ZM36.6025 22.2699V18.3636H4.96191L8.86816 22.2699H36.6025ZM36.6025 13.8182V9.91193H8.86816L4.96191 13.8182H36.6025Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default BtnDer;
