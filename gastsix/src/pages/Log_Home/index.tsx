
import "./style.css";
import IMG from "../../assets/img/LOGO.png"

function Log_Home() {

    return (
        <>

            <main>
                <div className="big_logo">
                    <img src={IMG} alt="logo gastsix" />
                </div>
                <div className="box_login">
                    <h2>Login</h2>
                    <div className="preenchimentos">
                        <div className="usuario">
                            <label htmlFor="usuário">Usuário:</label>
                            <input type="text" />
                        </div>
                        <div className="senha">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" id="password" />
                        </div>
                    </div>
                </div>
            </main>



        </>
    );
}

export default Log_Home;
