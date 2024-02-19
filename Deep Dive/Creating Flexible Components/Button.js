export default function Button({ mode = "filled", children, Icon, ...props }) {
  let cssClasses = `button ${mode}-button`;

  if (Icon) {
    cssClasses += " icon-button";
  }

  if (props.className) {
    cssClasses += " " + props.className;
  } // for adding more classNames in the future

  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
