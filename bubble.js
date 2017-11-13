/**
 * Created by CHEN on 3/28/2017.
 */
import React from 'react'
import styles from './index.scss'
const Bubble = (props) => {
	return (
		<div className={styles.Bubble} style={{backgroundColor: props.message.color, color:'white'}}>
			<div style={{textAlign:'right', width:'100%'}}>
				<span style={{fontSize:'smaller', fontWeight:'bold', textAlign:'right', padding:'right'}}>At: {props.message.time}</span>
			</div>
			<br />
			<span style={{fontSize: 'smaller'}}>{props.message.sender} says:</span>
			<br />
			<span>{props.message.message}</span>
		</div>
	)
}
export default Bubble
