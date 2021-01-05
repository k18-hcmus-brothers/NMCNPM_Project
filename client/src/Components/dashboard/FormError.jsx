const FormError = ({ isHidden, errorMessage }) => {
  return (
    <span hidden={isHidden} style={{ color: "red", fontSize: "smaller" }}>
      {errorMessage}
    </span>
  );
};

export default FormError;
