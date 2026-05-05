import { Fragment } from "react";
import Button from "../ui/Button";
import { HeartIcon } from "./icons";

const lightBackgroundRows = [
  {
    label: "Primary Light",
    button: <Button variant="primary-light">Lorem ipsum</Button>,
  },
  {
    label: "Primary Light with Right Icon",
    button: (
      <Button variant="primary-light-icon-right">
        Lorem ipsum <HeartIcon />
      </Button>
    ),
  },
  {
    label: "Primary Light with Left Icon",
    button: (
      <Button variant="primary-light-icon-left">
        <HeartIcon /> Lorem ipsum
      </Button>
    ),
  },
  {
    label: "Secondary Light",
    button: <Button variant="secondary-light">Lorem ipsum</Button>,
  },
];

const darkBackgroundRows = [
  {
    label: "Primary Dark",
    button: <Button variant="primary-dark">Lorem ipsum</Button>,
  },
  {
    label: "Primary Dark with Right Icon",
    button: (
      <Button variant="primary-dark-icon-right">
        Lorem ipsum <HeartIcon />
      </Button>
    ),
  },
  {
    label: "Primary Dark with Left Icon",
    button: (
      <Button variant="primary-dark-icon-left">
        <HeartIcon /> Lorem ipsum
      </Button>
    ),
  },
  {
    label: "Secondary Dark",
    button: <Button variant="secondary-dark">Lorem ipsum</Button>,
  },
];

export default function ButtonsSection() {
  return (
    <section className="la-section">
      <h2 className="text-black">Buttons</h2>

      <div className="la-purple-wrap space-y-6">
        <div className="overflow-hidden rounded-[28px] border border-dashed border-violet-300 bg-white p-5 sm:p-7">
          <p className="body-sm-600 mb-6 text-gray-600">Light BG</p>
          <div className="grid gap-8 sm:grid-cols-[260px_minmax(0,1fr)] sm:items-center">
            {lightBackgroundRows.map((row) => (
              <Fragment key={row.label}>
                <p className="body-sm-600 text-black">{row.label}</p>
                <div className="flex justify-start">{row.button}</div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-dashed border-violet-300 bg-black p-5 sm:p-7">
          <p className="body-sm-600 mb-6 text-gray-600">Dark BG</p>
          <div className="grid gap-8 sm:grid-cols-[260px_minmax(0,1fr)] sm:items-center">
            {darkBackgroundRows.map((row) => (
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
