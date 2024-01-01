import { forwardRef } from "react";
import "../../../styles/index.scss"

export const Input = forwardRef(({ label,error, ...rest },ref) => {    
    const {id}=rest; 
     return (
    <div>
      <label htmlFor={id} className="label">{label}</label>
            <input ref={ref} {...rest} className="input"/>
            {error? <p className="helper-text">{error.message}</p> :null}
    </div>
  );
});
