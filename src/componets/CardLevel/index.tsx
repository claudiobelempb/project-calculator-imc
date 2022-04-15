import React from 'react';

import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { LevelType } from 'types/LevelType';

type LevelCardProps = {
  level: LevelType;
};

const CardLevel: React.FC<LevelCardProps> = ({ level }) => {
  return (
    <div
      style={{ minHeight: 180 }}
      className={`p-3 ${level.color} rounded-3 d-flex flex-column justify-content-center align-items-center`}
    >
      <div className=" text-center ">
        {level.icon === 'FaThumbsDown' ? (
          <div className={` ${level.color} `}>
            <FaThumbsDown className=" text-white fs-2 " />
          </div>
        ) : (
          <div className={`${level.color}`}>
            <FaThumbsUp className=" text-white fs-2 w-auto h-auto" />
          </div>
        )}
      </div>
      <h3 className="text-white text-center fw-bold">{level.title}</h3>
      <p className="text-white lead text-center fs-6 fw-bold">
        IMC está entre <strong>{level.imc[0]}</strong> é{' '}
        <strong>{level.imc[1]}</strong>
      </p>
      {level.yourImc && (
        <p className="fw-bold fs-6 text-center text-white mt-3">
          IMC: {level.yourImc} kg/m²
        </p>
      )}
    </div>
  );
};

export { CardLevel };
