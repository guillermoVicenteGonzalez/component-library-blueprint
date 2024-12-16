import { jsx as a } from "react/jsx-runtime";
import '../../assets/jorge-component.css';const s = "_jorgeComponent_1cg12_1", o = {
  jorgeComponent: s,
  default: "_default_1cg12_21"
}, l = {
  default: o.default
}, m = ({
  variant: e = "default",
  className: t = "",
  bgColor: n,
  children: r
}) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      "--jorgeComponent-bg-color": n
    },
    "data-testid": "jorge-component",
    className: `${o.jorgeComponent} ${t} ${l[e]} `,
    children: r
  }
);
export {
  m as JorgeComponent
};
