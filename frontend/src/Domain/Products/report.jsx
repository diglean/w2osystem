import { useState, useEffect } from "react";

import styles from "./styles/report.module.css";

import ROOT from "../../root";

const Report = () => {
  const [topTenProducts, setTopTenProducts] = useState([{}]);
  const [qtyProducts, setQtyProducts] = useState(null);
  const [topThreeCategories, setTopThreeCategories] = useState([{}]);

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
      <h1>Relatório de produtos</h1>
      <div className={styles.main}>
        <div>
          <span>Top 10 produtos</span>
          {topTenProducts.length === 0 ? (
            <h1>0</h1>
          ) : (
            topTenProducts.map((item) => {
              return (
                <h1>
                  {item.product_name}: {item.qty}
                </h1>
              );
            })
          )}
        </div>
        <div>
          <span>Top 3 categorias</span>
          {topThreeCategories.length === 0 ? (
            <h1>0</h1>
          ) : (
            topThreeCategories.map((item) => {
              return (
                <h1>
                  {item.category_name}: {item.qty}
                </h1>
              );
            })
          )}
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
