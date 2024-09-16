import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
  return (
    <div>
      <MuiButton
        onClick={props.onClick}
        variant={props.variant}
        type={props.type || "button"}
        disableRipple
        className={props.className}
      >
        {props.text ?? props.children}
      </MuiButton>
    </div>
  );
};

export default Button;
