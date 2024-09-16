import { useState, useEffect } from "react";

import DataTable from "../../Components/DataTable";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";

import IosShareIcon from "@mui/icons-material/IosShare";

import styles from "./styles/dashboard.module.css";

const ROOT = "http://localhost:8000";

const Dashboard = () => {
  const [dataTableData, setdataTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(ROOT + `/api/product/list?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setdataTableData(data);
      });
  }, [currentPage]);

  const action = (
    <div className={styles.action_buttons}>
      <Button variant="contained">
        <IosShareIcon />
      </Button>
    </div>
  );

  return (
    <div>
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
