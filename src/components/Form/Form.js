import React, { useEffect, useRef } from 'react'
import styles from "./styles.module.css"
export function Form({ onSubmit, value, onChange, text, data, setEmojiValue }) {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <form className={styles.myForm} onSubmit={onSubmit} >
            <input ref={inputRef} type={'text'} value={value} onChange={(e) => { onChange(e.target.value); }} className={styles.input} />
            <button className={styles.myButton} type="button" onClick={onSubmit}>
                {text}
            </button>
        </form>
    )

}
