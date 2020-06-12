import React from 'react';
import InputArea from './components/inputArea/components/inputArea';
import ListArea from './components/listArea/listArea';
import classes from './App.module.css';

class App extends React.Component {
	//#region constructor
	constructor(props) {
		super(props);
		this.state = {
			listTasks: [],
			filterKey: ''
		};
	}
	//#region functions
	addTaskToList(title, content) {
		const task = { title: title, content: content, checked: false };
		this.setState((prevState) => {
			const updateListTask = [ ...prevState.listTasks ];
			updateListTask.unshift(task);
			return {
				listTasks: updateListTask
			};
		});
	}
	changeFilterKey = (text) => {
		this.setState({
			filterKey: text.target.value
		});
	};
	changeCheck = (index) => {
		const updateListTask = [ ...this.state.listTasks ];
		const updateTask = { ...updateListTask[index] };

		updateTask.checked = !updateTask.checked;
		updateListTask[index] = updateTask;
		this.setState({ listTasks: updateListTask });
	};

	//#region render
	render() {
		console.log(this.state.listTasks);
		const listTasksRender =
			this.state.filterKey === ''
				? this.state.listTasks
				: this.state.listTasks.filter((item) => item.title === this.state.filterKey);
		return (
			<div className={classes.Layout}>
				<ListArea
					changeCheck={(index) => this.changeCheck(index)}
					listTasks={listTasksRender}
					changeFilterKey={(text) => {
						this.changeFilterKey(text);
					}}
					filterKey={this.state.filterKey}
				/>
				<InputArea
					addTaskToList={(title, content) => {
						this.addTaskToList(title, content);
					}}
				/>
			</div>
		);
	}
}

export default App;
