/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { FaThumbsUp, FaThumbsDown, FaArrowLeft } from 'react-icons/fa';

import { levels, calculateImc } from '../../helpers/imc';

import ImgBrand from '../../app/assets/images/powered.png';
import { ModalDefault } from 'componets/ModalDefault';

function Home() {
  const [heightField, setHeightFiel] = useState<number>(0);
  const [weightField, setWeightFiel] = useState<number>(0);
  const [id, setId] = useState(true);

  const handleOnSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (heightField && weightField) {
      console.log(heightField, weightField);
      setHeightFiel(0);
      setWeightFiel(0);
    } else {
      toast.error('Digite todos os campos');
    }
  };

  return (
    <>
      <div className="container-fluid bg-white">
        <div className="container">
          <nav className="navbar navbar-light">
            <a className="navbar-brand" href="#">
              <img src={ImgBrand} alt="IMC" width={150} />
            </a>
          </nav>
        </div>
      </div>
      <ModalDefault
        isOnClick={() => console.log('click')}
        modalBtnLabel="add product"
        modalHeaderTitle="Adicioar Produto"
        toggle={() => console.log('true')}
      >
        <form>
          <input type="text" />
        </form>
      </ModalDefault>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 mt-4">
            <h2 className="display-4">Calcule o seu IMC.</h2>
            <p className="lead">
              IMCé a sigla para indice de massa corpórea, parâmntro adotado pela
              Organização Mundial da Sáude para calcular o peso idela de cada
              pessoa.
            </p>
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Altura
                </label>
                <input
                  type="number"
                  className="form-control border-2 border-top-0  border-bottom-2 border-end-0 border-start-0"
                  id="exampleFormControlInput1"
                  placeholder="Digite a sua altura Ex: 1.5 (em metros)"
                  onChange={e => setHeightFiel(Number(e.target.value))}
                  value={heightField > 0 ? heightField : ''}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Peso
                </label>
                <input
                  type="number"
                  className="form-control border-2 border-top-0  border-bottom-2 border-end-0 border-start-0"
                  id="exampleFormControlInput1"
                  placeholder="Digite o seu Peso Ex: 75.5 (em kg)"
                  onChange={e => setWeightFiel(Number(e.target.value))}
                  value={weightField > 0 ? weightField : ''}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary text-white">
                  Calcular
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 mt-4">
            {levels.length ? (
              <div className="row g-3">
                {levels.map(level => (
                  <div key={level.title}>
                    <div className="col-sm-12 col-md-6">
                      <div className={`p-3 ${level.color} rounded-3`}>
                        <div className=" text-center w-100">
                          <span
                            className={`${level.color} rounded-circle d-inline-block`}
                          >
                            <FaThumbsDown className="m-3 text-white fs-2" />
                          </span>
                        </div>
                        <h3 className="text-white text-center fw-bold">
                          {level.title}
                        </h3>
                        <p className="text-white lead text-center fs-6 fw-bold">
                          IMC está entre {level.imc[0]} e {level.imc[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row position-relative">
                <div className="col ">
                  <div className="px-3 py-5 bg-secondary rounded-3 ">
                    <div className=" text-center w-100">
                      <span className="bg-warning rounded-circle d-inline-block">
                        <FaThumbsDown className="m-3 text-white fs-2" />
                      </span>
                    </div>
                    <h3 className="text-white text-center fw-bold">Magreza</h3>
                    <p className="text-white lead text-center fs-6 fw-bold">
                      IMC está entre 0 e 18.5
                    </p>
                    <button className="btn btn-info rounded-3 position-absolute top-50 start-0 translate-middle ms-4">
                      <span className=" ">
                        <FaArrowLeft className="fs-1 text-white" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
