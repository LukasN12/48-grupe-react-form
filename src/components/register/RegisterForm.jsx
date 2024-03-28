import style from '../register/RegisterForm.module.css'

export function Registerform() {
    return (
         <form className={style.form}>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Username:</label>
                <input className={style.input} type="text" placeholder="Eg. John"></input>
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Email:</label>
                <input className={style.input} type="text" placeholder="Eg. John@cena.com"></input>
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Password:</label>
                <input className={style.input} type="text" placeholder="Eg. cantseemenow"></input>
            </div>            
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Repeat password:</label>
                <input className={style.input} type="text" placeholder="Eg. cantseemenow"></input>
            </div>
            <button className={style.button}>Register</button>
        </form>
    );
}