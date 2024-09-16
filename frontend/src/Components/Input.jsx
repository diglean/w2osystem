import { useEffect, useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";

import MuiTextField from "@mui/material/TextField";
import { forwardRef } from "react";

import styles from "./styles/Input.module.css";

const Input = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState(props.value ?? "");

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleValueChanged = useCallback(
    (e) => {
      setInputValue(e.target.value);

      if (typeof props.cbValueChanged === "function") {
        props.cbValueChanged(e.target.value);
      }
    },
    [setInputValue, props]
  );

  useEffect(() => {
    if (typeof props.value !== "undefined") {
      setInputValue(props.value);
    }
  }, [props]);

  return (
    <div className={styles.main}>
      {errors?.[props.name]?.type === "required" && (
        <p className={styles.error_message}>
          <strong>*</strong>
          {errors?.[props.name]?.message}
        </p>
      )}
      <MuiTextField
        fullWidth
        className={errors?.name && "input-error"}
        type={props.type || ""}
        ref={ref}
        label={props.label}
        name={props.name}
        variant={props.variant ?? "outlined"}
        multiline={props.multiline}
        InputProps={{ maxLength: props.maxLength, ...props.InputProps }}
        rows={4}
        onChangeCapture={(e) => handleValueChanged(e)}
        value={inputValue}
        {...register(props.name, {
          required: props.required ? `${props.label} é obrigatório!` : false,
        })}
      />
    </div>
  );
});

export default Input;
