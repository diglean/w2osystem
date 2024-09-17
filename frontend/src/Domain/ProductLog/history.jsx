import { useState } from "react";
import { useEffect } from "react";
import { fmtoDt } from "../../Library/format";

import styles from "./styles/history.module.css";

import ROOT from "../../root";

const History = () => {
  const [data, setData] = useState(null);

  const handlePageChange = (page) => {
    console.log(page);
  };

  useEffect(() => {
    fetch(ROOT + "/product-log/history")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return (
    <div>
      <h1>Histórico de retirada/depósito</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Produto</th>
              <th>Ação</th>
              <th>Data/Hora</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.data.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.product.name}</td>
                  <td>{item.action === "deposit" ? "Depósito" : "Retirada"}</td>
                  <td>{fmtoDt(item.dthr)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.pagination}>
          {data.rows.links.map((link) => (
            <button
              key={link.label}
              onClick={() => handlePageChange(link.label)}
              disabled={!link.url}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
