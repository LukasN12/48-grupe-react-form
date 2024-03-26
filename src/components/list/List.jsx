import style from './List.module.css';
import { Vegyitem } from './Vegyitem';

export function List() {
const data = [{
    name: 'Bulves', 
    unit: 'kg',
    price: 2 
}, 
{ 
    name: 'Morkos',
    unit: 'kg',
    price: 2.25
},
{
    name: 'Svogunai', 
    unit: 'kg',
    price: 1.65
},
{
    name:'Kopustas',
    unit: 'kg',
    price: 3.45
},
{
    name: 'Pomidoras',
    unit: 'kg',
    price: 1.70
},
{
    name: 'Agurkas',
    unit: 'kg',
    price: 2.35
}];

return (
     <ul className={style.vegetables}>
        {data.map((vegy, index) => <Vegyitem key={index} title={vegy} />)}
    </ul>
    );
}