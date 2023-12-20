import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classess = twMerge(
    "px-4 py-2 border rounded text-white flex items-center disabled:bg-gray-600",
    primary && "bg-blue-600 border-blue-600",
    secondary && "bg-slate-600 border-slate-600",
    success && "bg-green-600 border-green-600 shadow-lg shadow-green-600/30",
    warning && "bg-yellow-600 border-yellow-600",
    danger && "bg-red-600 border-red-600",
    outline && "bg-white",
    outline && primary && "text-blue-600",
    outline && secondary && "text-slate-600",
    outline && success && "text-green-600",
    outline && warning && "text-yellow-600",
    outline && danger && "text-red-600",
    rounded && "rounded-full",
    "hover:bg-gray-700",
    rest.className
  );
  return (
    <button {...rest} disabled={rest.disabled} className={classess}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1)
      return new Error(
        "One of the primary,secondary,success,warning,danger can be true!"
      );
  },
};

export default Button;
