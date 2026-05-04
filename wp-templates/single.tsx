import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GetStaticPropsContext } from "next"; // Import GetStaticPropsContext
import Layout from "../src/components/Layout";
import RichTextArticle from "../components/RichTextArticle";

const POST_QUERY = gql`
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
    }
  }
`;

interface PostData {
  post?: {
    title?: string;
    content?: string;
    date?: string;
  };
}

interface SinglePageProps {
  __SEED_NODE__?: {
    databaseId?: string;
    asPreview?: boolean;
  };
  loading?: boolean;
}

export default function Component(props: SinglePageProps) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const databaseId = props.__SEED_NODE__?.databaseId;
  const asPreview = props.__SEED_NODE__?.asPreview;

  const {
    data,
    loading = true,
    error,
  } = useQuery<PostData>(POST_QUERY, {
    variables: {
      databaseId,
      asPreview,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first",
  });

  if (loading && !data) {
    return (
      <div className="la-article-shell flex justify-center py-20">
        Loading...
      </div>
    );
  }

  if (error) {
    return <p>Error! {error.message}</p>;
  }

  if (!data?.post) {
    return <p>No posts have been published</p>;
  }

  const { title, content, date } = data.post;

  return (
    <Layout title={title}>
      <RichTextArticle title={title} content={content} date={date} />
    </Layout>
  );
}

Component.queries = [
  {
    query: POST_QUERY,
    variables: (
      { databaseId }: { databaseId: string },
      ctx: GetStaticPropsContext,
    ) => ({
      // Add types for databaseId and ctx
      databaseId,
      asPreview: ctx?.preview,
    }),
  },
];
