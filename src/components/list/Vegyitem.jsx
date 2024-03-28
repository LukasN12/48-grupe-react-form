/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';
import { Link } from 'react-router-dom';

export function Vegyitem({ data }) {
    const {title, price, unit, href} = data;
    const [count, setCount] = useState(1);
    const minGroceries = 0;
    const maxGroceries = 10;

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
            <span className={style.vegyTitle}>{title}({price}&euro;/{unit})</span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count}{unit}</span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            <Link to={'/vegetables/' + href}>Read more</Link>
        </li>
    );
}