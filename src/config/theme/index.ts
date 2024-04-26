import { config } from "@gluestack-ui/config";
import { createConfig } from "@gluestack-style/react";

import { fontWeights, fonts } from "./fonts";
import { colors as colorsDark } from "./dark";
import { colors as colorsLight } from "./light";

// SEPARAR TODOS OS TOKENS DARKS E LIGHTS

export const myConfig = createConfig({
  ...config,
  tokens: {
    ...config.tokens,
    colors: { ...config.tokens.colors },
    fonts,
    fontWeights,
  },

  themes: {
    dark: {
      ...config.tokens,
      fonts,
      fontWeights,
      colors: {
        ...config.tokens.colors,
        ...colorsDark,
        textDark0: "red",
        textDark50: "red",
        textDark100: "red",
        textDark200: "red",
        textDark300: "red",
        textDark400: "red",
        textDark500: "red",
        textDark600: "red",
        textDark700: "red",
        textDark800: "red",
        textDark900: "red",
        textDark950: "red",
      },
    },

    light: {
      ...config.tokens,
      fonts,
      fontWeights,
      colors: {
        ...config.tokens.colors,
        ...colorsLight,
        // light
        textLight0: "blue",
        textLight50: "blue",
        textLight100: "blue",
        textLight200: "blue",
        textLight300: "blue",
        textLight400: "blue",
        textLight500: "blue",
        textLight600: "blue",
        textLight700: "blue",
        textLight800: "blue",
        textLight900: "blue",
        textLight950: "blue",
      },
    },
  }
});