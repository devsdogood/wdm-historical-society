import Link from "next/link";
import Image from "next/image";

import { IHistoricalPlace } from "@src/types/generated/contentful";
import styles from "../../styles/PlacePreview.module.css";
import { useState } from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type PlacePreviewProps = {
  entry: IHistoricalPlace;
};

function LinkIcon() {
  return (
    <svg
      className={styles.icon}
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2.667c-.736 0-1.333.597-1.333 1.333v12c0 .736.597 1.333 1.333 1.333h12c.736 0 1.333-.597 1.333-1.333v-4.667a.667.667 0 0 0-1.333 0V16H4V4h4.667a.667.667 0 0 0 0-1.333H4Zm13.138.195a.665.665 0 0 1 .195.467v4.005a.667.667 0 0 1-1.333 0V4.942l-6.862 6.862a.667.667 0 1 1-.943-.943L15.057 4h-2.39a.667.667 0 1 1 0-1.333h4a.665.665 0 0 1 .471.195Z"
        fill="#444"
      />
    </svg>
  );
}

const placeContent = (state: boolean, content: any) => {
  let returnContent = []
  if(state){
    content.forEach((p: any) => {
      returnContent.push(
        <div>{p.value}</div>
      )
    })
  }else {
    returnContent.push(
      <div>{content[0].value}</div>
    )
  }
}

const PlacePreview: React.FC<PlacePreviewProps> = ({ entry }) => {
  const title = entry.fields.title;
  const content = entry.fields.content;
  const mainImage = entry.fields.mainImage;
  const location = entry.fields.location;
  const slug = entry.fields.slug;
  const image = entry.fields?.mainImage.fields.file.url;
console.log(entry.fields.content.fields.content)
  const [infoState, changeInfoState] = useState(false)
  
  return (
    <section id={entry.sys.id} className={styles.section}>
      {/* <h2 className={styles.date}>{entry.fields.date}</h2> */}
      <h3 className={styles.title}>{entry.fields.title}</h3>
      <p className={styles.description}>{entry.fields.description}</p>
      
      <div className={styles.imageWrapper}>
        <Image
          src={`https:${image}`}
          alt={title}
          className={styles.image}
          layout="fill"
          objectFit="none"
        />
      </div>
      <div className={styles.links}>
        
        <details>
          <summary>Learn More</summary>
          <div dangerouslySetInnerHTML={{__html: (documentToHtmlString(entry.fields.content.fields.content))}} />
        </details>

        
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(
            location
          )}`}
          target="blank"
        >
          Get Directions
          <LinkIcon />
        </a>

      </div>
      
      <hr className={styles.hr} />
    </section>
  );
};

export default PlacePreview;
