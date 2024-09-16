import { Box, MenuItem, Modal } from "@mui/material";
import Select from "../../../Components/Select";
import Button from "../../../Components/Button";

const ModalWithdraw = ({
  open,
  toggleModal,
  value,
  cbHandleChange,
  options,
}) => {
  const handleChange = (e) => {
    return cbHandleChange(e.target.value);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <h1>Retirar produto</h1>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value || ""}
            label="Age"
            onChange={handleChange}
          >
            {options.map((item) => {
              return (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
          <Button type="submit" variant="contained" onClick={toggleModal}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained" onClick={toggleModal(true)}>
            Retirar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWithdraw;
