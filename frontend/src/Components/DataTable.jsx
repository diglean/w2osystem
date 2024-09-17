import { DataGrid } from "@mui/x-data-grid";
import styles from "./styles/DataTable.module.css";

import { fmtoDt } from "../Library/format";

const DataTable = ({ data, cbChangePage }) => {
  const handlePageChange = (page) => {
    console.log(page);
    cbChangePage(page);
  };

  return (
    <div className={styles.main}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>{data.columns[0]}</th>
            <th>{data.columns[1]}</th>
            <th>{data.columns[2]}</th>
            <th>{data.columns[3]}</th>
            <th>{data.columns[4]}</th>
            <th>{data.columns[5]}</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.data.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category.name}</td>
                <td>{item.description}</td>
                <td>R$ {item.price}</td>
                <td>
                  {item.overdue_dt
                    ? fmtoDt(item.overdue_dt)
                    : "Sem data especificada"}
                </td>
                <td>{fmtoDt(item.created_at)}</td>
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
  );
};

export default DataTable;
