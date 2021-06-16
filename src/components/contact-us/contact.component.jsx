import React from 'react';
import './contact.style.scss';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/custom-button/button.component';
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			textarea: '',
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		const { firstName, lastName, email, textarea } = this.state;
		this.setState({
			firstName: firstName,
			lastName: lastName,
			email: email,
			textarea: textarea,
		});
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className='contact'>
				<div className='container contact-row'>
					<div class='contact__details'>
						<div class='phone'>
							<div>
								<FaPhone />
							</div>
							<div>
								<h3>Phone</h3>
								<p>(+61) 1800 45 645</p>
							</div>
						</div>

						<div class='email'>
							<div>
								<FaEnvelope />
							</div>
							<div>
								<h3>Email</h3>
								<p>example@gamil.com</p>
							</div>
						</div>

						<div class='location'>
							<div>
								<FaLocationArrow />
							</div>
							<div>
								<h3>Location</h3>
								<p>A 104 George Street, Beenleigh QLD</p>
							</div>
						</div>
					</div>

					<form
						action='#'
						className='contact-form'
						onSubmit={this.handleSubmit}
					>
						<h1>Contact Us</h1>
						<FormInput
							type='text'
							name='firstName'
							value={this.state.firstName}
							onChange={this.handleChange}
							label='First Name'
						/>

						<FormInput
							type='text'
							name='lastName'
							value={this.state.lastName}
							onChange={this.handleChange}
							label='Last Name'
						/>
						<FormInput
							type='email'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
							label='Email'
						/>
						<label htmlFor='textare'>Textarea</label>
						<textarea onChange={this.handleChange}></textarea>
						<Button type='submut'>Send Message</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
