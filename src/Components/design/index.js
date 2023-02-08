import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    position: relative;
`
export const Responsive = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:5px 1em;
    flex: 1;

    transform-origin: top left;
    @media screen and (max-width:768px) {
        flex-direction: column;
        transform: ${props => props.open ? "scaleX(1)" : "scaleX(0)"};
        transition: all .5s;
        justify-content:center;
        position: fixed;
        width: 100% ;
        height: 100vh;
        z-index: 100;
        background-color: white;
        top: 0;
        left: 0;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ResponsiveRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 3em;
    @media screen and (max-width:768px) {
        margin-left: 0;
        flex-direction: column;
        margin-top: auto;
        margin-bottom: auto;
    }
`

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
    margin-left: 1em;
    cursor: pointer;
    span{
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        color: #262626;
        margin-bottom: .5em;
        
    }
    @media screen and (max-width:768px) {
        margin-top: 1em;
        margin-bottom: 1em;
    }
`
export const Hr = styled.div`
    width: 100%;
    height: 3px;
    background: var(--primary);
    transition: all .5s;
    transform: ${props => props.active ? "scaleX(1)" : "scaleX(0)"};
`
export const Logo = styled.img`
    width: 60px;
    height: 60px;
`

export const Logo2 = styled.img`
    width: 60px;
    height: 60px;
    display: none;
    @media screen and (max-width:768px) {
        display: flex
    }
`

export const Button = styled.button`
    display: flex;
    font-family: Poppins;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 7px 20px;
    border: 1px solid ;

    color: ${props => props.primary ? "#FFF" : "#262626"};
    border-color: ${props => props.primary ? "var(--primary)" : "#262626"};
    background-color: ${props => props.primary ? "var(--primary)" : "#FFF"};
    margin-right: 10px;
    border-radius: 30px;
    span{
        margin-left: 5px;
    }
`
export const Icon = styled.div`
    padding: 20px;
    z-index: 100000;
    display: none;
    @media screen and (max-width:768px) {
        display: flex
    }
`
