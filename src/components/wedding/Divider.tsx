import { forwardRef } from "react";

const Divider = forwardRef<HTMLImageElement>((_, ref) => (
  <img ref={ref} src="/images/dividers.svg" alt="" className="wedding-divider" />
));

Divider.displayName = "Divider";

export default Divider;
