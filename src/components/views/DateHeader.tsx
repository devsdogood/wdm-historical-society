import { DateHeader } from "@src/types/generated/contentful";
import styles from "../../styles/PlacePreview.module.css";

type DateHeaderProps = {
  entry: DateHeader;
};

const DateHeader: React.FC<DateHeaderProps> = ({ entry }) => {
  return (
    <h2 id={entry.fields.date} className={styles.date}>{entry.fields.date}</h2>
  );
};

export default DateHeader;
