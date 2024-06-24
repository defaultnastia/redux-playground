import clsx from "clsx";

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx({
        isSelected: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
