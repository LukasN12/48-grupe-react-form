/* eslint-disable react/prop-types */
import style from './List.module.css';
import { Vegyitem } from './Vegyitem';
import { data } from '../data/data';

export function List() {
 const {title, unit, price, href} = data;

return (
            <ul className={style.vegetables}>
                {data.map((vegy, index) => <Vegyitem key={index} data={vegy} />)}
            </ul>
    );
}
