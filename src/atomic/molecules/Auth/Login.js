import React from "react";
import Button from '../../atoms/Button/Button';
import InputText from '../../atoms/InputText/InputText';
import Text from '../../atoms/Text/Text';

class Login extends React.Component {
		state = {
			login: '',
			password: '',
			error: '',
		};

		onLoginButtonClick = () => {
			const { login, password } = this.state;
			if (login.trim() === '' || password.trim() === '') {
				this.setState({error: 'Credentials could not be empty'});
			} else if (password.trim().length <= 8) {
				this.setState({error: 'Password length should be more than 8 digits'});
			} else {
				this.setState({error: ''}, () => console.log('Some ajax request to API should be sent. Example, axios.post'));
			}
		}

		onLoginChange = (e) => {
			this.setState({ login: e.target.value })
		};

		onPasswordChange = (e) => {
			this.setState({ password: e.target.value })
		};

		render(){
			const { login, password, error } = this.state;
			return(
				<div className="wrapper">
					<h1>LOG IN</h1>
						<Text message={error} classname='text-red' />
						<div className="form-wrapper">
							<InputText 
								type="text" 
								placeholder="@username" 
								value={ login }
								onChange={(e) => this.onLoginChange(e)}
							/>
						</div>
						<div className="form-wrapper">
							<InputText type="password" placeholder="password" value={ password } onChange={(e) => this.onPasswordChange(e)} />
						</div>
						<Button className="btn" type="submit" title="LOG IN" onClick={ this.onLoginButtonClick }/>
			
						<a className="button-password" href="#"> FORGOT PASSWORD ?</a>
						<a className="button-account" href="#">CREATE AN ACCOUNT</a>
				</div>
				)
		};
};

export default Login;