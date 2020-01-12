import React from 'react';
import axios from 'axios';
import Button from '../../atoms/Button/Button';
import InputText from '../../atoms/InputText/InputText';
import Note from '../Note/Note';

class NoteManager extends React.Component {
	state = {
		notesList: [],
		inputValue: '',
		date: new Date().toLocaleString()
	};

	onChange = (e) => {
		this.setState({ inputValue: e.target.value })
	};

	onButtonClick = () => {
		const { notesList, inputValue } = this.state;
		const todoListValues = notesList;
		if (inputValue.trim() != '') {
			todoListValues.push({title: inputValue, date: this.getDate()});
		}

		this.setState({textMessage: todoListValues, inputValue: ''})
	};

	onDelete = (i) => { // add this.deleteNote into current handler
		const { notesList } = this.state;
		notesList.splice(i, 1);
		this.setState({ notesList: notesList });
	};

	getDate = () => new Date().toLocaleString();

	/*getDefaultNotesList = () => {
		axios.get('<someApi>/notes-list')
		.then(data => this.setState({ notesList: data }))
		.catch(error);
	};

	deleteNote = () => {
		axios.delete('<someApi>/notes-list-rm/:id')
		.then(data => this.setState({ notesList: data }))
		.catch(error);
	};

	componentDidMount() {
		this.getDefaultNotesList();
	}*/

	render() {
    const { inputValue, notesList } = this.state;
		return(
			<div className="container">
				<h1>Notes Manager</h1>
				<InputText 
					type="text" 
					value={ inputValue }
					placeholder="Add New"
					onChange={(e) => this.onChange(e)}
				/>
				<Button className="button button-add" title="Add" onClick={ this.onButtonClick }/>
				{ notesList.map((note, i) => <div className="notes" key={ i }>
					<span>{ i+1+'.' }</span>
					<Note 
						title={note.title} 
						date={note.date} 
						onDelete={() => this.onDelete(i)}/>
					</div>) }
			</div>
		);
	};
};

export default NoteManager;