import { Checkbox, Radio } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import { ArrowDown, ArrowDown2 } from "iconsax-react";


const DropDownContainer = styled("div")`
  position: relative;
  display: flex;
  width: ${props => props.width};
`;

const DropDownHeader = styled("div")`
    background: transparent;
    user-select: none;
	border-radius: 10;
	border-radius: 10px;
	transition: all .5s;
    display: block;
	border: 1px solid #D2D2D2;
    cursor: pointer;
    position: relative;
    display: flex;
    flex: 1;
    .title{
        flex: 1;
        border-right: 1px solid #D2D2D2;
        padding-left: 17px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 15px !important;
    }
    .icon{
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: all .2s;
    }
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 100%;
  border-radius: 1em;
  margin-top: 50px;
  transition: all .2s;
  visibility: ${props => props.isOpen ? 'visible' : "hidden"};
  opacity: ${props => props.isOpen ? '1' : "0"};
`;

const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    background: #ffffff;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 1.3rem;
    border-radius: 10px;
    font-weight: 400;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.161));
    padding-bottom: .8em;
    max-height: 150px;
    overflow-y: scroll;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-top: .3em;
  margin-bottom: .3em;
  font-family: "Poppins";
  font-size: 14px;
  cursor: pointer;

  color: #262626;
  padding-top: 6px;
  padding-bottom: 6px;
  &:hover {
    color: #fd9e46;
  }
  .checkbx{
    user-select: none;
  }
  padding-left: 22px;
  &:first-child {
    padding-top: .8em;
  }
`;


export default function Select({ values = [], width = "auto", onChange, value }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    const toggling = () => setIsOpen(!isOpen);




    return (
        <DropDownContainer ref={ref} width={width}>
            <DropDownHeader>
                <div className="title">
                    {value.title || ""}
                </div>
                <div onClick={toggling} className="icon">
                    <ArrowDown2 style={{ rotate: isOpen ? "180deg" : "0deg", transition: "all .2s" }} size={16} color="#262626" />
                </div>
            </DropDownHeader>
            {(
                <DropDownListContainer isOpen={isOpen}>
                    <DropDownList>
                        {values.map((option, i) => (
                            <ListItem onClick={() => {
                                onChange(option)
                                setIsOpen(false)
                            }} key={Math.random()}>
                                {option.title}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )
            }
        </DropDownContainer >
    );
}
