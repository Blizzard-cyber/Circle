import Homepage from './pages/homepage';
import Me from './pages/me';
import Issue from './pages/issue';
import Circle from './pages/circle';
import Discovery from './pages/discovery';
import {
  Route,
	NavLink,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';


function App(){
	
	return (
		<div className="app">
			<div className="content">
				<Switch>
					<Route path="/home" component={Homepage} />
					<Route path="/discovery" component={Discovery} />
					<Route path="/issue" component={Issue} />
					<Route path="/circle" component={Circle} />
					<Route path="/me" component={Me} />
					<Redirect to="/home" />
				</Switch>
			</div>
			<div className="nav">
				<NavLink to="/home" activeClassName="active">
						<img src="/home.png" alt="" />
						<p>首页</p>
				</NavLink>
				<NavLink to="/discovery">
					<img src="/discovery.png" alt="" />
					<p>发现</p>
				</NavLink>
				<NavLink to="/issue">
					<img src="/issue.png" alt="" />
				</NavLink>
				<NavLink to="/circle">
				<img src="/circle.png" alt="" />
					<p>圈子</p>
				</NavLink>
				<NavLink to="/me">
					<img src="/me.png" alt="" />
					<p>我的</p>
				</NavLink>
			</div>

		</div>
	);
}

export default App;