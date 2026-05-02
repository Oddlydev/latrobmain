import { Fragment } from "react";
import Button from "../ui/Button";
import { HeartIcon } from "./icons";

const buttonRows = [
  {
    label: "Primary",
    button: <Button>Lorem ipsum</Button>,
  },
  {
    label: "Primary Button with Right Icon",
    button: (
      <Button variant="primaryIconRight">
        Lorem ipsum <HeartIcon />
      </Button>
    ),
  },
  {
    label: "Primary Button with Left Icon",
    button: (
      <Button variant="primaryIconLeft">
        <HeartIcon /> Lorem ipsum
      </Button>
    ),
  },
  {
    label: "Secondary",
    button: <Button variant="secondary">Lorem ipsum</Button>,
  },
];

export default function ButtonsSection() {
  return (
    <section className="la-section">
      <h2 className="h2 text-black">Buttons</h2>

      <div className="la-purple-wrap">
        <div className="overflow-hidden rounded-[28px] border border-dashed border-violet-300 bg-white p-5 sm:p-7">
          <div className="grid gap-8 sm:grid-cols-[260px_minmax(0,1fr)] sm:items-center">
            {buttonRows.map((row) => (
              <Fragment key={row.label}>
                <p className="body-sm-600 text-black">{row.label}</p>
                <div className="flex justify-start">{row.button}</div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
