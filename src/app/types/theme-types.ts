type ThemeColors = "White" |"Black" |"Zinc" | "Rose" | "Blue" | "Green" | "Orange"
interface ThemeColorStateParams{
    themeColor: ThemeColors;
    setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>> 
}