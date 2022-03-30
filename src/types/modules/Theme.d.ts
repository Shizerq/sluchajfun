import "styled-components";
import { theme } from "../../constants";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
