import styles from "../styles/Page404.module.css";
<title>Page Not Found.image</title>;
const Custom404Page = () => (
  <div className={styles.center}>
    <br></br>
    <h1 className={styles.heading}>Error 404</h1>
    <img className={styles.image} src={'image404.svg'} alt="Sad Cat Image"/>
    <br></br>
    <p className={styles.pagenotfound}>{"We couldn't find your page..."}</p>
  </div>
);

export default Custom404Page;
