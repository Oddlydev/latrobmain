interface EntryHeaderProps {
  title?: string;
  date?: string;
  author?: string;
}

export default function EntryHeader({ title, date, author }: EntryHeaderProps) {
  return (
    <header className="space-y-4 py-10 text-center">
      {title ? (
        <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xxs font-semibold uppercase tracking-wider3 text-slate-600">
          Content
        </div>
      ) : null}

      {title ? (
        <h1 className="font-display text-display-lg font-bold text-black">
          {title}
        </h1>
      ) : null}

      {date && author ? (
        <p className="text-sm text-gray-500">
          By <span className="font-medium text-black">{author}</span> on{" "}
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
