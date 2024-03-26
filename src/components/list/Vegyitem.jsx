/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';

export function Vegyitem({ title }) {
    const [count, setCount] = useState(1);
    const maxGroceries = 10;
    const minGroceries = 0;

    function handleCountMinus() {
        if (count > minGroceries) {
        setCount(count - 1);
        }
    }

    function handleCountPlus() {
        if (count < maxGroceries) {
            setCount(count + 1);
        }
    }

    return (
    <li className={style.vegy}>
        <span className={style.vegyTitle}>{title}</span>
        <div className={style.controls}>
            <button onClick={handleCountMinus} className={style.btn}>-</button>
            <span className={style.count}>{count}kg</span>
            <button onClick={handleCountPlus} className={style.btn}>+</button>
        </div>
    </li>
    );
}