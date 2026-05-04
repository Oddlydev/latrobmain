import Link from "next/link";
import { FeaturedImage } from "./FeaturedImage";
import Button from "./ui/Button";

interface PostListItemProps {
  post: {
    id: string;
    title?: string;
    uri?: string;
    excerpt?: string;
    date?: string;
    featuredImage?: {
      node?: {
        sourceUrl?: string;
        altText?: string;
      };
    };
    author?: {
      node?: {
        name?: string;
        avatar?: {
          url?: string;
        };
      };
    };
  };
}

export default function PostListItem({ post }: PostListItemProps) {
  const { title, excerpt, uri, date } = post;

  return (
    <article className="la-card overflow-hidden">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider3 text-gray-400">
        <time dateTime={date || ""}>
          {new Date(date || "").toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>

        {post.author?.node?.name ? (
          <span>By {post.author.node.name}</span>
        ) : null}
      </div>

      <h4 className="mt-4 text-black">
        <Link
          href={uri || ""}
          title={title}
          className="hover:text-brand-accent"
        >
          {title}
        </Link>
      </h4>

      <FeaturedImage
        post={post}
        uri={uri}
        title={title}
        classNames="mt-6 h-56 relative overflow-hidden rounded-2xl"
      />

      <div
        className="la-prose mt-6"
        dangerouslySetInnerHTML={{ __html: excerpt || "" }}
      />

      <div className="mt-6">
        <Button href={uri || ""} title="Read more" variant="secondary">
          Read more
        </Button>
      </div>
    </article>
  );
}
