// Exercicios do desafios de ES6 
//Ex 1

// class Usuario{
//   constructor(email, senha){
//     this.email = email;
//     this.senha = senha; 
//     const admin = false;
//   }
  
//   isAdmin(){
//     console.log("esse usuario não é admin");
//   }
// }

// class Admin extends Usuario{
//   isAdmin(){
//     console.log("esse usuario é admin");
//   }
// }


// const User1 = new Usuario('email@teste.com', '12345');
// const Adm1 = new Admin('email@teste.com', '12345');

// User1.isAdmin();
// Adm1.isAdmin();

//----------------------------------------
//EX 2.1 MAP

// const usuarios = [
//   { nome: 'Diego', idade: 22, empresa:'Rocketseat'},
//   { nome: 'Gabriel', idade: 15, empresa:'Rocketseat'},
//   { nome: 'Lucas', idade: 30, empresa:'Rocketseat'},
// ];

// const newUsuario = usuarios.map(function(item, index){
//     return item.idade;
// });

// console.log(newUsuario);

//----------------------------------------
//EX 2.2 FILTER

// const usuarios = [
//   { nome: 'Diego', idade: 22, empresa:'Rocketseat'},
//   { nome: 'Gabriel', idade: 15, empresa:'Rocketseat'},
//   { nome: 'Lucas', idade: 30, empresa:'Facebook'},
// ];


// const filter = usuarios.filter(function(item){
//   return item.idade > 18 && item.empresa == "Rocketseat";
// });

// console.log(filter);

//--------------------------------------------
//EX 2.3 FIND

// const usuarios = [
//   { nome: 'Diego', idade: 22, empresa:'Rocketseat'},
//   { nome: 'Gabriel', idade: 15, empresa:'Rocketseat'},
//   { nome: 'Lucas', idade: 30, empresa:'Facebook'},
// ];

// const find = usuarios.find(function(item){
//   return item.empresa == 'Google';
// });

// console.log(find);

//--------------------------------------------------------
//EX 2.4 UNINDO OPERAÇÕES

// const usuarios = [
//   { nome: 'Diego', idade: 23, empresa:'Rocketseat'},
//   { nome: 'Gabriel', idade: 15, empresa:'Rocketseat'},
//   { nome: 'Lucas', idade: 30, empresa:'Facebook'},
// ];

// const newUsuario = usuarios.map(function(item, index){
//   item.idade *= 2;
//   return item;
// });

// const filter = newUsuario.filter(function(item){
//   return item.idade < 50;
// });

// console.log(filter);

//--------------------------------------------------------------------
//EX 3.1 ARROW FUNCTION


// const arr = [1, 2, 3, 4, 5];

//do jeito normal
// const newArr = arr.map(function(item){
//   return item + 10;
// });
//com a arrow Function
// const newArr = arr.map(item => item + 10);
// console.log(newArr);

//---------------------------------------------------
//EX 3.2 ARROW FUNCTION

// const usuario = {nome: 'Diego', idade: 23};
// do jeito normal
// function mostraIdade(usuario){
//   return usuario.idade;
// }
// com Arrow Function
// const mostraIdade = (usuario) => usuario.idade;

// console.log(mostraIdade(usuario));

//-----------------------------------------------------------
//EX 3.3 ARROW FUNCTION

// const nome = "Diego";
// const idade = 22;
//normal
// function mostraUsuario(nome = 'Diego', idade = 18){
//   return { nome, idade };
// }

//Arrow function
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});

// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

//-----------------------------------------------------
// 3.4 ARROW FUNCTION 

// const promise = function(){
//   return new Promise(function(resolve, reject){
//     return resolve();
//   })
// }

// const promise = () => new Promise((resolve, reject) => resolve());

// console.log(promise());

//------------------------------------------------
//EX 4.1 DESESTRUTURAÇÃO SIMPLES

// const empresa = {
//   nome: 'Rocketseat',
//   endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//   }
// };
//do jeito normal 

// const nome = empresa.nome;
// const cidade = empresa.endereco.cidade;
// const estado = empresa.endereco.estado;

//com desestruturação
// const {nome, endereco:{cidade, estado}} = empresa;

// console.log(nome);
// console.log(cidade);
// console.log(estado);

//---------------------------------------------------------------
//EX 4.2 DESESTRUTURAÇÂO EM PARÂMETROS

// function mostraInfo(usuario){
//   return `${usuario.nome} tem ${usuario.idade} anos.`;
// }

// function mostraInfo({nome, idade}){
//   return `${nome} tem ${idade} anos.`;
// }

// console.log(mostraInfo({nome: 'Diego', idade: 23}));

//----------------------------------------------------
//EX 5.1 REST

// const arr = [1, 2, 3, 4, 5, 6];

// const [x, ...y] = arr;

// console.log(x);
// console.log(y);

// function soma(...params){
//   return params.reduce((total, next) =>total + next);
// }
// console.log(soma(1, 2, 3, 4, 5, 6));
// console.log(soma(1, 2));

//--------------------------------------------------
//EX 5.2 SPREAD

// const usuario = {
//   nome:'Diego',
//   idade: 23,
//   endereco: {
//     cidade:'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//   }
// }

// const usuario2 = {...usuario, nome:'Gabriel'};
// const usuario3 = {...usuario, cidade:'lontras'};

// console.log(usuario2);
// console.log(usuario3);

//--------------------------------------------------------
//EX 6 TEMPLATE LITERALS

// const usuario = 'Diego';
// const idade = 23;

// console.log('O usuario ' + usuario + ' possui ' + idade + ' anos');
// console.log(`O usuario ${usuario} possui ${idade} anos`);

//------------------------------------------------------------------
//EX 7 OBJECT SHORT SYNTAX

// const nome = 'Diego';
// const idade = 23;
//normal
// const usuario = {
//   nome: nome,
//   idade: idade,
//   cidade: 'Rio do Sul',
// };
//com o OBJECT SHORT SYNTAX
// const usuario = {
//   nome,
//   idade,
//   cidade: 'Rio do Sul',
// };

// console.log(usuario);

//----------------------------------

//EX 1 inteiro Webpack 

// import ClasseUsuario from './functions';
// import {idade} from './functions';

// import Usuario, {idade as idadeUsuario} from './functions';

// console.log(ClasseUsuario.info());
// console.log(idadeUsuario);
// console.log(Usuario.info());

//---------------------------------------
// async / await
// const minhaPromise = () => new Promise((resolve, reject) =>{
//   setTimeout(() => {resolve ('OK')}, 2000);
// });

// //sempre q cria uma async function essa função automaticamente ja vira uma promise
// // async function executaPromise(){
// //   //sempre que tiver + de 1 await, o segundo await so vai executar dps q a 1ª executar 
// //   console.log(await minhaPromise());
// //   console.log(await minhaPromise());
// //   console.log(await minhaPromise());
// // }
// //o await só pode ser usado dentro da função async

// // como criar uma função async com arrow Function
// const executaPromise = async () =>{
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// };

// executaPromise();

//------------------------------------------------------
// Axios

// import axios from 'axios';

// class Api{
//   static async getUserInfo(username){
//     try{
//       const response = await axios.get(`https://api.github.com/users/${username}`);

//       console.log(response);
//     } catch (err){
//       console.warn('Erro na API');
//     }
//   }
// }
// //username certo
// Api.getUserInfo('diego3g');
// // username errado
// Api.getUserInfo('diego3fsdfsdfg');

//------------------------------------------

//EX de async/await/

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// async function umPorSegundo(){
//   await delay();
//   console.log('1s');
//   await delay();
//   console.log('2s');
//   await delay();
//   console.log('3s');
// }

// umPorSegundo();

//--------------------------------------
//EX axios

// async function getUserFromGithub(user){
//   try{
//     const response = await axios.get(`https://api.github.com/users/${user}`);
    
//     console.log(response);
//   }catch (err){
//     console.warn('ERRO NA API')
//   }
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('testedeErro');

// class Github{
//   static async getRepositories(repo){
//     try{
//       const response = await axios.get(`https://api.github.com/repos/${repo}`);
  
//       console.log(response);
//     } catch(err){
//       console.warn('ERRO NA API');
//     }
//   }
// }

// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/saidhsaudbsa');

// const buscaUsuario = async usuario => {
//   try{
//     const response = await axios.get(`https://api.github.com/users/${usuario}`);

//     console.log(response);
//   } catch (err){
//     console.warn('ERRO NA API');
//   }
// }

// buscaUsuario('diego3g');

//--------------------------------------------
//Aplicação com ES6

import api from './api';

class App{
  constructor(){
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');

    this.registerHandlers();
  }

  registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true){
    if(loading === true){
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    }else{
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event){
    event.preventDefault();

    const repoInput = this.inputEl.value;

    this.setLoading();

    if(repoInput.length === 0)
      return;

    try{

    const response = await api.get(`/repos/${repoInput}`);

    console.log(response);

    const { name, description, html_url, owner: { avatar_url } } = response.data;

    this.repositories.push({
      name,
      description,
      avatar_url,
      html_url,
    });

    this.inputEl.value = '';

    this.render();
    }catch (err){
      alert('O repositorio não existe!');
    }

    this.setLoading(false);
  }

  render(){
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo =>{
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);

    });
  }
}

new App();
