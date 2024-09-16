import { useState, useEffect } from "react";

import DataTable from "../../Components/DataTable";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";

import IosShareIcon from "@mui/icons-material/IosShare";

import styles from "./styles/dashboard.module.css";
import ModalWithdraw from "./Modal/ModalWithdraw";

const ROOT = "http://localhost:8000/api";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [options, setOptions] = useState([{}]);
  const [productSelected, setProductSelected] = useState(null);
  const [dataTableData, setdataTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(ROOT + `/product/list?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setdataTableData(data);
      });

    fetch(ROOT + "/product/withdraw/list")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  }, []);

  const toggleModal = (data) => {
    if (data === true) {
      fetch(ROOT + `/product/withdraw`, {
        method: "POST",
        body: JSON.stringify({ id: productSelected }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // if (data.success) {
          //   window.location.reload();
          // }
        });
    }
    setOpenModal(!openModal);
  };

  const handleChangeModal = (data) => {
    setProductSelected(data);
  };

  const action = (
    <div className={styles.action_buttons}>
      <Button variant="contained" onClick={toggleModal}>
        <IosShareIcon />
      </Button>
    </div>
  );

  return (
    <div>
      <ModalWithdraw
        open={openModal}
        toggleModal={toggleModal}
        cbHandleChange={handleChangeModal}
        options={options}
      />
      <NavBar />
      <h1>Dashboard</h1>
      <span>Produtos cadastrados</span>
      {dataTableData && (
        <DataTable
          data={dataTableData}
          cbChangePage={setCurrentPage}
          action={action}
        />
      )}
    </div>
  );
};

export default Dashboard;
