import s from "./style.module.scss";

const Button = (props) => {
  const { primary, className, children, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${s.btnDefault} ${primary ? s.btnPrimary : ""} ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
