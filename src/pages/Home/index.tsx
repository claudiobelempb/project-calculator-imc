import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';

import { levels, calculateImc } from '../../helpers/imc';

import { Header } from 'componets/Header';
import { CardLevel } from 'componets/CardLevel';
import { LevelType } from 'types/LevelType';

function Home() {
  const [heightField, setHeightFiel] = useState<number>(0);
  const [weightField, setWeightFiel] = useState<number>(0);
  const [showLevel, setShowLevel] = useState<LevelType | null>(null);

  const handleOnClickCalculate = () => {
    if (heightField && weightField) {
      const result = calculateImc(heightField, weightField);
      console.log('reasult: ', result);
      if (result) {
        setShowLevel(result);
      }
    } else {
      toast.error('Digite todos os campos');
    }
  };

  const handleClearImc = () => {
    setShowLevel(null);
    setHeightFiel(0);
    setWeightFiel(0);
  };

  return (
    <>
      <Header />

      <div className="container mt-4 mb-4 p-3">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 mt-4">
            <h2 className="display-4 fw-bold">Calcule o seu IMC.</h2>
            <p className="lead">
              IMC é a sigla para indice de massa corpórea, parâmntro adotado
              pela Organização Mundial da Sáude para calcular o peso idela de
              cada pessoa.
            </p>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Altura
              </label>
              <input
                type="number"
                className="form-control border-2 border-top-0  border-bottom-2 border-end-0 border-start-0"
                id="exampleFormControlInput1"
                placeholder="Digite a sua altura Ex: 1.5 (em metros)"
                onChange={e => setHeightFiel(parseFloat(e.target.value))}
                value={heightField > 0 ? heightField : ''}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Peso
              </label>
              <input
                type="number"
                className="form-control border-2 border-top-0  border-bottom-2 border-end-0 border-start-0"
                id="exampleFormControlInput1"
                placeholder="Digite o seu Peso Ex: 75.5 (em kg)"
                onChange={e => setWeightFiel(parseFloat(e.target.value))}
                value={weightField > 0 ? weightField : ''}
              />
            </div>
            <div className="d-grid">
              <button
                onClick={handleOnClickCalculate}
                type="button"
                className="btn btn-primary text-white"
              >
                Calcular
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-4">
            {!showLevel && (
              <div className="row g-3">
                {levels.map((level, index) => (
                  <div key={index} className="col-sm-12 col-md-6 ">
                    <CardLevel
                      title={level.title}
                      color={level.color}
                      imc={level.imc}
                      icon={level.icon}
                    />
                  </div>
                ))}
              </div>
            )}

            {showLevel && (
              <div
                style={{ height: 350 }}
                className="row g-3 position-relative p-2"
              >
                <CardLevel
                  title={showLevel.title}
                  color={showLevel.color}
                  imc={showLevel.imc}
                  icon={showLevel.icon}
                  yourImc={showLevel.yourImc}
                />

                <button
                  style={{ height: 50, width: 50, fontSize: '2rem' }}
                  onClick={handleClearImc}
                  className="btn btn-info rounded-circle position-absolute top-50 start-0 translate-middle ms-2 d-flex justify-content-center align-items-center"
                >
                  <FaArrowLeft className=" text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
