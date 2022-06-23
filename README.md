### 🛒 Carrinho de Compras Simples - React JS
Aplicação de um carrinho de compras que consome dados de uma API.

Clique no link seguinte para acessar o sistema hospedado no Heroku:
<a href="https://carrinho-de-compras-react.herokuapp.com/">https://carrinho-de-compras-react.herokuapp.com/</a>


<img src="https://user-images.githubusercontent.com/71797335/175397216-dff25bfc-a5cb-489d-be45-b7341e12bd5a.png">

<hr>

Esse sistema simula a interação de uma aplicação Frontend com uma API de e-commerce, que fornece ao nosso Front os dados de produtos a serem adicionados ao carrinho.

Na aplicação podemos selecionar o tipo de dado JSON que vamos consumir na tela. Veja nas imagens abaixo as duas mudanças de busca que podemos selecinar no Frontend clicando no botão "Alterar dados do Servidor":

<div style="display: display-flex">
<img src="https://user-images.githubusercontent.com/71797335/175397216-dff25bfc-a5cb-489d-be45-b7341e12bd5a.png">

<img src="https://user-images.githubusercontent.com/71797335/175397281-4795c36b-c880-4b52-bfc1-3481f1967bd9.png">
 </div>
 
 Abaixo da lista o sitema soma os valores de cada produto, se o valor total for maior que R$10,00 o sistema exibe a mensagem "Você possui frete grátis para a compra"
 
 Ao clicar em "Finalizar Compra" o sistema exibe um modal com uma mensagem de sucesso.
 
 <img src="https://user-images.githubusercontent.com/71797335/175397318-d663d581-2ac1-463a-ab6d-2668fb3651ec.png">
 
 <hr>
 
 ### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [SweetAlert](https://sweetalert.js.org/guides/)

### 🎲 Rodando projeto localmente
 ````
# Clone este repositório
$ git clone <https://github.com/Gabriel-ds/carrinho-de-compras-react.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd carrinho-de-compras

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

