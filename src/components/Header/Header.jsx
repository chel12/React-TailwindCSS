import React from 'react';

//логотип как реакт компонент
import { ReactComponent as LogoIcon } from '../../images/control.svg';
import NavItem from '../NavItem/NavItem';

const Header = () => {
	return (
		<header className="flex">
			<LogoIcon className="w-24" />
			<nav className="flex space-x-6 ml-8 items-center">
				<NavItem text="Feature"></NavItem>
				<NavItem text="Company"></NavItem>
				<NavItem text="Careers" />
				<NavItem text="About" />
			</nav>
		</header>
	);
};

export default Header;
