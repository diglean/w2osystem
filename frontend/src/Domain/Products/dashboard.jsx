import { useState, useEffect } from "react";

import DataTable from "../../Components/DataTable";
import Button from "../../Components/Button";

import useToast from "../../Hooks/useToast.jsx";

import styles from "./styles/dashboard.module.css";
import ModalWithdraw from "./Modal/ModalWithdraw";

import ROOT from "../../root";

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

  const handlePageChange = (url) => {
    if (url) {
      const page = new URL(url, window.location.origin).searchParams.get(
        "page"
      );
      setCurrentPage(Number(page));
    }
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
      <h1>Dashboard</h1>
      <span>Produtos cadastrados</span>
      {dataTableData && (
        <DataTable
          data={dataTableData}
          cbChangePage={handlePageChange}
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
