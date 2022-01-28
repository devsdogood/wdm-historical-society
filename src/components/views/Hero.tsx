import { IHero } from "@src/types/generated/contentful";

type HeroProps = {
  entry: IHero;
};

const Hero: React.FC<HeroProps> = ({ entry }) => {
  return (
    <>
      <b>Hero Component!</b>{entry.fields.image.fields.file.url} image with
      banner text {entry.fields.bannerText}
    </>
  );
};

export default Hero;
