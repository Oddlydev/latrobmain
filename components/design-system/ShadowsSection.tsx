const shadowRows = [
  { token: "la-shadow-1", sampleClass: "shadow-la-shadow-1" },
  { token: "la-shadow-2", sampleClass: "shadow-la-shadow-2" },
  { token: "la-shadow-3", sampleClass: "shadow-la-shadow-3" },
  { token: "la-shadow-4", sampleClass: "shadow-la-shadow-4" },
];

export default function ShadowsSection() {
  return (
    <section className="la-section">
      <h2 className="h2 text-black">Shadows</h2>

      <div className="la-purple-wrap">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="grid grid-cols-[160px_minmax(0,1fr)] border-b border-gray-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-gray-500">
            <div>Token</div>
            <div>Sample</div>
          </div>

          <div className="divide-y divide-gray-200">
            {shadowRows.map((row) => (
              <div
                key={row.token}
                className="grid grid-cols-[160px_minmax(0,1fr)] items-center gap-6 px-6 py-6"
              >
                <p className="body-sm-600 text-black">{row.token}</p>
                <div className="flex justify-start">
                  <div
                    className={[
                      "h-6 w-full max-w-[540px] rounded-md bg-brand-8",
                      row.sampleClass,
                    ].join(" ")}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
