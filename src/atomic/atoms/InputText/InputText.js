import React from 'react';

const InputText = ({
	onChange, 
	type, 
	label, 
	value, 
	placeholder
}) => {
	return(
		<React.Fragment>
			{label && <label>{label}</label>}
			<input className="text-notes" type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e)}/>
		</React.Fragment>
	);
};

export default InputText;