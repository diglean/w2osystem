import { useState } from "react";
import { useEffect } from "react";
import { decodeHtml, fmtoDt } from "../../Library/format";

import styles from "./styles/history.module.css";

import ROOT from "../../root";

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([{}]);

  const handlePageChange = (url) => {
    if (url) {
      const page = new URL(url, window.location.origin).searchParams.get(
        "page"
      );
      setCurrentPage(Number(page));
    }
  };

  useEffect(() => {
    fetch(ROOT + `/product-log/list?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [currentPage]);

  return (
    <div>
      <h1>Histórico de retirada/depósito</h1>
      <div className={styles.main}>
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
            {data.data &&
              data.data.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.product.name}</td>
                    <td>
                      {item.action === "deposit" ? "Depósito" : "Retirada"}
                    </td>
                    <td>{fmtoDt(item.dthr)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className={styles.pagination}>
          {data.links &&
            data.links.map((link) => (
              <button
                key={link.label}
                onClick={() => handlePageChange(link.url)}
                disabled={!link.url}
              >
                {decodeHtml(link.label)}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default History;
