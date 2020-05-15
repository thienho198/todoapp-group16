import React from 'react';
import classes from '../style/inputArea.module.css';

export default class InputArea extends React.Component {
	render() {
		return (
			<div className={classes.inputAreaMain}>
				<div>
					<div className="form-group ml-5 mr-5 mb-2">
						<label for="titleInput" style={{ marginBottom: '3px' }}>
							Task title
						</label>
						<input
							type="text"
							className="form-control"
							id="titleInput"
							aria-describedby="titleHelp"
							placeholder="Nộp deadline web nc..."
						/>
						<small id="titleHelp" className="form-text text-muted">
							Enter your task name...
						</small>
					</div>
					<div className="form-group ml-5 mr-5">
						<label for="titleContent" style={{ marginBottom: '3px' }}>
							Content
						</label>
						<textarea
							type="text"
							className="form-control"
							id="titleContent"
							aria-describedby="titleHelp"
							placeholder="Làm todolist..."
						/>
					</div>
					<div style={{ textAlign: 'center' }}>
						<button className="btn btn-dark" style={{ width: '100px' }}>
							Create
						</button>
					</div>
				</div>
				<p style={{ position: 'fixed', bottom: '0px', right: '0px', marginRight: '30px' }}>
					Bản quyền thuộc về nhóm 16 (thienho,baochau,ngochien)
				</p>
			</div>
		);
	}
}
