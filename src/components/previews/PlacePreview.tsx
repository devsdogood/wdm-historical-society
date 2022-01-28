import Link from 'next/link'
import { IHistoricalPlace } from "@src/types/generated/contentful";

type PlacePreviewProps = {
  entry: IHistoricalPlace;
};

const PlacePreview: React.FC<PlacePreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <Link href={`/places/${entry.fields.slug}`}>{entry.fields.slug}</Link>
    </p>
  );
};

export default PlacePreview;
