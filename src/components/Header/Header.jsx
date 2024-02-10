import React from 'react';

//логотип как реакт компонент
import { ReactComponent as LogoIcon } from '../../images/control.svg';
import NavItem from '../NavItem/NavItem';
import NavMenu from '../NavMenu/NavMenu';
import { COMPANY, FEATURES } from '../utils/constant';
import Button from '../Button/Button';

const Header = () => {
	return (
		<header className="flex items-center">
			<LogoIcon className="w-12" />

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
			<div className="ml-auto flex space-x-5">
				<Button>Login</Button>
				<Button hasBorder>Register</Button>
			</div>
		</header>
	);
};

export default Header;
