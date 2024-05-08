import { config } from "@gluestack-ui/config";
import { createConfig } from "@gluestack-style/react";

import { fontWeights, fonts } from "./fonts";
import { colors as colorsDark } from "./dark";
import { colors as colorsLight } from "./light";

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

        textLight400: colorsDark.text200,
        textLight700: colorsDark.text200,
        textLight900: colorsDark.text100,
      },
    },

    light: {
      ...config.tokens,
      fonts,
      fontWeights,
      colors: {
        ...config.tokens.colors,
        ...colorsLight,

        textLight400: colorsLight.text200,
        textLight700: colorsLight.text200,
        textLight900: colorsLight.text100,
      },
    },
  }
});