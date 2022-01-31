import styles from '../styles/PlaceCollection.module.css';

const PlaceCollection: React.FC = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}

export default PlaceCollection;
