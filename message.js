/**
 * Created by CHEN on 4/14/2017.
 */
// export default User
import React from 'react'
import ReactDOM from 'react-dom'
import ListItem from 'material-ui/List/ListItem'
import Bubble from './bubble'
import Triangle from './triangle'
import styles from './index.scss'

var count = 0;
class Message extends React.Component {
	constructor() {
		super()
		this.state =
			{
				alignment: {}
			}
	}
	componentDidMount = () => {
		var userDOM = ReactDOM.findDOMNode(this)
		userDOM.scrollIntoView({block: "end", behavior: "smooth"})
		userDOM.blur()

		if(this.props.message.isOwnMessage === true)
			this.setState({alignment: styles.Lhs})
		else
			this.setState({alignment: styles.Rhs})

	}
	render() {
		return (
			<ListItem ref='message' style={{textAlign: 'left', marginBottom:'-30px'}} disabled={true}>
				<div className={this.state.alignment}>
					<Bubble message={this.props.message} row={this.props.row}/>
					<Triangle color={this.props.message.color}/>
				</div>
			</ListItem>
		)
	}
}
export default Message
