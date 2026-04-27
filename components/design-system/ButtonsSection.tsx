import Button from "../ui/Button";
import { HeartIcon } from "./icons";

export default function ButtonsSection() {
  return (
    <section className="la-section">
      <h2 className="h2 text-black">Buttons</h2>

      <div className="la-purple-wrap">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold text-brand-1">Primary Button</p>
            <Button className="w-30">Lorem ipsum</Button>
          </div>
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold text-brand-1">
              Primary Button with Right Icon
            </p>
            <Button className="w-44">
              Lorem ipsum <HeartIcon />
            </Button>
          </div>
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold text-brand-1">
              Primary Button with Left Icon
            </p>
            <Button className="w-44">
              <HeartIcon /> Lorem ipsum
            </Button>
          </div>
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold text-brand-1">
              Secondary Button
            </p>
            <Button variant="secondary" className="w-40">
              Lorem ipsum
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
