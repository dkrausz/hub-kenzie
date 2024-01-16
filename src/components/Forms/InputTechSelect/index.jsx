import { forwardRef } from "react";
import "../../../styles/index.scss";

export const InputTechSelect = forwardRef(({ label, ...rest }, ref) => {
  const { id } = rest;
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <select {...rest} className="input" ref={ref}>
        <option value="" disabled selected>
          Selecione uma technologia
        </option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
    </div>
  );
});
