export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-declaration-strict-value",
    "stylelint-scss",
  ],
  rules: {
    "declaration-no-important": true,
    "function-url-no-scheme-relative": true,
    "selector-class-pattern": [
      // BEM: Two Dashes style
      // ref: https://en.bem.info/methodology/naming-convention/#two-dashes-style
      String.raw`(^(?:[a-z]+(?:-[a-z]+)?)(?:__[a-z]+(?:-[a-z]+)?)?(?:--[a-z]+(?:-[a-z]+)?){0,2}[a-z]$)`,
      {
        resolveNestedSelectors: true,
      },
    ],
    "selector-id-pattern": ["avoid-id-selectors"],
    "selector-no-qualifying-type": [
      true,
      {
        ignore: "attribute",
      },
    ],
    "plugin/declaration-block-no-ignored-properties": true,
    "scale-unlimited/declaration-strict-value": [
      [
        "inset",
        "top",
        "bottom",
        "right",
        "left",
        "z-index",
        "gap",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "padding",
        "margin",
        "font-size",
        "line-height",
        "/color$/",
        "border-radius",
      ],
      {
        ignoreValues: {
          inset: [String.raw`/^(\s*(-?\d+(\.\d+)?(rem|em|%)?|auto)\s*){1,4}$/`],
          top: ["0", "auto", String.raw`/^-?\d+(\.\d+)?(rem|em|%)$/`],
          bottom: ["0", "auto", String.raw`/^-?\d+(\.\d+)?(rem|em|%)$/`],
          right: ["0", "auto", String.raw`/^-?\d+(\.\d+)?(rem|em|%)$/`],
          left: ["0", "auto", String.raw`/^-?\d+(\.\d+)?(rem|em|%)$/`],
          "z-index": [String.raw`/^-?\d+$/`],
          gap: ["0", String.raw`/^\d+(\.\d+)?(rem|em|%)$/`],
          width: [
            "0",
            "auto",
            "100%",
            String.raw`/^\d+(\.\d+)?(px|rem|em|vw|vh|vmin|vmax|svw|svh|lvw|lvh|dvw|dvh|%)$/`,
          ],
          "min-width": [
            "0",
            "auto",
            "100%",
            String.raw`/^\d+(\.\d+)?(px|rem|em|vw|vh|vmin|vmax|svw|svh|lvw|lvh|dvw|dvh|%)$/`,
          ],
          "max-width": [
            "none",
            "100%",
            String.raw`/^\d+(\.\d+)?(px|rem|em|vw|vh|vmin|vmax|svw|svh|lvw|lvh|dvw|dvh|%)$/`,
          ],
          height: [
            "0",
            "auto",
            "100%",
            String.raw`/^\d+(\.\d+)?(px|rem|em|vw|vh|vmin|vmax|svw|svh|lvw|lvh|dvw|dvh|%)$/`,
          ],
          "min-height": [
            "0",
            "auto",
            "100%",
            String.raw`/^\d+(\.\d+)?(px|rem|em|vw|vh|vmin|vmax|svw|svh|lvw|lvh|dvw|dvh|%)$/`,
          ],
          "max-height": [
            "none",
            "100%",
            String.raw`/^\d+(\.\d+)?(px|rem|em|vw|vh|vmin|vmax|svw|svh|lvw|lvh|dvw|dvh|%)$/`,
          ],
          padding: [String.raw`/^(\s*(0|\d+(\.\d+)?(rem|em|%))\s*){1,4}$/`],
          margin: [
            String.raw`/^(\s*(0|auto|(\d+(\.\d+)?(rem|em|%)))\s*){1,4}$/`,
          ],
          "font-size": [
            String.raw`/^\d+(\.\d+)?(rem|em|%)$/`,
            "inherit",
            "initial",
            "unset",
          ],
          "line-height": [String.raw`/^\d+(\.\d+)?$/`, "normal"],
          "/color$/": [
            "currentColor",
            String.raw`/^#[0-9a-fA-F]{3,6}$/`,
            "inherit",
            "transparent",
          ],
          "border-radius": ["0", String.raw`/^\d+(\.\d+)?(rem|em|%)$/`],
        },
        expandShorthand: true,
        recurseLonghand: true,
      },
    ],
    "scss/at-rule-no-unknown": true,
    "scss/at-mixin-pattern": "^[a-z]+([a-z-]+[a-z]+)?$",
  },
};
