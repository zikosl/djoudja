import React from 'react'
import styled from 'styled-components'


const Item = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 10px 5px;

`

const Label = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;

    color: rgba(38, 38, 38, 0.81);
    margin-bottom: 10px;
`

export default function LabelItem({ title, children }) {
    return (
        <Item>
            <Label>{title}</Label>
            {
                children
            }
        </Item>
    )
}
