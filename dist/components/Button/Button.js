import { jsx as l } from "react/jsx-runtime";
import '../../assets/button.css';const s = "_button_ebgzs_1", b = "_outlined_ebgzs_22", t = {
  button: s,
  default: "_default_ebgzs_18",
  outlined: b
}, a = {
  default: t.default,
  outlined: t.outlined
}, c = ({
  variant: o = "outlined",
  className: n = "",
  bgColor: e,
  textColor: u
}) => /* @__PURE__ */ l(
  "button",
  {
    style: { ...{
      "--button-bg-color": e,
      "--button-text-color": u
    } },
    "data-testid": "button",
    className: `${t.button} ${a[o]} ${n}`,
    children: "Text"
  }
);
export {
  c as Button
};
