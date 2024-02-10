import React, { useState } from 'react';

//логотип как реакт компонент
import { ReactComponent as LogoIcon } from '../../images/control.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import NavItem from '../NavItem/NavItem';
import NavMenu from '../NavMenu/NavMenu';
import { COMPANY, FEATURES } from '../utils/constant';
import Button from '../Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="flex items-center">
			<LogoIcon className="w-12" />

			<nav className="hidden xl:flex space-x-6 ml-8 items-center">
				<NavItem text="Feature">
					<NavMenu items={FEATURES}></NavMenu>
				</NavItem>

				<NavItem text="Company">
					<NavMenu items={COMPANY}></NavMenu>
				</NavItem>

				<NavItem text="Careers" />
				<NavItem text="About" />
			</nav>
			<div className="hidden ml-auto xl:flex space-x-5">
				<Button>Login</Button>
				<Button hasBorder>Register</Button>
			</div>
			<div
				className="flex xl:hidden ml-auto cursor-pointer z-30"
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
				{isMobileMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
			</div>
			<MobileMenu isOpen={isMobileMenuOpen} />
		</header>
	);
};

export default Header;
