import React from "react";
import {
  ContentTypes,
  IPageFieldsItem,
  IPageItemFieldsItem,
  isIPage,
  isIPageFieldsItem,
} from "@src/types/contentTypes";
import { IPage } from "@src/types/generated/contentful";
import ContentSection from "@components/views/ContentSection";
import PlacePreview from "@components/previews/PlacePreview";
import PlaceCollection from "@wrappers/PlaceCollection";
import Hero from "@components/views/Hero";

type BlockRendererProps = {
  block: IPage | IPageFieldsItem | IPageItemFieldsItem;
};

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  let children: JSX.Element[] = [];

  const getKey = (content: BlockRendererProps['block']) => `${content.sys.contentType}-${content.sys.id}`;

  if (isIPage(block)) {
    // Render all page elements through BlockRenderer
    return (
      <>
        {block.fields.content.map((content) => (
          <BlockRenderer key={getKey(content)} block={content} />
        ))}
      </>
    );
  }

  if (isIPageFieldsItem(block)) {
    children = block.fields.content.map((content) => (
      <BlockRenderer key={getKey(content)} block={content} />
    ));
  }

  const contentTypeId = block.sys.contentType.sys.id;
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  return (
    // @ts-ignore i'm not sure why TS isn't picking up Component as the type of its map value
    <Component key={getKey(block)} entry={block}>
      {children}
    </Component>
  );
};

const ContentTypeMap = {
  [ContentTypes.ContentSection]: ContentSection,
  [ContentTypes.HistoricalPlace]: PlacePreview,
  [ContentTypes.PlaceCollection]: PlaceCollection,
  [ContentTypes.Hero]: Hero,
};

export default BlockRenderer;
