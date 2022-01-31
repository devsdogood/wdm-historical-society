import { Entry } from "contentful";
import { IContentSection, IHero, IHistoricalPlace, IHistoricalPlaceFields, IPage, IPageFields } from "@src/types/generated/contentful";

/**
 * `contentful-typescript-codegen` doesn't generate an enum of content types
 * so we do it manually here. Github issue at:
 * https://github.com/intercom/contentful-typescript-codegen/issues/54
 */
export enum ContentTypes {
    ContentSection = 'contentSection',
    Hero = "hero",
    HistoricalPlace = "historicalPlace",
    PlaceCollection = "placeCollection",
    NavigationItem = 'navigationItem',
    NavigationMenu = 'navigationMenu',
    DateHeader = 'dateHeader',
    LocationMap = 'locationMap',
    Page = 'page',
};

/** Collections which map to single entries */
export const CollectionMap = {
    [ContentTypes.PlaceCollection]: [
        ContentTypes.HistoricalPlace,
    ],
}

/** Get the fields from an array-like entry */
export type IEntryFieldsItem<T extends Entry<IPageFields | IPageFieldsItem['fields']>> = T['fields']['content'][number];

/** Top-level collections on the page (event collection, event calendar, etc). `IContentSection` is excluded since it isn't a collection. */
export type IPageFieldsItem = Exclude<IEntryFieldsItem<IPage>, IContentSection | IHero>;

/** Child items on the page (content section, event, etc).*/
export type IPageItemFieldsItem = IEntryFieldsItem<IPageFieldsItem> | IContentSection | IHero;

export const isIPage = (block: IPage | IPageFieldsItem | IPageItemFieldsItem): block is IPage => (block as IPage).sys?.contentType?.sys?.id === 'page';

export const isIPageFieldsItem = (block: IPageFieldsItem | IPageItemFieldsItem): block is IPageFieldsItem => Array.isArray((block as IPageFieldsItem).fields?.content);

export const isHistoricalPlace = (block: IHistoricalPlace): block is IHistoricalPlace => (block as IHistoricalPlace).sys?.contentType?.sys?.id === 'historicalPlace';
