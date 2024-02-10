import React, { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NavItem = ({ text = '', children }) => {
	const [selected, setSelected] = useState('');

	return (
		<div className="relative">
			<div className="flex space-x-2 cursor-pointer items-center">
				<span
					className="text-medium-gray hover:text-almost-black"
					onClick={
						() =>
							children &&
							setSelected(text !== selected ? text : '')

						//если есть чилдрен, проверь текст, если текст не равен тексту
						//тогда запиши его иначе текст пустая строка
					}>
					{text}
				</span>

				{children && selected !== text && <MdKeyboardArrowDown />}
				{/*если есть чилдрен и селект не равен тексту стрелка вверх. */}

				{children && selected === text && <MdKeyboardArrowUp />}

				{/*если есть чилдрен и селект  равен тексту стрелка вниз. */}
			</div>

			{selected && children}
			{/*если текст = текст тогда покажи детишек*/}
		</div>
	);
};

export default NavItem;
