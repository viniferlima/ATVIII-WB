import M from 'materialize-css'
import { useEffect } from "react";


export default function FormularioCadastroProdutoServico(props) {
    let estiloTitulo = `center-align blue-text`
    let titulo = `${props.titulo}`
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`

    useEffect(() => {
        M.AutoInit();
    }, []);

    const showToast = () => {
        M.toast({ html: 'Apenas as transições de tela e o layout foram desenvolvidos!' })
    }

    return (
        <>
            <h5 className={estiloTitulo}>{titulo}</h5>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" type="text" className="validate" />
                            <label htmlFor="preco">Preço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select defaultValue="Nenhum">
                                <option value="Nenhum" disabled>Escolha o Tipo do item</option>
                                <option value="Produto">Produto</option>
                                <option value="Serviço">Serviço</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <input id="genero" type="text" className="validate" />
                            <label htmlFor="genero">Gênero</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button onClick={showToast} className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}