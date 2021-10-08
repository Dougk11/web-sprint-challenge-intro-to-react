import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
    width: 100%;
    display: flex;
    font-size: 4rem;
    justify-content: center;
    padding: 7px;

`

export default function Details({props, id}) {
    console.log(props);
    const asArray = Object.entries(props);
    console.log(asArray);
    const chrArray = asArray.filter(chr => chr.name === id);
    console.log(chrArray);
    return (
        <StyledDetails>
        {chrArray[0].films};
        {chrArray[0].gender};
        {chrArray[0].height};
        {chrArray[0].birth_year};
        </StyledDetails>
    )
}