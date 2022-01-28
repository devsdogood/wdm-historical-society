import { ContentTypes } from "@src/types/contentTypes";
import { IHistoricalPlaceFields } from "@src/types/generated/contentful";
import HistoricalPlaceView from "@components/views/HistoricalPlace";
import {
  getStaticPathsGeneric,
  getStaticPropsGeneric
} from "@utils/next-static-utils";

export default HistoricalPlaceView;

export const getStaticPaths = getStaticPathsGeneric<IHistoricalPlaceFields>(
  ContentTypes.HistoricalPlace
);

export const getStaticProps = getStaticPropsGeneric<IHistoricalPlaceFields>(
  ContentTypes.HistoricalPlace
);
