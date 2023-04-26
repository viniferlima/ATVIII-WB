import { useState, useEffect } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProdutoServico from "./formularioCadastroProdutoServico";
import ListaClientes from "./listaClientes";
import ListaProdutosServicos from "./listaProdutosServicos";
import ListaConsumos from "./listaConsumos";
import NovoConsumo from "./novoConsumo";


export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const [clientes, setClientes] = useState([])
    const [produtosServicos, setItens] = useState([])
    const [consumos, setConsumos] = useState([])

    useEffect(() => {
        getClientes();
        getProdutosServicos();
        getConsumos();
    }, []);

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const getClientes = () => {
        let listaClientes = [];
        let clienteA = [];
        let clienteB = [];
        let clienteC = [];

        clienteA.nome = 'Vinicius Fernandes';
        clienteA.cpf = '489.238.728-25';
        clienteA.idade = 24;

        clienteB.nome = 'Heloisa Sayuri';
        clienteB.cpf = '145.785.987-20';
        clienteB.idade = 30;

        clienteC.nome = 'Victor de Lima';
        clienteC.cpf = '874.478.897-10';
        clienteC.idade = 13;

        listaClientes.push(clienteA);
        listaClientes.push(clienteB);
        listaClientes.push(clienteC);

        setClientes(listaClientes);
    }

    const getProdutosServicos = () => {
        let listaProdutosServicos = [];
        let itemA = [];
        let itemB = [];
        let itemC = [];

        itemA.nome = 'Corte de Cabelo';
        itemA.preco = 60.00;
        itemA.tipo = 'Serviço';

        itemB.nome = 'Shampoo';
        itemB.preco = 100.00;
        itemB.tipo = 'Produto';

        itemC.nome = 'Esmalte';
        itemC.preco = 15.00;
        itemC.tipo = 'Produto';

        listaProdutosServicos.push(itemA);
        listaProdutosServicos.push(itemB);
        listaProdutosServicos.push(itemC);

        setItens(listaProdutosServicos);
    }

    const getConsumos = () => {
        let listaConsumos = [];
        let consumoA = [];
        let consumoB = [];
        let consumoC = [];

        consumoA.id = 1;
        consumoA.data = '01/03/2023';
        consumoA.total = 105.00;
        consumoA.cpfDoCliente = '874.478.897-10';
        consumoA.itemDescricao = 'Shampoo';

        consumoB.id = 2;
        consumoB.data = '20/05/2023';
        consumoB.total = 500.00;
        consumoB.cpfDoCliente = '145.785.987-20';
        consumoB.itemDescricao = 'Esmalte';

        consumoC.id = 3;
        consumoC.data = '17/03/2020';
        consumoC.total = 300.00;
        consumoC.cpfDoCliente = '489.238.728-25';
        consumoC.itemDescricao = 'Corte de cabelo';

        listaConsumos.push(consumoA);
        listaConsumos.push(consumoB);
        listaConsumos.push(consumoC);

        setConsumos(listaConsumos);
    }

    const construirView = () => {

        let barraNavegacao = <BarraNavegacao seletorView={seletorView} tema="blue lighten-2" botoes={['Clientes', 'Produtos/Serviços', 'Consumos']} />
        let listaClientes = clientes;
        let listaProdutosServicos = produtosServicos;
        let listaConsumos = consumos;

        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientes seletorView={seletorView} titulo="Clientes" tema="blue lighten-2" clientes={listaClientes} />
                </>
            )
        } else if (tela === 'Produtos/Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutosServicos seletorView={seletorView} titulo="Produtos/Serviços" tema="blue lighten-2" produtosServicos={listaProdutosServicos} />
                </>
            )

        } else if (tela === 'Consumos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumos seletorView={seletorView} titulo="Consumos" tema="blue lighten-2" consumos={listaConsumos} />
                </>
            )
        } else if (tela === 'Novo Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente titulo="Cadastro de Cliente" tema="blue lighten-2" />
                </>
            )

        } else if (tela === 'Novo Item') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutoServico titulo="Cadastro de Item" tema="blue lighten-2" />
                </>
            )

        } else if (tela === 'Novo Consumo') {
            return (
                <>
                    {barraNavegacao}
                    <NovoConsumo titulo="Nova Compra" tema="blue lighten-2" />
                </>
            )

        } else if (tela === 'Alteração de Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente titulo="Alteração de Cliente" tema="blue lighten-2" />
                </>
            )

        } else if (tela === 'Alteração de Item') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutoServico titulo="Alteração de Item" tema="blue lighten-2" />
                </>
            )

        }
    }
    

    return (
        construirView()
    )
}