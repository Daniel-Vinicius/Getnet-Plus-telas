import axios from "axios";
const URL = "https://api-getnet-plus.herokuapp.com/";

export function BuscaSonhos() {
    axios.get(`${URL}dreams/`)
    .then(function(resposta) {
      console.log(resposta.data);
    })
   .catch(function(error) {
    console.log(`deu algum erro: ${error}`);
  })
}

// Deusdete nesse exemplo eu faço uma requisição pra sua api e caso eu tenha uma boa resposta ele retorna a resposta
// contrario o erro e ela é chamada toda vez que ocorre um click na div fazer login na pasta getnet index.jsx
//nas linhas 3 e 112
//teste ela clicando na div e abrindo o console!