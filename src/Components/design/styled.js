import styled from "styled-components"

export const Steps = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1em;
`
export const Hr = styled.div`
    border-bottom: 1px solid;
    border-color: ${props => props.active ? "var(--dgreen)" : "#707070"};
    display: flex;
    flex: 1;
`

export const Step = styled.div`

    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid ;
    border-color: ${props => props.active ? "var(--dgreen)" : "#707070"};
    background-color: ${props => props.finish ? "var(--green)" : "transparent"};
    color: ${props => props.finish ? "#ffffff" : "#707070"};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    display:flex;
    justify-content: center;
    align-items: center;
    /* identical to box height */

`

export const Container = styled.div`
    font-family: Poppins;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2em;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
export const Field = styled.div`

    background: ${props => props.empty ? "rgba(226, 226, 226, 0.16)" : "#fff"};
    justify-content: ${props => props.empty ? "center" : "flex-start"};
    align-items: ${props => props.empty ? "center" : "inherit"};
    height: 93px;
    display: flex;
    border: 1px solid #E2E2E2;
    margin: 1em 5px;
    border-radius: 4px;
    flex-direction: column;
    overflow-y: scroll;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 5px;

`

export const Label = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;

    color: rgba(38, 38, 38, 0.81);
    margin-bottom: 10px;
`
export const Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #838EAB;
`

export const RowItem = styled.div`
    display: flex;
    flex-direction: row;
    flex:1;
    margin-left: 1em;
    margin-right: 1em;
    padding-left: .5em;
    padding-right: .5=em;
    padding-top: .5em;
    padding-bottom: .5em;
    border-bottom: 1px solid #ededed;
`
export const TextItem = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #262626;
    display: flex;
    flex: 1;
    text-align: left;
`
export const AddButton = styled.button`
    display: flex;
    height: 45px;
    justify-content: center;
    align-items: center;
    width: 60px;
    border-radius: 6px;
    background-color:var(--primary);
    border: 0;
    cursor: pointer;
    margin: 0 5px;
`

