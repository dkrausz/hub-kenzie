import { forwardRef } from "react";
import "../../../styles/index.scss"

export const InputSelect = forwardRef(({ label, ...rest },ref) => {    
    const {id}=rest; 
     return (
    <div>
      <label htmlFor={id} className="label">{label}</label>
            <select {...rest} className="input" ref={ref} >
             <option value="" disabled>Selecione um módulo</option>   
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>

            </select>
    </div>
  );
});
