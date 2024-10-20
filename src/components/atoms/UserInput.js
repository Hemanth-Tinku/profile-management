const UserInput = ({ label, value, onChange, inputType }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={inputType} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default UserInput;
