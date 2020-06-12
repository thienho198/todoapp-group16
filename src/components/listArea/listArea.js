import React from 'react';
import Task from '../../components/task/task';
import classes from './listArea.module.css';

export default class ListArea extends React.Component {
	//#region constructor
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{ width: '75%' }}>
				<div style={{ marginTop: '20px', marginLeft: '10px' }}>
					<label htmlFor="filter" style={{ marginRight: '5px' }}>
						Filter:
					</label>
					<input
						className={classes.inputFilter}
						type="text"
						id="filter"
						style={{ border: 'none', borderBottom: '1px solid gray', paddingLeft: '5px' }}
						placeholder="search for"
						value={this.props.filterKey}
						onChange={this.props.changeFilterKey}
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
								{this.props.listTasks.map((item, index) => (
									<div key={index} className="col-md-3 pr-2 pl-2 mb-2">
										<Task
											title={item.title}
											content={item.content}
											onChangeCheckBox={() => this.props.changeCheck(index)}
											checked={item.checked}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
