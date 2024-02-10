import React from 'react';

//логотип как реакт компонент
import { ReactComponent as LogoIcon } from '../../images/control.svg';
import NavItem from '../NavItem/NavItem';

const Header = () => {
	return (
		<header className="flex">
			<LogoIcon className='w-24'/>
			<nav className="flex">
				<NavItem text="Один" />
				<NavItem text="Два" />
				<NavItem text="Три" />
			</nav>
		</header>
	);
};

export default Header;
