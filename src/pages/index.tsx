import { ContentTypes } from "@src/types/contentTypes";
import { IPage } from "@src/types/generated/contentful";
import { GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import getContentful from '@utils/contentful';
import Custom404Page from "@pages/404";
import Head from 'next/head';
import BlockRenderer from "@wrappers/BlockRenderer";

type IndexProps = {
    page: IPage | false
}
const Index: React.FC<React.PropsWithChildren<IndexProps>> = ({page}) => {
    if (!page) return <Custom404Page />

    return (
      <>
        <Head>
          <title>{page.fields.title}</title>
          <meta name="description" content={page.fields.description} />
        </Head>
        <BlockRenderer block={page} />
      </>
    );
}

export const getStaticProps: GetStaticProps = async ({}: Params) => {

  
    const contentful = await getContentful();
    const pagesQuery = await contentful.getEntries({ content_type: ContentTypes.Page, include: 5 });
    const page = pagesQuery.items?.[0] as IPage || false;
  
    return {
      props: {
        page: page,
      },
    };
  }
export default Index