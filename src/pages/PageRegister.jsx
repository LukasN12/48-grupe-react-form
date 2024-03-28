export function PageRegister() {
    return (
        <>
        <h1>Register</h1>
        <form>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Eg. John"></input>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Eg. John@cena.com"></input>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Eg. cantseemenow"></input>
            </div>            
            <div>
                <label htmlFor="">Repeat password</label>
                <input type="text" placeholder="Eg. cantseemenow"></input>
            </div>
        </form>
        </>
    );
}