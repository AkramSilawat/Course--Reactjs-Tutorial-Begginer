import React, {Children, createContext} from "react"
import { theme } from "./theme"

type ThemeContextProviderProps = {
    children: React.ReactNode
}

const ThemeContext = createContext(theme)

export const ThemeContextProviderProps = ({
    children,
}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}