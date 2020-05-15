import React from 'react';
import Task from '../../components/task/task';
import classes from './listArea.module.css';

export default class ListArea extends React.Component {
	render() {
		return (
			<div style={{ width: '75%' }}>
				<div style={{ marginTop: '20px', marginLeft: '10px' }}>
					<label for="filter" style={{ marginRight: '5px' }}>
						Filter:
					</label>
					<input
						className={classes.inputFilter}
						type="text"
						id="filter"
						style={{ border: 'none', borderBottom: '1px solid gray', paddingLeft: '5px' }}
						placeholder="search for"
					/>
				</div>
				<div>
					<p
						style={{
							marginTop: '10px',
							marginLeft: '10px',
							borderBottom: '1px solid gray',
							display: 'inline-block'
						}}
					>
						List task
					</p>
					<div style={{ paddingRight: '20px', paddingLeft: '10px' }}>
						<div className="container">
							<div className="row">
								<div className="col-md-3 pr-2 pl-2 mb-2">
									<Task title="Nộp deadline" content="Nộp trước 2 ngày đi" />
								</div>
								<div className="col-md-3 pr-2 pl-2 mb-2">
									<Task title="Nộp deadline" content="Nộp trước 2 ngày đi" />
								</div>
								<div className="col-md-3 pr-2 pl-2 mb-2">
									<Task title="Nộp deadline" content="Nộp trước 2 ngày đi" />
								</div>
								<div className="col-md-3 pr-2 pl-2 mb-2">
									<Task title="Nộp deadline" content="Nộp trước 2 ngày đi" />
								</div>
								<div className="col-md-3 pr-2 pl-2 mb-2">
									<Task title="Nộp deadline" content="Nộp trước 2 ngày đi" />
								</div>
								<div className="col-md-3 pr-2 pl-2 mb-2">
									<Task title="Nộp deadline" content="Nộp trước 2 ngày đi" />
								</div>
								<div className="col-md-3 pr-2 pl-2 mb-2">
									<Task title="Nộp deadline" content="Nộp trước 2 ngày đi" />
								</div>
								<div className="col-md-3 pr-2 pl-2 mb-2">
									<Task title="Nộp deadline" content="Nộp trước 2 ngày đi" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
