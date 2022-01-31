import { IHero } from "@src/types/generated/contentful";
import styles from '../../styles/Hero.module.css';

type HeroProps = {
  entry: IHero;
};

const Hero: React.FC<HeroProps> = ({ entry }) => {
  return (
    <>
      <h1 className={styles.header}>West Des Moines Historical Tour</h1>
      <p className={styles.paragraph}>{entry.fields.bannerText}</p>
    
    </>
  );
};

export default Hero;
