import React from "react"
import styled from "styled-components"
import { Dimensions } from "react-native"
import LinearGradient from "react-native-linear-gradient"
const { width: W, height: H } = Dimensions.get('window')

const ViewStyled = styled.View`
    top: 250;
    left: 10;
    width: ${W};
    height: ${H};
`

const LinearGradientStyled = (props) => {
    
    const { color = "#3F388E" } = props
    return <LinearGradient
        start={{ x: 0.8, y: 0.2 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0.1, 0.9]}
        colors={[color, color]}
        style={{
            top: -250,
            left: -10,
            height: 600,
            width: 600,
            backgroundColor: color,
            borderRadius: 400,
        }}
    >{
            props.children
        }</LinearGradient>
}

export { ViewStyled, LinearGradientStyled }