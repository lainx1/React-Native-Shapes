import React, { useEffect, useState } from "react"

const Theme = {
    primaryColor: undefined,
    textColorLight: undefined,
    textColor: undefined,
    backgroundColor: undefined
}


const ThemeContext = React.createContext({
    theme: Theme,
    setTheme: () => { }
})

const ThemeContextProvider = (props) => {

    const { value } = props
    const [themeContext, setThemeContext] = useState({
        theme: Theme,
        setTheme: () => { }
    })

    useEffect(() => {
        console.log("This is the value")
        console.log(value)
        setThemeContext(value)

    }, [value])

    return <ThemeContext.Provider value={themeContext}>
        {props.children}
    </ThemeContext.Provider>

}

export { ThemeContext, Theme }
export default ThemeContextProvider