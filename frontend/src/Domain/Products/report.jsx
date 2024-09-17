import { useState, useEffect } from "react";

import NavBar from "../../Components/NavBar.jsx";

import styles from "./styles/report.module.css";

const ROOT = "http://localhost:8000/api";

const Report = () => {
  const [topTenProducts, setTopTenProducts] = useState(null);
  const [qtyProducts, setQtyProducts] = useState(null);
  const [topThreeCategories, setTopThreeCategories] = useState(null);

  useEffect(() => {
    fetch(ROOT + "/product/report")
      .then((res) => res.json())
      .then((data) => {
        setTopTenProducts(data.topTenProducts);
        setQtyProducts(data.qtyProducts);
        setTopThreeCategories(data.topThreeCategories);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Relatório de produtos</h1>
      <div className={styles.main}>
        <div>
          <span>Top 10 produtos</span>
          {topTenProducts &&
            topTenProducts.map((item) => {
              return (
                <h1>
                  {item.product_name}: {item.qty}
                </h1>
              );
            })}
        </div>
        <div>
          <span>Top 3 categorias</span>
          {topThreeCategories &&
            topThreeCategories.map((item) => {
              return (
                <h1>
                  {item.category_name}: {item.qty}
                </h1>
              );
            })}
        </div>
        <div>
          <span>Qtde produtos cadastrados</span>
          <h1>{qtyProducts}</h1>
        </div>
      </div>
    </div>
  );
};

export default Report;
