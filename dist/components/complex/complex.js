import { jsx as c } from "react/jsx-runtime";
import '../../assets/complex.css';const s = "_complex_yyn0x_1", o = {
  complex: s,
  default: "_default_yyn0x_21"
}, r = {
  default: o.default
}, n = ({
  variant: e = "default",
  className: l = "",
  bgColor: t,
  children: a
}) => /* @__PURE__ */ c(
  "div",
  {
    style: {
      "--complex-bg-color": t
    },
    "data-testid": "complex",
    className: `${o.complex} ${l} ${r[e]} `,
    children: a
  }
);
export {
  n as Complex
};
