import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';

import { levels, calculateImc } from '../../helpers/imc';

import { Header } from 'componets/Header';
import { CardLevel } from 'componets/CardLevel';
import { LevelType } from 'types/LevelType';
import { onlyAllowsNumber, maskValor } from 'app/ultils/mask';

function Home() {
  const [heightField, setHeightFiel] = useState<number>(0);
  const [weightField, setWeightFiel] = useState<number>(0);
  const [showLevel, setShowLevel] = useState<LevelType | null>(null);

  const handleOnClickCalculate = () => {
    if (heightField && weightField) {
      const result = calculateImc(heightField, weightField);
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
              <label htmlFor="altura" className="form-label">
                Altura
              </label>
              <input
                type="number"
                name="altura"
                className="form-control border-2 border-bottom border-top-0 border-end-0 border-start-0  rounded-0"
                id="altura"
                placeholder="Digite a sua altura Ex: 1.5 (em metros)"
                onChange={e =>
                  setHeightFiel(parseFloat(maskValor(e.target.value)))
                }
                value={heightField > 0 ? heightField : ''}
                disabled={!!showLevel}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="peso" className="form-label">
                Peso
              </label>
              <input
                type="number"
                name="peso"
                className="form-control border-2 border-bottom border-top-0 border-end-0 border-start-0  rounded-0"
                id="peso"
                placeholder="Digite o seu Peso Ex: 75.5 (em kg)"
                onChange={e =>
                  setWeightFiel(parseFloat(onlyAllowsNumber(e.target.value)))
                }
                value={weightField > 0 ? weightField : ''}
                disabled={!!showLevel}
              />
            </div>
            <div className="d-grid">
              <button
                onClick={handleOnClickCalculate}
                type="button"
                className="btn btn-primary text-white rounded-3"
                disabled={!!showLevel}
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
                    <CardLevel level={level} />
                  </div>
                ))}
              </div>
            )}

            {showLevel && (
              <div
                style={{ height: 350 }}
                className="row g-3 position-relative p-2"
              >
                <CardLevel level={showLevel} />

                <button
                  style={{ height: 50, width: 50, fontSize: '2rem' }}
                  onClick={handleClearImc}
                  className="btn btn-primary rounded-circle position-absolute top-50 start-0 translate-middle ms-2 d-flex justify-content-center align-items-center"
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
