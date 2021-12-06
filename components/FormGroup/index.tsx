import { useEffect } from "react";
import { useForm } from "react-hook-form";

type User = {
  nome: string;
  email: string;
  password: string;
  dominio: string;
  pais: string;
  ddd: string;
  numero: string;
};

interface FormGroupProps {
  changeFormState: (stage: number) => void;
  user: User;
  setUser: (user) => void;
}

export const FormGroup = ({
  changeFormState,
  user,
  setUser,
}: FormGroupProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setUser(data);
    changeFormState(2);
  };

  useEffect(() => {
    setValue("nome", user.nome);
    setValue("email", user.email);
    setValue("password", user.password);
    setValue("dominio", user.dominio);
    setValue("pais", user.pais);
    setValue("ddd", user.ddd);
    setValue("numero", user.numero);
  }, []);

  return (
    <>
      {isSubmitting ? (
        <h1>Hello World</h1>
      ) : (
        <form
          className="container-fluid px-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-row">
            <div className="form-group mb-3">
              <label
                className="text-left"
                htmlFor="inputName"
                style={{ color: "#9C9B99" }}
              >
                Nome
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="inputName"
                {...register("nome")}
              />
            </div>
            <div className="form-group mb-3">
              <label
                className="text-left"
                htmlFor="inputEmail"
                style={{ color: "#9C9B99" }}
              >
                E-mail
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="inputEmail"
                {...register("email")}
              />
            </div>
            <div className="form-group mb-3">
              <label
                className="text-left"
                htmlFor="inputPassword"
                style={{ color: "#9C9B99" }}
              >
                Senha
              </label>
              <input
                required
                type="password"
                className="form-control"
                id="inputPassword"
                {...register("password")}
              />
            </div>
            <div className="form-group">
              <label
                className="text-left"
                htmlFor="inputDominio"
                style={{ color: "#9C9B99" }}
              >
                Domínio
              </label>
              <div className="input-group mb-3">
                <input
                  required
                  id="inputDominio"
                  type="text"
                  className="form-control"
                  aria-label="Domínio"
                  aria-describedby="basic-addon2"
                  {...register("dominio")}
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    .selbetti.com.br
                  </span>
                </div>
              </div>
              <div className="row">
                <label htmlFor="tel" style={{ color: "#9C9B99" }}>
                  Telefone
                </label>
                <div className="col-2" style={{ paddingRight: "0.25rem" }}>
                  <input
                    required
                    type="number"
                    className="form-control"
                    {...register("pais")}
                  />
                </div>
                <div className="col-2 px-1">
                  <input
                    required
                    type="number"
                    className="form-control"
                    {...register("ddd")}
                  />
                </div>
                <div className="col-8" style={{ paddingLeft: "0.25rem" }}>
                  <input
                    required
                    type="string"
                    className="form-control"
                    {...register("numero")}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center row mt-4">
                <div className="col-7 px-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkBox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkBox"
                      style={{ fontSize: "10px", color: "#9C9B99" }}
                    >
                      Concordo em receber novidades
                      <br /> sobre a Selbetti via email
                    </label>
                  </div>
                </div>
                <div className="col-5 px-2">
                  <button
                    type="submit"
                    className="btn btn-secondary "
                    style={{
                      width: "100%",
                      height: "3.5rem",
                      background: "#707070",
                    }}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
