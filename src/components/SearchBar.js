import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			term: ''
		}

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		})
	}
 
	onFormSubmit(event) {
		event.preventDefault();
		this.props.onTermSubmit(this.state.term);
	}

	render() {
		return(
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="ui field">
						<label> Search Video </label>
						<input type="text" value={this.state.term} onChange ={this.onInputChange} />
					</div>
				</form>
	
			</div>
		);
	}
}

export default SearchBar;