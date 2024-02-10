import React from 'react';

//логотип как реакт компонент
import { ReactComponent as LogoIcon } from '../../images/control.svg';
import NavItem from '../NavItem/NavItem';
import NavMenu from '../NavMenu/NavMenu';
import { COMPANY, FEATURES } from '../utils/constant';

const Header = () => {
	return (
		<header className="flex">
			<LogoIcon className="w-24" />

			<nav className="flex space-x-6 ml-8 items-center">
				<NavItem text="Feature">
					<NavMenu items={FEATURES}></NavMenu>
				</NavItem>

				<NavItem text="Company">
					<NavMenu items={COMPANY}></NavMenu>
				</NavItem>

				<NavItem text="Careers" />
				<NavItem text="About" />
			</nav>
		</header>
	);
};

export default Header;
