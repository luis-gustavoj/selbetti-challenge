import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FinalScreen } from "../components/FinalScreen";
import { FormGroup } from "../components/FormGroup";

import { InfoCard } from "../components/InfoCard";
import { SelectMenu } from "../components/SelectMenu";
import { StepProgressBar } from "../components/StepProgressBar";
import { StepProgressItem } from "../components/StepProgressBar/StepProgressItem";

import styles from "./styles.module.scss";

type User = {
  nome: string;
  email: string;
  password: string;
  dominio: string;
  pais: string;
  ddd: string;
  numero: string;
};

type ProgressBar = {
  ball: {
    active: boolean;
    currentActive: boolean;
  };
};

export default function Home() {
  const [formStage, setFormStage] = useState(1);
  const [user, setUser] = useState({} as User);
  const [progressBar, setProgressBar] = useState<ProgressBar[]>([
    { ball: { currentActive: true, active: false } },
    { ball: { currentActive: false, active: false } },
    { ball: { currentActive: false, active: false } },
  ]);

  const handleChangeFormState = (stage: number) => {
    setFormStage(stage);
  };

  const handleChangeUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    if (formStage === 1) {
      [
        { ball: { currentActive: true, active: false } },
        { ball: { currentActive: false, active: false } },
        { ball: { currentActive: false, active: false } },
      ];
    }

    if (formStage === 2) {
      const newArray = [
        { ball: { currentActive: false, active: true } },
        { ball: { currentActive: true, active: false } },
        { ball: { currentActive: false, active: false } },
      ];
      setProgressBar(newArray);
    }

    if (formStage === 3 || formStage === 4) {
      const newArray = [
        { ball: { currentActive: false, active: true } },
        { ball: { currentActive: false, active: true } },
        { ball: { currentActive: true, active: true } },
      ];
      setProgressBar(newArray);
    }
  }, [formStage]);

  return (
    <>
      <div className="container-fluid container-red d-flex align-items-end justify-content-center">
        <div
          className={`d-flex flex-column align-items-center text-center px-5 py-4 ${styles.header}`}
        >
          <div>
            {formStage === 1 || formStage === 2 ? (
              <>
                <h4>Cadastre-se Gratuitamente</h4>
                <p>E tenha um plano vitalício com</p>
              </>
            ) : (
              <h4>{user.nome}</h4>
            )}
          </div>
          <div className="container">
            <div className="row">
              {formStage === 1 || formStage === 2 ? (
                <>
                  <InfoCard
                    className="col"
                    title="1000"
                    description="impressões"
                  />
                  <InfoCard
                    className="col"
                    title="1GB"
                    description="de espaço"
                  />
                  <InfoCard className="col" title="3" description="usuários" />
                </>
              ) : (
                <p style={{ fontSize: "1rem" }}>
                  Bem-vindo a revolução em gerenciamento
                  <br />
                  de documentos e impressões em nuvem
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <section
        className={`container-fluid d-flex flex-column align-items-end justify-content-${
          formStage === 3 ? "between" : "center"
        } shadow-lg px-5 py-4 ${styles.formBody}`}
      >
        <StepProgressBar>
          <StepProgressItem
            currentActive={progressBar[0].ball.currentActive}
            active={progressBar[0].ball.active}
          >
            Digite seus
            <br /> dados
          </StepProgressItem>
          <StepProgressItem
            currentActive={progressBar[1].ball.currentActive}
            active={progressBar[1].ball.active}
          >
            Selecione suas
            <br /> necessidades
          </StepProgressItem>
          <StepProgressItem
            currentActive={progressBar[2].ball.currentActive}
            active={progressBar[2].ball.active}
          >
            Finalizar
            <br /> cadastro
          </StepProgressItem>
        </StepProgressBar>
        {formStage === 1 && (
          <FormGroup
            changeFormState={handleChangeFormState}
            user={user}
            setUser={handleChangeUser}
          />
        )}
        {formStage === 2 && (
          <SelectMenu changeFormState={handleChangeFormState} />
        )}
        {formStage === 3 && (
          <>
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center container-fluid"
              style={{ height: "100%" }}
            >
              <div
                className="spinner-border text-danger"
                role="status"
                style={{ width: "100px", height: "100px" }}
              >
                <span className="sr-only"></span>
              </div>
              <h4 style={{ color: "#C83D2F", marginTop: "1rem" }}>
                Aguarde enquanto
                <br />
                preparamos o seu portal
              </h4>
            </div>
            <div />
          </>
        )}
        {formStage === 4 && (
          <FinalScreen changeFormState={handleChangeFormState} />
        )}
      </section>
    </>
  );
}
