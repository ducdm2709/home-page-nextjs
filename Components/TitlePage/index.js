import styles from "./title-page.module.scss";

const TitlePage = ({ title }) => {
  return <h2 className={`my-5 ${styles.titlePage}`}>{title}</h2>;
};
export default TitlePage;
