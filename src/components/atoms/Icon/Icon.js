import React from 'react' 
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
function Icon({name, ...other}){
    return (
        <Container>
               <i className="material-icons"> {name} </i>    
        </Container>
    )
}
Icon.defaultProps = {
}

export default Icon;
