import React, { useState } from "react";
import styles from "./style.module.css"

function Input({ value, setValue, style = {}, callback = () => { } }) {
  const [active, setActive] = useState(false);

  const enterKey = (e) => {
    if (e.key === 'Enter' && value != "") {
      callback()
    }
  }
  return (
    <div style={style} className={`${styles.input} ${active && styles.active}`}>
      <input placeholder="exemple" onFocus={() => setActive(true)} onBlur={() => setActive(false)} onKeyDown={enterKey} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}


export default Input