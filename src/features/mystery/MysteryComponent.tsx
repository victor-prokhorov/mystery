import PropTypes from "prop-types";
import { ReactNode } from "react";
import "./mysteryComponent.css";

export const MysteryComponent = ({
  children,
  style,
  icon,
  size,
  iconPos,
  className,
  disable,
  ...props
}: MysteryComponent) => {
  const types =
    style && (style === "primary" ? "mystery__primary" : "mystery_secondary");
  const iconStyle = icon && "mystery--icon";
  const raws = icon ? (
    iconPos === "right" ? (
      <>
        {children} {icon}
      </>
    ) : (
      <>
        {icon} {children}
      </>
    )
  ) : (
    children
  );
  const disabled = disable ? "disabled-mystery" : "";
  return (
    <button
      data-testid="main-button"
      className={[
        "default__mystery",
        types,
        iconStyle,
        `mystery-size--${size}`,
        disabled,
        className,
      ].join(" ")}
      {...props}
      disabled={disable}
    >
      {raws}
    </button>
  );
};

interface MysteryComponent {
  children: ReactNode;
  style: "primary" | "secondary";
  icon: ReactNode | string;
  iconPos: "left" | "right";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  size: "small" | "large" | "icon";
  className?: string;
  disable?: boolean;
}

MysteryComponent.propTypes = {
  children: PropTypes.any,
  style: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  iconPos: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "large", "icon"]),
  className: PropTypes.string,
  disable: PropTypes.bool,
};

MysteryComponent.defaultProps = {
  onClick: () => {},
  disable: false,
};
