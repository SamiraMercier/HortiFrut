import React from "react";
import {Route, Switch } from "react-router-dom";
import Inicio from './pages/Inicio'
import Produtos from './pages/Produtos'
import AdicionarProdutos from './pages/AdicionarProdutos';
import DetalhesProdutos from './pages/DetalhesProdutos';
import EditarProdutos from './pages/EditarProdutos'

export default function Routes() {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/produtos' component={Produtos} />
                <Route path='/adicionar' component={AdicionarProdutos} />
                <Route path='/detalhes/:id' component={DetalhesProdutos} />
                <Route path='/editar/:id' component={EditarProdutos} />
            </Switch>
        </>
    )
}