import style from '../register/RegisterForm.module.css'

export function Registerform() {
    return (
         <form className={style.regForm}>
            <div className={style.userInput}>
                <label htmlFor="">Username:</label>
                <input type="text" placeholder="Eg. John"></input>
            </div>
            <div className={style.userInput}>
                <label htmlFor="">Email:</label>
                <input type="text" placeholder="Eg. John@cena.com"></input>
            </div>
            <div className={style.userInput}>
                <label htmlFor="">Password:</label>
                <input type="text" placeholder="Eg. cantseemenow"></input>
            </div>            
            <div className={style.userInput}>
                <label htmlFor="">Repeat password:</label>
                <input type="text" placeholder="Eg. cantseemenow"></input>
            </div>
        </form>
    );
}