function applyTheme(theme: any) {
    const root = document.documentElement;
    Object.keys(theme).forEach((cssVar) => {
        root.style.setProperty(cssVar, theme[cssVar]);
    });
}

export interface ICreateTheme {
    primary50?: string
    primary100?: string
    primary200?: string
    primary300?: string
    primary400?: string
    primary500?: string
    primary600?: string
    primary700?: string
    primary800?: string
    primary900?: string
    secondary50?: string
    secondary100?: string
    secondary200?: string
    secondary300?: string
    secondary400?: string
    secondary500?: string
    secondary600?: string
    secondary700?: string
    secondary800?: string
    secondary900?: string
}

function handleTheme({
    primary50,
    primary100,
    primary200,
    primary300,
    primary400,
    primary500,
    primary600,
    primary700,
    primary800,
    primary900,
    secondary50,
    secondary100,
    secondary200,
    secondary300,
    secondary400,
    secondary500,
    secondary600,
    secondary700,
    secondary800,
    secondary900,
}: ICreateTheme) {
    return {
        "--theme-primary50": primary50,
        "--theme-primary100": primary100,
        "--theme-primary200": primary200,
        "--theme-primary300": primary300,
        "--theme-primary400": primary400,
        "--theme-primary500": primary500,
        "--theme-primary600": primary600,
        "--theme-primary700": primary700,
        "--theme-primary800": primary800,
        "--theme-primary900": primary900,
        "--theme-secondary50": secondary50,
        "--theme-secondary100": secondary100,
        "--theme-secondary200": secondary200,
        "--theme-secondary300": secondary300,
        "--theme-secondary400": secondary400,
        "--theme-secondary500": secondary500,
        "--theme-secondary600": secondary600,
        "--theme-secondary700": secondary700,
        "--theme-secondary800": secondary800,
        "--theme-secondary900": secondary900,
    };
}


export const CreateTheme = (theme: ICreateTheme) => {
    const defaultTheme: ICreateTheme = {
        primary50: "#3859FF",
        primary100: "#3859FF",
        primary200: "#3859FF",
        primary300: "#3859FF",
        primary400: "#3859FF",
        primary500: "#3859FF",
        primary600: "#3859FF",
        primary700: "#3859FF",
        primary800: "#3859FF",
        primary900: "#3859FF",
        secondary50: "#3859FF",
        secondary100: "#3859FF",
        secondary200: "#3859FF",
        secondary300: "#3859FF",
        secondary400: "#3859FF",
        secondary500: "#3859FF",
        secondary600: "#3859FF",
        secondary700: "#3859FF",
        secondary800: "#3859FF",
        secondary900: "#3859FF",
    };

    const baseTheme2 = handleTheme({
        ...defaultTheme,
        ...theme
    });
    applyTheme(baseTheme2)
}