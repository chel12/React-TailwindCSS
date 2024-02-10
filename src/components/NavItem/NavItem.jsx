import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NavItem = ({ text = '' }) => {
	return (
		<div className="relative">
			<div className="flex space-x-2 cursor-pointer">
				<span className="text-medium-gray hover:text-almost-black">
					{text}
				</span>
				<MdKeyboardArrowUp />
			</div>
		</div>
	);
};

export default NavItem;
