import M from 'materialize-css'
import { useEffect } from "react";

export default function FormularioCadastroCliente(props) {
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
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="idade" type="number" className="validate" />
                            <label htmlFor="idade">Idade</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">E-mail</label>
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