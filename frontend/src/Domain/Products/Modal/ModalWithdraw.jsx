import { Box, Modal } from "@mui/material";
import Button from "../../../Components/Button";
import BasicSelect from "../../../Components/Select";

import styles from "./styles/ModalWithdraw.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalWithdraw = ({
  open,
  toggleModal,
  value,
  cbHandleChange,
  options,
}) => {
  const handleChange = (e) => {
    return cbHandleChange(e);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Retirar produto</h1>
          <BasicSelect
            options={options}
            value={value}
            label="Produto"
            cbHandleChange={handleChange}
          />
          <div className={styles.main_buttons}>
            <Button type="submit" variant="contained" onClick={toggleModal}>
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={() => toggleModal(true)}
            >
              Retirar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWithdraw;
