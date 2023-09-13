import "./style.css";

function Log_Home() {

    return (
        <>

            <main>
                <div className="big_logo">
                    <img src="./img/LOGO.png" alt="logo gastsix" />
                </div>
                <div className="box_login">
                    <h2>login</h2>
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

//o componente Home pode ser chamado em outros arquivos
export default Log_Home;