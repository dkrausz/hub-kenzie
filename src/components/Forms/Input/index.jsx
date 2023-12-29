import "../../../styles/index.scss"

export const Input = ({ label, ...rest }) => {    
    const {id}=rest; 
     return (
    <div>
      <label htmlFor={id} className="label">{label}</label>
            <input {...rest} className="input"/>
    </div>
  );
};
