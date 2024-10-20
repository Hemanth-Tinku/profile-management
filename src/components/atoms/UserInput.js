import "../../styles/ProfileForm.css";

const UserInput = ({ label, value, onChange, inputType, placeholder }) => {
  return (
    <div className="inputContainer">
      <label className="label">{label}</label>
      <input className="inputField" type={inputType} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default UserInput;
