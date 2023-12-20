const Label = ({ label, required }) => {
  return (
    <label className="text-sm pr-5 text-white">
      {label}
      {required && (
        <span className="text-xl px-1 font-semibold text-red-500">{"*"}</span>
      )}
    </label>
  );
};

export default Label;
