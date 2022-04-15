import React from 'react';

import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { LevelType } from 'types/LevelType';

const CardLevel: React.FC<LevelType> = ({
  title,
  color,
  icon,
  imc,
  yourImc,
}) => {
  return (
    <div
      style={{ minHeight: 180 }}
      className={`p-3 ${color} rounded-3 d-flex flex-column justify-content-center align-items-center`}
    >
      <div className=" text-center ">
        {icon === 'FaThumbsDown' ? (
          <div className={` ${color} `}>
            <FaThumbsDown className=" text-white fs-2 " />
          </div>
        ) : (
          <div className={`${color}`}>
            <FaThumbsUp className=" text-white fs-2 w-auto h-auto" />
          </div>
        )}
      </div>
      <h3 className="text-white text-center fw-bold">{title}</h3>
      <p className="text-white lead text-center fs-6 fw-bold">
        IMC está entre <strong>{imc[0]}</strong> é <strong>{imc[1]}</strong>
      </p>
      {yourImc && (
        <p className="fw-bold fs-4 text-center text-white">
          IMC: {yourImc && yourImc.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export { CardLevel };
