import { createContext, ReactNode, useContext, useState } from "react";

interface IThemeContext {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('Theme context error');
    }

    return themeContext;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}