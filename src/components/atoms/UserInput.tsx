import "../../styles/ProfileForm.css";

interface Props {
  label: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  placeholder?: string;
}

const UserInput: React.FC<Props> = ({ label, value, onChange, inputType, placeholder }) => {
  return (
    <div className="inputContainer">
      <label className="label">{label}</label>
      <input className="inputField" type={inputType} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default UserInput;
