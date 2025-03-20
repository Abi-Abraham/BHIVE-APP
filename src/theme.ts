interface Colors {
  white: string;
  primary: string;
  primary2: string;
  buttonLightYellow: string;
  buttonDarkYellow: string;
  buttonLightGray: string;
  buttonDarkGray: string;
  textColor1: string;
  textColor2: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
}

export const COLORS: Colors = {
  white: "#FFFFFF",
  primary: "#000000",
  primary2: "#FFBB00",
  buttonLightYellow: "#FFCF4B",
  buttonDarkYellow: "#27AE60",
  buttonLightGray: "#F9F9F9",
  buttonDarkGray: "#CEC6C6",
  textColor1: "#263238",
  textColor2: "#65624C",
  gray1: "#333333",
  gray2: "#4F4F4F",
  gray3: "#828282",
  gray4: "#B7B6B8",
  gray5: "#E0E0E0",
};

interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const size: Size = {
  xs: "360px",
  sm: "600px",
  md: "900px",
  lg: "1280px",
  xl: "1440px",
  xxl: "1920px",
};

export const DEVICES = {
  xs: `(min-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};
