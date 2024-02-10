import React from 'react';

const MenuItem = ({ text = '', icon }) => {
	return (
		<div className="flex w-full space-x-4">
			{icon}
			<spant className="text-medium-gray hover:text-almost-black cursor-pointer">
				{text}
			</spant>
		</div>
	);
};

export default MenuItem;
