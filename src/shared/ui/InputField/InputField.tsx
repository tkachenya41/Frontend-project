import InputFieldStyle from "./InputField.module.scss";

export const InputField = ({ placeholder }: { placeholder?: string }) => {
  return (
    <>
      <input
        className={InputFieldStyle.input}
        placeholder={placeholder}
      ></input>
    </>
  );
};
