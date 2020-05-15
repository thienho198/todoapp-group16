import React from 'react';
import InputArea from './components/inputArea/components/inputArea';
import ListArea from './components/listArea/listArea';
import classes from './App.module.css';

function App() {
	return (
		<div className={classes.Layout}>
			<ListArea />
			<InputArea />
		</div>
	);
}

export default App;
