/**
 * Created by CHEN on 4/14/2017.
 */
import React 	from 'react'
import List 	from 'material-ui/List/List'
import Message 	from './message'

let  r = 0;

const MessageList = (props) => {

	const messages = props.messages.map((message) => {
		var ul = (<Message key={u} message={message} row={r}/>)
		r++
		return ul
	})

	return (
		<List>
			{messages}
		</List>
	)
}
export default MessageList
