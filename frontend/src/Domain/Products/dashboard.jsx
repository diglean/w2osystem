import { useState, useEffect } from "react";

import DataTable from "../../Components/DataTable";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";

import useToast from "../../Hooks/useToast.jsx";

import styles from "./styles/dashboard.module.css";
import ModalWithdraw from "./Modal/ModalWithdraw";

const ROOT = "http://localhost:8000/api";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [options, setOptions] = useState(null);
  const [productSelected, setProductSelected] = useState(null);
  const [dataTableData, setdataTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { toastSuccess } = useToast();

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
  }, [currentPage]);

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
        .then(() => {
          setProductSelected(null);
          toastSuccess("Produto retirado com sucesso!");
        });
    }

    setOpenModal(!openModal);
  };

  const handleChangeModal = (data) => {
    setProductSelected(data);
  };

  return (
    <div>
      {options && (
        <ModalWithdraw
          open={openModal}
          value={productSelected}
          toggleModal={toggleModal}
          cbHandleChange={handleChangeModal}
          options={options}
        />
      )}
      <NavBar />
      <h1>Dashboard</h1>
      <span>Produtos cadastrados</span>
      {dataTableData && (
        <DataTable
          data={dataTableData}
          cbChangePage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      <div className={styles.action_buttons}>
        <Button variant="contained" onClick={toggleModal}>
          <span>Retirar produto</span>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
