import styles from "./styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.main}>
      <ul>
        <li>
          <a href="/product/list">Ver produtos</a>
        </li>
        <li>
          <a href="/">Novo produto</a>
        </li>
        <li>
          <a href="/product/withdraw">Entregar produto</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
