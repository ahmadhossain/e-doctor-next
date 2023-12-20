const Select = ({ name, register, options, required }) => {
  const renderedOption = options.map((option) => {
    return (
      <option value={option} key={option}>
        {option}
      </option>
    );
  });
  return (
    <select
      className="border rounded my-2 px-2 py-1 text-gray-700"
      {...register(name, {
        required: required && "This field is required.",
      })}
    >
      <option selected hidden disabled value="">
        Select
      </option>
      {renderedOption}
    </select>
  );
};

export default Select;
