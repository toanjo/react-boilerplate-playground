import React from 'react'
import styled from 'styled-components';

export const Button = styled.button`
    margin: 1em;
    padding: 0.5em 1em;
    border-color: ${props => props.theme.colors.buttonBorderColor};
    color: ${props => props.theme.colors.textColor};
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const LoadingContainer = styled.div`
`

export const Loading = () => <LoadingContainer>
    Fetching...
</LoadingContainer>