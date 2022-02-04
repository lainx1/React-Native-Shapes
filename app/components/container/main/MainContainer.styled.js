import styled from "styled-components"

const ViewStyled = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${props => props.backgroundColor || "springgreen"};
`

export default ViewStyled