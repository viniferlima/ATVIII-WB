/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { useEffect } from "react";

export default function BarraNavegacao(props) {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems)
        });
    }, []);

    const gerarListaBotoes = () => {
        if (props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = props.botoes.map(valor =>
                <li key={valor}><a onClick={(e) => props.seletorView(valor, e)}>{valor}</a></li>
            )
            return lista
        }
    }

    return (
        <>
            <nav className={props.tema}>
                <div className="nav-wrapper">
                    <a className="brand-logo">WB ATV-3</a>
                    <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    )
}