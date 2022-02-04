import React from "react"
import ImageStyled from "./Image.styled"

const Image = (props) => {

    const { imageSrc } = props

    return <ImageStyled src={imageSrc}  />

}

export default Image