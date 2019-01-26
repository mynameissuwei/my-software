import React, { Component } from 'react';
import { BrowserRouter as Router , Link,NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd';

import './index.less'

const { Header } = Layout;

class Jheader extends Component {
	render() {
		return (
				<Layout className="layout">
					<Header>
						<div className="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="1">
								<NavLink to='/a'>nav 1</NavLink>
							</Menu.Item>
							<Menu.Item key="2">
								<NavLink to='/b'>nav 2</NavLink>
							</Menu.Item>
							<Menu.Item key="3">
								<NavLink to='/c'>nav 3</NavLink>
							</Menu.Item>
							<Menu.Item key="4">
								<NavLink to='/d'>nav 4</NavLink>
							</Menu.Item>
							<Menu.Item key="5">
								<NavLink to='/e'>nav 5</NavLink>
							</Menu.Item>
						</Menu>
					</Header>
				</Layout>
		);
	}
}

export default Jheader