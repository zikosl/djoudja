import React from "react"


const NavBin = ({ title }) => {
    return (
        <div className="relative group">
            <li className=" group text-[17px]  whitespace-nowrap">
                <button className="px-2 border border-gray-400 p-1 rounded-[0.3rem]">{title}</button>
                <div className=" absolute group-hover:flex hidden h-1 w-full bg-[#e20112] -bottom-[1.1rem]" ></div>
            </li>
        </div>
    );
};
export default NavBin;