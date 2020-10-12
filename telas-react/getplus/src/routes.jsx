import React from "react";
import { Route, Redirect, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Login from "./components/getnet";
import Sonhos from "./components/sonhos";
import Cadastro from "./components/cadastro";
import Home from "./components/home";
import Estudar from "./components/estudar";
import Emprestimo from "./components/emprestimo";
import Criar from "./components/criarSonho";
import Poupar from "./components/poupar";
import Poupando from "./components/poupando";

export default (props) => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/cadastro' component={Cadastro} />
      <Route path='/home' component={Home} />
      <Route path='/poupanca' component={Poupando} />
      <Route path='/poupar' component={Poupar} />
      <Route path='/estude' component={Estudar} />
      <Route path='/sonhos' component={Sonhos} />
      <Route path='/novo' component={Criar} />
      <Route path='/emprestar' component={Emprestimo} />
      <Redirect from='*' to='/login' />
    </Switch>
  </BrowserRouter>
);
