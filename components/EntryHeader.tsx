interface EntryHeaderProps {
  title?: string;
  date?: string;
  author?: string;
}

export default function EntryHeader({ title, date, author }: EntryHeaderProps) {
  return (
    <header className="space-y-4 py-10 text-center">
      {title ? (
        <div className="body-xs-600 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 uppercase tracking-wider3 text-slate-600">
          Content
        </div>
      ) : null}

      {title ? <h1 className="text-black">{title}</h1> : null}

      {date && author ? (
        <p className="body-sm-400 text-gray-500">
          By <span className="body-sm-500 text-black">{author}</span> on{" "}
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
      ) : null}
    </header>
  );
}
