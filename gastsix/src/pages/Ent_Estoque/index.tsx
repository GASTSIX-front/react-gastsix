import "./style.css"

//Hooks
import { useState } from "react";

function Ent_Estoque() {
  const [id, setId] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [partNumber, setPartNumber] = useState<string>("");
  const [posição, setPosiçao] = useState<string>("");
  const [deposito, setDeposito] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [rua, setRua] = useState<string>("");
  const [codsap, setCodSap] = useState<string>("");
  const [coluna, setColuna] = useState<string>("");

  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section__formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario-central">
          <div className="div__alinhamento_campos">
            <label htmlFor="input_id">Id:</label>
            <input
              type="text"
              name="input_id"
              id=""
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input_item">Item:</label>
            <input
              type="text"
              name="input_item"
              id=""
              onChange={(e) => setItem(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input_quantidade">Quantidade:</label>
            <input
              type="number"
              name="input_quantidade"
              id=""
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input_partnumber">Part number:</label>
            <input
              type="part number"
              name="input_number"
              id=""
              onChange={(e) => setPartNumber(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_funcao_data"></div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input_posicao">Posição:</label>
            <input
              type="text"
              name="input_posicao"
              id=""
              onChange={(e) => setPosiçao(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input_deposito">Deposito:</label>
            <input
              type="text"
              name="input_deposito"
              id=""
              onChange={(e) => setDeposito(e.target.value)}
              required
            />
          </div>
          <div className="div_alinhamento_duplo">
            <div className="div__alinhamento_altura_rua">
              <label htmlFor="input_altura">Altura:</label>
              <input
                type="text"
                name="input_altura"
                id=""
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </div>
            <div className="div__alinhamento_altura_rua">
              <label htmlFor="input_rua">Rua:</label>
              <input
                type="text"
                name="input_rua"
                id=""
                onChange={(e) => setRua(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="div_alinhamento_duplo">
            <div className="div__alinhamento_altura_rua">
              <label htmlFor="input_codsap">Cod sap:</label>
              <input
                type="text"
                name="input_codsap"
                id=""
                onChange={(e) => setCodSap(e.target.value)}
                required
              />
            </div>
            <div className="div__alinhamento_altura_rua">
              <label htmlFor="input_coluna">Coluna:</label>
              <input
                type="text"
                name="input_coluna"
                id=""
                onChange={(e) => setColuna(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="botao_inserir" type="submit">
            Inserir
          </button>
        </form>
      </section>
    </main>

  )
}

export default Ent_Estoque;