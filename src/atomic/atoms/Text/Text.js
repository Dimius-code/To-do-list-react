import React from 'react';

const Text = ({
	message, classname
}) => {
	return (
		<div className={classname}>
			{ message }
		</div>
	);
};

export default Text;