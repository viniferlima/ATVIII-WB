/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    let estiloTitulo = `center-align blue-text`
    let estiloBotaoNovo = `btn waves-effect waves-light ${props.tema}`
    let titulo = `${props.titulo}`

    return (
        <>
            <h5 className={estiloTitulo}>{titulo}</h5>

            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">Busca</label>
                </div>
            </div>

            <table className="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>Item Descrição</th>
                        <th>ID da Compra</th>
                        <th>Data</th>
                        <th>Valor total (R$)</th>
                        <th>CPF do Cliente</th>
                    </tr>
                </thead>

                <tbody>
                    {props.consumos.map((consumo, i) => (
                        <tr>
                            <td>{consumo.itemDescricao}</td>
                            <td>{consumo.id}</td>
                            <td>{consumo.data}</td>
                            <td>R${consumo.total}</td>
                            <td>{consumo.cpfDoCliente}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={(e) => props.seletorView('Novo Consumo', e)} className={estiloBotaoNovo} style={{ margin: "5px" }} type="submit" name="action">Novo
                <i className="material-icons right">add</i>
            </button>
        </>
    )
}