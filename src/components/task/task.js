import React from 'react';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Task = (props) => {
	return (
		<div style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px' }}>
			<h4>{props.title}</h4>
			<p>{props.content}</p>
			<div style={{textAlign: 'right',paddingRight: '20px'}}><FontAwesomeIcon icon={faCheck} /></div>
            
			
		</div>
	);
};

export default Task;
