import { jsx as s } from "react/jsx-runtime";
import '../../assets/Button.css';const b = "_button_ebgzs_1", a = "_outlined_ebgzs_22", t = {
  button: b,
  default: "_default_ebgzs_18",
  outlined: a
}, d = {
  default: t.default,
  outlined: t.outlined
}, i = ({
  variant: o = "outlined",
  className: n = "",
  bgColor: e,
  textColor: u,
  children: l
}) => /* @__PURE__ */ s(
  "button",
  {
    style: { ...{
      "--button-bg-color": e,
      "--button-text-color": u
    } },
    "data-testid": "button",
    className: `${t.button} ${d[o]} ${n}`,
    children: l
  }
);
export {
  i as Button
};
