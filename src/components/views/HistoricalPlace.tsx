import { IHistoricalPlace } from "@src/types/generated/contentful";
import styles from "../../styles/HistoricalPlace.module.css";

type HistoricalPlaceViewProps = {
  entry: IHistoricalPlace;
};

const HistoricalPlaceView: React.FC<HistoricalPlaceViewProps> = ({ entry }) => {
  console.log(entry.fields.content);
  return (
    <>
      <h1>{entry.fields.date}</h1>
      <div className={styles.title}>
        <p>{entry.fields.title}</p>
      </div>

      <div className={styles.content}>
        <p>{entry.fields.content.fields.content}</p>
      </div>

      <div className={styles.images}>
        <img
          src={entry.fields?.mainImage.fields.file.url}
          alt="img not found"
        />
      </div>

      <div className={styles.link}>
        <a href="#">Vist</a>
        <a href="#">Learn More</a>
      </div>
    </>
  );
};

export default HistoricalPlaceView;
