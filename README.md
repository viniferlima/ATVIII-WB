# ATVIII-WB
## Atividade 3 (WB) - Programação Orientada a Objetos - Fatec SJC

-------------------------------------
## Descrição da atividade

O  sistema  desenvolvido  para  o  grupo  WB  foi  um  sucesso.  Todas  as  franquias  do  grupo  adotaram  a  solução desenvolvidapor você, na tua empresa especializada em desenvolvimento de software.Mas, apesar de todo o sucesso, há uma questão ainda não resolvida. O sistema não tem uma GUI.Sem  GUI,  o  uso  do  sistema  tornou-se  inapropriado  para  um  ambiente  web,  onde  a  principal  ferramenta  é  o navegador.  Desta  forma,  corre-se  o  risco  de  o  software  tornar-se  defasado  e  perder  para  concorrências 
futuras. Por isso, o próximo objetivo do desenvolvimento e atualizar o sistema com uma GUI moderna e que funcione tanto em navegadores comunsquanto em navegadores de dispositivos móveis, como celularese/ou tabletspor exemplo. 
Teu  objetivo édesenvolver  todas  as  interfaces,  em  HTML.  Não  há  necessidade  de  vínculo  com  alguma aplicação back-end, por hora. Porque ainda é um pré-projeto. Então você está comprometido em terminar as telas e suas transições, somente.

## Como usar? 

* Inicialmente, é necessário rodar o comando "npm install" para instalar as dependências do projeto.

* Depois, basta rodar o comando "npm run start" no console do terminal e a aplicação GUI,desenvolida em REACT e MATERIALIZE,carregará automaticamente no endereço http://localhost:3000/

## Funcionalidades

* O site possui 3 opções no navbar principal, as quais representam as 3 entidades mais importantes do sistema: consumos, clientes e produtos/serviços.

* Cada uma dessas entidades possui 3 telas distintas, cada uma voltada para uma finalidade: busca/listagem, cadastro de novos registros e alteração de dados.

### Tela de busca/listagem de clientes

![image](https://user-images.githubusercontent.com/30990193/232953782-55bd88a4-407d-419a-9b8c-20474305eaa5.png)

### Tela de cadastro de itens

![image](https://user-images.githubusercontent.com/30990193/232955096-9700da15-c8b9-40eb-80d8-f2a551b51044.png)


### Tela de alteração de clientes

![image](https://user-images.githubusercontent.com/30990193/232955034-1d5c7f7e-81cd-46d3-b3a0-6d02d2833ffa.png)

* É importante destacar que as funções de busca, edição e exclusão de registros não foram desenvolvidas e não possuem vínculo com um back-end e nem uma base de dados. O objetivo principal foi a criação das interfaces em HTML, as transições das telas feitas com react, e também a aplicação dos estilos em cascata por meio da biblioteca materialize, se atentando também ao layout responsivo (mobile).

* Diferentemente da ATVII, para a construção deste projeto, foram utilizados componentes de função e os hooks. Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. Hooks não funcionam dentro de classes — eles permitem que você use React sem classes. Nesta atividade utilizei os hooks useState e useEffect.

### Layout Mobile

![image](https://user-images.githubusercontent.com/30990193/233852688-1c0202e9-8e11-44a8-ae18-2da178c8739f.png)

