// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    width: 100%;
    display: flex;
    font-size: 4rem;
    justify-content: center;
    padding: 7px;

`
const StyledDetails = styled.div`
width: 100%;
display: none;
font-size: 4rem;
justify-content: center;
padding: 7px;
`

export default function Character({props, action}) {
    return (
        <StyledCharacter>
        {props.name}
        <button onClick={() => {action(props.name); console.log('hello')}}>
            Details
        </button>
        </StyledCharacter>
    )
}