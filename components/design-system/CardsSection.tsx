import {
  ClipboardIcon,
  DocumentIcon,
  IconTile,
  MailIcon,
  TargetIcon,
} from "./icons";

function CardTitle({ children }: { children: string }) {
  return <h3 className="h4 text-center text-gray-500">{children}</h3>;
}

export default function CardsSection() {
  return (
    <section className="la-section">
      <h2 className="h2 text-black">Cards</h2>

      <div className="la-purple-wrap">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <CardTitle>Card Type 1</CardTitle>
            <article className="la-card-type-1">
              <IconTile>
                <ClipboardIcon />
              </IconTile>
              <div>
                <p className="body-base-600 text-black">Real-time</p>
                <p className="body-base-400 text-gray-500">
                  Assessment documentation
                </p>
              </div>
            </article>
          </div>

          <div className="space-y-5">
            <CardTitle>Card Type 2</CardTitle>
            <article className="la-card-type-2">
              <IconTile>
                <TargetIcon />
              </IconTile>
              <div className="mt-4 space-y-2">
                <p className="body-base-600 text-black">Research Objective</p>
                <p className="body-base-400 text-gray-500">
                  Develop and validate an AI-powered screening tool that
                  identifies aged care residents with unmet palliative care
                  needs earlier and more accurately than current practice.
                </p>
              </div>
            </article>
          </div>

          <div className="space-y-5">
            <CardTitle>Card Type 3</CardTitle>
            <article className="la-card-type-3 group">
              <IconTile>
                <DocumentIcon />
              </IconTile>
              <div className="mt-3.5 space-y-3.5">
                <p className="body-base-600 text-black group-hover:underline group-hover:decoration-brand-1 group-hover:[text-decoration-thickness:13.5%] group-hover:[text-underline-offset:25%]">
                  Research-Validated Assessments
                </p>
                <p className="body-base-400 text-gray-500">
                  Complete structured palliative care assessments built on
                  peer-reviewed methodology. Forms are standardised,
                  auto-timestamped, and designed so no critical clinical
                  indicator is ever overlooked.
                </p>
              </div>
            </article>
          </div>

          <div className="space-y-5">
            <CardTitle>Team Card</CardTitle>
            <article className="la-team-card">
              <div className="la-team-header">
                <p className="eyebrow text-brand-1">PRINCIPAL INVESTIGATOR</p>
                <p className="la-team-card-name">Prof. Hanan Khalil</p>
              </div>
              <p className="body-base-400 mt-3 text-gray-500">
                Lead researcher and grant recipient. Professor in the School of
                Psychology and Public Health, with expertise in evidence
                synthesis, aged care, and health services research.
              </p>
              <p className="body-sm-400 mt-4 border-l-2 border-brand-1 pl-4 text-gray-500">
                La Trobe University - School of Psychology and Public Health
              </p>
            </article>
          </div>

          <div className="space-y-5">
            <CardTitle>Card Type 4</CardTitle>
            <article className="la-card-type-4">
              <IconTile size="sm">
                <MailIcon />
              </IconTile>
              <div className="space-y-1">
                <p className="eyebrow text-gray-500">EMAIL</p>
                <p className="la-card-type-4-email">pcat@latrobe.edu.au</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
