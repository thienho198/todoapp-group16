import React from 'react';
import classes from '../style/inputArea.module.css';

export default class InputArea extends React.Component {
	//#region state
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: ''
		};
	}
	//#region events
	onChangeTitle = (value) => {
		this.setState({
			title: value.target.value
		});
	};
	onChangeContent = (value) => {
		this.setState({
			content: value.target.value
		});
	};
	render() {
		return (
			<div className={classes.inputAreaMain}>
				<div>
					<div className="form-group ml-5 mr-5 mb-2">
						<label htmlFor="titleInput" style={{ marginBottom: '3px' }}>
							Task title
						</label>
						<input
							onChange={this.onChangeTitle}
							type="text"
							className="form-control"
							id="titleInput"
							aria-describedby="titleHelp"
							placeholder="Nộp deadline web nc..."
							value={this.state.title}
						/>
						<small id="titleHelp" className="form-text text-muted">
							Enter your task name...
						</small>
					</div>
					<div className="form-group ml-5 mr-5">
						<label htmlFor="titleContent" style={{ marginBottom: '3px' }}>
							Content
						</label>
						<textarea
							onChange={this.onChangeContent}
							type="text"
							className="form-control"
							id="titleContent"
							aria-describedby="titleHelp"
							placeholder="Làm todolist..."
							value={this.state.content}
						/>
					</div>
					<div style={{ textAlign: 'center' }}>
						<button
							className="btn btn-dark"
							style={{ width: '100px' }}
							onClick={() => {
								this.setState({
									title: '',
									content: ''
								});
								this.props.addTaskToList(this.state.title, this.state.content);
							}}
						>
							Create
						</button>
					</div>
				</div>
				<p style={{ position: 'fixed', bottom: '0px', right: '0px', marginRight: '30px' }}>
					Bản quyền thuộc về nhóm 16 (thienho,thanhdat,ngochien)
				</p>
			</div>
		);
	}
}
