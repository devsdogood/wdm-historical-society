import { IHistoricalPlace } from "@src/types/generated/contentful";

type HistoricalPlaceViewProps = {
    entry: IHistoricalPlace;
}

const HistoricalPlaceView: React.FC<HistoricalPlaceViewProps> = ({ entry }) => {
    return (
        <>
            <b>Historical Place Component!</b>{' '}{entry.fields.title} at slug {entry.fields.slug}
        </>
    );
};

export default HistoricalPlaceView;
