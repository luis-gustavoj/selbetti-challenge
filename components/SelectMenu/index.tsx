import { useState } from "react";

import { NecessityCard } from "../NecessityCard";

import {
  GraphIcon,
  HammerIcon,
  HospitalIcon,
  ManIcon,
  PaperIcon,
  PeopleIcon,
  TruckIcon,
} from "../Icons";

interface SelectMenuProps {
  changeFormState: (stage: number) => void;
}

export const SelectMenu = ({ changeFormState }: SelectMenuProps) => {
  const [isCheckboxOneChecked, setIsCheckboxOneChecked] = useState(false);
  const [isCheckboxTwoChecked, setIsCheckboxTwoChecked] = useState(false);
  const [isCheckboxThreeChecked, setIsCheckboxThreeChecked] = useState(false);
  const [isCheckboxFourChecked, setIsCheckboxFourChecked] = useState(false);
  const [isCheckboxFiveChecked, setIsCheckboxFiveChecked] = useState(false);
  const [isCheckboxSixChecked, setIsCheckboxSixChecked] = useState(false);
  const [isCheckboxSevenChecked, setIsCheckboxSevenChecked] = useState(false);

  const handleChangeFormState = async () => {
    changeFormState(3);

    async function fakeWaitTime(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    await fakeWaitTime(2500);

    changeFormState(4);
  };

  return (
    <>
      <h6 className="text-center">
        Selecione uma ou mais necessidades para pré-configurarmos o sistema para
        você
      </h6>
      <div className="container">
        <div className="row py-2">
          <div className="col d-flex px-2">
            <NecessityCard
              title="Recursos Humanos"
              isChecked={isCheckboxOneChecked}
              onClick={() => setIsCheckboxOneChecked(!isCheckboxOneChecked)}
            >
              <PeopleIcon />
            </NecessityCard>
          </div>
          <div className="col d-flex px-2">
            <NecessityCard
              title="Financeiro"
              isChecked={isCheckboxTwoChecked}
              onClick={() => setIsCheckboxTwoChecked(!isCheckboxTwoChecked)}
            >
              <GraphIcon />
            </NecessityCard>
          </div>
          <div className="col d-flex px-2">
            <NecessityCard
              title="Atendimento"
              isChecked={isCheckboxThreeChecked}
              onClick={() => setIsCheckboxThreeChecked(!isCheckboxThreeChecked)}
            >
              <ManIcon />
            </NecessityCard>
          </div>
        </div>
        <div className="row py-2">
          <div className="col d-flex px-2">
            <NecessityCard
              title="Jurídico"
              isChecked={isCheckboxFourChecked}
              onClick={() => setIsCheckboxFourChecked(!isCheckboxFourChecked)}
            >
              <HammerIcon />
            </NecessityCard>
          </div>
          <div className="col d-flex px-2">
            <NecessityCard
              title="Logística"
              isChecked={isCheckboxFiveChecked}
              onClick={() => setIsCheckboxFiveChecked(!isCheckboxFiveChecked)}
            >
              <TruckIcon />
            </NecessityCard>
          </div>
          <div className="col d-flex px-2">
            <NecessityCard
              title="Educação"
              isChecked={isCheckboxSixChecked}
              onClick={() => setIsCheckboxSixChecked(!isCheckboxSixChecked)}
            >
              <PaperIcon />
            </NecessityCard>
          </div>
        </div>
        <div className="row py-2">
          <div className="col d-flex px-2">
            <NecessityCard
              title="Saúde"
              isChecked={isCheckboxSevenChecked}
              onClick={() => setIsCheckboxSevenChecked(!isCheckboxSevenChecked)}
            >
              <HospitalIcon />
            </NecessityCard>
          </div>
          <div className="col-8 d-flex px-2">
            <NecessityCard title="Outro">
              <input
                className="text-center"
                type="text"
                style={{
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #989898",
                }}
                placeholder="Digite um segmento"
              />
            </NecessityCard>
          </div>
        </div>
        <div className="row py-2">
          <div className="col px-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ width: "100%", height: "3.5rem" }}
              onClick={() => changeFormState(1)}
            >
              Voltar
            </button>
          </div>
          <div className="col-8 px-2">
            <button
              type="button"
              className="btn btn-danger "
              style={{
                width: "100%",
                height: "3.5rem",
                background: "#C83D2F",
              }}
              onClick={() => {
                handleChangeFormState();
              }}
            >
              Criar minha conta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
