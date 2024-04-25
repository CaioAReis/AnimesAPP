import { config } from "@gluestack-ui/config";

import { fontWeights, fonts } from "./fonts";
import { colors as colorsDark } from "./dark";
import { colors as colorsLight } from "./light";

interface appConfigProps {
  theme: "light" | "dark";
}

export function appConfig({ theme }: appConfigProps) {
  const themes = {
    "dark": {
      ...config,
      tokens: {
        ...config.tokens,
        fonts,
        fontWeights,
        colors: { ...config.tokens.colors, ...colorsDark },
      }
    },

    "light": {
      ...config,
      tokens: {
        ...config.tokens,
        fonts,
        fontWeights,
        colors: { ...config.tokens.colors, ...colorsLight },
      }
    }
  };

  return themes[theme];
}