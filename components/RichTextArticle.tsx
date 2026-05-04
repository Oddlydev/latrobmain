interface RichTextArticleProps {
  title?: string | null;
  content?: string | null;
  date?: string | null;
  dateLabel?: string;
}

const articleDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function formatArticleDate(date?: string | null) {
  if (!date) {
    return null;
  }

  const dateOnlyMatch = date.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (dateOnlyMatch) {
    const [, year, month, day] = dateOnlyMatch;

    return articleDateFormatter.format(
      new Date(`${year}-${month}-${day}T00:00:00Z`),
    );
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return articleDateFormatter.format(parsedDate);
}

export default function RichTextArticle({
  title,
  content,
  date,
  dateLabel = "Updated",
}: RichTextArticleProps) {
  const formattedDate = formatArticleDate(date);

  return (
    <main className="la-article-shell">
      <article className="la-article">
        {title || formattedDate ? (
          <header className="la-article-header">
            {title ? <h1 className="la-article-title">{title}</h1> : null}

            {formattedDate ? (
              <p className="la-article-meta">
                <span>{dateLabel}</span>
                <span
                  aria-hidden="true"
                  className="la-article-meta-separator"
                />
                <time dateTime={date ?? undefined}>{formattedDate}</time>
              </p>
            ) : null}
          </header>
        ) : null}

        <div
          className="la-wysiwyg"
          dangerouslySetInnerHTML={{ __html: content || "" }}
        />
      </article>
    </main>
  );
}
