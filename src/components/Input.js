const Input = ({
  name,
  register,
  required,
  defaultValue,
  pattern,
  type,
  getFieldState,
  placeholder,
}) => {
  const inValid = getFieldState(name).invalid;
  return (
    <input
      className={`border-b ${
        inValid && "border-red-500"
      } w-full py-1.5 mb-2 md:py-1 px-2 bg-transparent border-slate-700 text-white text-base focus:outline-none focus:border-green-500 
       focus:border-b placeholder:text-gray-600`}
      placeholder={placeholder ? placeholder : "Your answer"}
      defaultValue={defaultValue}
      type={type}
      {...register(name, {
        required: required && `${name} can't be blank`,
        pattern: {
          value: pattern,
          message: `${name} is not Valid.`,
        },
      })}
    />
  );
};

export default Input;
