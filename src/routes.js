import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';
import Home from './pages/Home';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/cadastro/video" component={CadastroVideo} />
				<Route path="/cadastro/categoria" component={CadastroCategoria} />
				<Route component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
