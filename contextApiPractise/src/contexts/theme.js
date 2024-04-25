import { createContext, useContext } from "react";


export const ThemeContext = createContext(
    {
        themeMode: "light",
        lightmode: () => { },
        darkmode: () => { }
    }
)

export const ThemeContextProvider = ThemeContext.Provider


export function useTheme() {
    return useContext(ThemeContext)
}