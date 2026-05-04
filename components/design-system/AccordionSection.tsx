import Accordion from "../ui/Accordion";

const accordionItems = [
  {
    id: "item-1",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nunc sit amet dignissim sodales, nunc lectus egestas sem, at ornare arcu dolor a tellus. Fusce leo eros, finibus a rutrum tincidunt, congue non mauris.",
  },
  {
    id: "item-2",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nunc sit amet dignissim sodales, nunc lectus egestas sem, at ornare arcu dolor a tellus. Fusce leo eros, finibus a rutrum tincidunt, congue non mauris.",
  },
  {
    id: "item-3",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nunc sit amet dignissim sodales, nunc lectus egestas sem, at ornare arcu dolor a tellus. Fusce leo eros, finibus a rutrum tincidunt, congue non mauris.",
  },
];

export default function AccordionSection() {
  return (
    <section className="la-section">
      <h2 className="text-black">Accordion</h2>

      <div className="la-purple-wrap p-6 sm:p-8">
        <Accordion items={accordionItems} />
      </div>
    </section>
  );
}
