import React from 'react';
import Button from '../../atoms/Button/Button';
import InputText from '../../atoms/InputText/InputText';

const Note = ({
	title, 
	onDelete, 
	date
}) => {
	return(
		<React.Fragment>
			<div className="note-title" title={title}>{title}</div>
			<Button className="button" onClick={onDelete} title="x"/>
			<span className="date">{date}</span>
		</React.Fragment>
	);
};

export default Note;