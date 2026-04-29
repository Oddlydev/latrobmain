import {
  ClipboardIcon,
  DocumentIcon,
  MailIcon,
  TargetIcon,
} from "./icons";
import {
  CardType1,
  CardType2,
  CardType3,
  CardType4,
  TeamCard,
} from "../ui/Card";

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
            <CardType1
              icon={<ClipboardIcon />}
              title="Real-time"
              description="Assessment documentation"
            />
          </div>

          <div className="space-y-5">
            <CardTitle>Card Type 2</CardTitle>
            <CardType2
              icon={<TargetIcon />}
              title="Research Objective"
              description="Develop and validate an AI-powered screening tool that identifies aged care residents with unmet palliative care needs earlier and more accurately than current practice."
            />
          </div>

          <div className="space-y-5">
            <CardTitle>Card Type 3</CardTitle>
            <CardType3
              icon={<DocumentIcon />}
              title="Research-Validated Assessments"
              description="Complete structured palliative care assessments built on peer-reviewed methodology. Forms are standardised, auto-timestamped, and designed so no critical clinical indicator is ever overlooked."
            />
          </div>

          <div className="space-y-5">
            <CardTitle>Team Card</CardTitle>
            <TeamCard
              eyebrow="PRINCIPAL INVESTIGATOR"
              title="Prof. Hanan Khalil"
              description="Lead researcher and grant recipient. Professor in the School of Psychology and Public Health, with expertise in evidence synthesis, aged care, and health services research."
              footer="La Trobe University - School of Psychology and Public Health"
            />
          </div>

          <div className="space-y-5">
            <CardTitle>Card Type 4</CardTitle>
            <CardType4
              icon={<MailIcon />}
              eyebrow="EMAIL"
              value="pcat@latrobe.edu.au"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
