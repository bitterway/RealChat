/**
 * Created by CHEN on 3/28/2017.
 */
import React from 'react'
const Triangle = (props) => {
	return (
		<div
			style={{
				marginTop:'-5px',
				marginLeft:'5%'
			}} >
			<svg height="50" width="50" >
				<polygon points="0,0 20,5 0,20" fill={props.color}></polygon>
			</svg>
		</div>
	)
}
export default Triangle
