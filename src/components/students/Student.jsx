import style from "./Students.module.css";

export function Student() {
    return (
        <li className={style.studentList}>
            <h2 className={style.name}>Name (age years)</h2>
            <p className={style.status}>Marriage status - is (not) married</p>
            <p className={style.info}>Marks: 1, 2, 3...</p>
            <p className={style.info}>Marks count: 5</p>
            <p className={style.info}>Marks average: 5</p>
        </li>
    );
}