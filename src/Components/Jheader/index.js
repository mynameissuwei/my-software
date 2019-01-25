import React, { Component } from 'react';
import { BrowserRouter as Router , Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';

import './index.less'

const { Header } = Layout;

class Jheader extends Component {
	render() {
		return (
			<Router>
				<Layout className="layout">
					<Header>
						<div className="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="1">
								<Link to='/home/a'>nav 1</Link>
							</Menu.Item>
							<Menu.Item key="2">
								<Link to='/home/b'>nav 2</Link>
							</Menu.Item>
							<Menu.Item key="3">
								<Link to='/home/c'>nav 3</Link>
							</Menu.Item>
							<Menu.Item key="4">
								<Link to='/home/d'>nav 4</Link>
							</Menu.Item>
							<Menu.Item key="5">
								<Link to='/home/e'>nav 5</Link>
							</Menu.Item>
						</Menu>
					</Header>
				</Layout>
			</Router>

		);
	}
}

export default Jheader