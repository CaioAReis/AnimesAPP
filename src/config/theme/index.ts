import { Appearance } from "react-native";

import { config } from "@gluestack-ui/config";
import { colors as colorsDark } from "./dark";
import { colors as colorsLight } from "./light";

const theme = Appearance.getColorScheme();
const colorTheme = theme === "dark" ? colorsDark : colorsLight;

export const appConfig = {
  ...config,
  tokens: {
    ...config.tokens,

    colors: {
      ...config.tokens.colors,
      ...colorTheme,
    },

    fonts: {
      mono: "Ubuntu_300Light",
      body: "Ubuntu_400Regular",
      heading: "Ubuntu_500Medium",
    },

    fontWeights: {
      bold: "normal",
      medium: "normal",
      normal: "normal",
      semibold: "normal",
    }
  }
};