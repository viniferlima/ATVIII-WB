/* eslint-disable jsx-a11y/anchor-is-valid */
import M from 'materialize-css'
import { useEffect } from "react";

export default function ListaClientes(props) {
    let estiloTitulo = `center-align blue-text`
    let estiloBotoesAcao = `btn-floating btn-small waves-effect waves-light btn tooltipped`
    let estiloBotaoNovo = `btn waves-effect waves-light ${props.tema}`
    let estiloBotaoEditar = `${estiloBotoesAcao} light-blue`
    let estiloBotaoDeletar = `${estiloBotoesAcao} red`
    let titulo = `${props.titulo}`

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
                <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">Busca</label>
                </div>
                <div className="input-field col s6">
                    <select defaultValue="0">
                        <option value="0" disabled>Escolha como listar os clientes</option>
                        <option value="1">Todos os clientes por gênero</option>
                        <option value="2">Os 10 clientes que mais consumiram, em quantidade</option>
                        <option value="3">Os 5 clientes que mais consumiram, em valor</option>
                        <option value="4">Os 10 clientes que menos consumiram, em valor</option>
                    </select>
                </div>
            </div>

            <table className="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Idade</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {props.clientes.map((cliente, i) => (
                        <tr>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.idade}</td>
                            <td>
                                <a className={estiloBotaoEditar} style={{ marginRight: "2px" }} href="#!" onClick={(e) => props.seletorView('Alteração de Cliente', e)} data-position="left" data-tooltip="Alterar">
                                    <i className="material-icons">edit</i>
                                </a>
                                <a className={estiloBotaoDeletar} href="#!" onClick={showToast} data-position="right" data-tooltip="Deletar">
                                    <i className="material-icons">delete</i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={(e) => props.seletorView('Novo Cliente', e)} className={estiloBotaoNovo} style={{ margin: "5px" }} type="submit" name="action">Novo
                <i className="material-icons right">add</i>
            </button>
        </>
    )
}