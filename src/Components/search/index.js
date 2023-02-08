
import React, { useState } from "react";
import styles from "./style.module.css"
import { SearchNormal1 } from "iconsax-react"
import { useNavigate } from "react-router-dom";

function SearchBar({ Hundler, callback, always = false }) {
    const [value, setValue] = useState("");
    const [active, setActive] = useState(false);
    const enterPress = (e) => {
        if (e.key === 'Enter' && value != "") {
            Hundler(value)
            setValue("")
        }
    }
    return (
        <div className={`${styles.search} ${(active || always) && styles.active}`} onKeyDown={enterPress}>
            <SearchNormal1 cursor={"pointer"} onClick={callback} size="16" color="#535353" />
            <input onFocus={() => setActive(true)} onBlur={() => setActive(false)} value={value} placeholder="Recherche par mot" onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}


export default SearchBar