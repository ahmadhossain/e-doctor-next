const Label = ({ label, required }) => {
  return (
    <label className="pr-5">
      {label}
      {required && (
        <span className="text-xl px-1 font-semibold text-red-500">{"*"}</span>
      )}
    </label>
  );
};

export default Label;
