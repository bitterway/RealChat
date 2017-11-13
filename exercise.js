/**
 * Created by CHEN on 3/22/2017.
 */
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import UserList from './user_list'
import styles from './index.scss'
import Dialog from 'material-ui/Dialog'
import TopBar from './topbar'
import MessageList from './message_list'
import io from 'socket.io-client'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField/TextField'
var socket = io()

class ExerciseComponent extends React.Component {
	constructor() {
		super()
		this.state = {
			open: false,
			users: [],
			loggedOn: false,
			user: '',
			messages: [],
			message: '',
			logOnErr: '',
			typingMessage: ''
		}
		this.changeText = this.changeText.bind(this)
		this.signOn = this.signOn.bind(this)
	}

	handleOpenDialog = () => {
		this.setState({open: true});
	}
	handleCloseDialog = () => {
		this.setState({open: false});
	}

	componentDidMount() {
		socket.on('server message', (msgObject) => {
			console.log(this.state.user);
			msgObject.isOwnMessage = msgObject.sender === this.state.user;
			this.state.messages.push(msgObject);
			//Set the state to fire the notification event
			this.setState({messages: this.state.messages});
		})

		socket.on('typing', (data) =>{
			console.log("Someone is typing.");
			this.setState({typingMessage:data});
		})
	}

	signOn = () =>
	{
		var state = this;
		let name = this.state.user.trim();
		socket.emit('join', name, function(data){
			console.log("Got callback.");
			if(data === 0)
			{
				state.setState({loggedOn: true})
			}
			else
			{
				state.setState({logOnErr: data})
			}
		})
		this.setState({user: name});
		console.log('user trying to signin')
	}

	messageOmit = (e) =>
	{
		console.log(this.state.user)
		if(e.key === 'Enter' && this.state.message.length > 0)
		{
			socket.emit('chat message', this.state.message);
			this.setState({message: ''})
		}
	}

	changeText(e)
	{
		this.setState({user: e.target.value})
	}


	updateText = (e) =>
	{
		this.setState({message: e.target.value})
		if(this.state.message.length === 1)
			socket.emit('user typing')
	}


	render() {
		return (
			<MuiThemeProvider>
				<div>
					<TopBar viewDialog={this.handleOpenDialog}/>
					<Dialog title="" modal={false} open={this.state.open} onRequestClose={this.handleCloseDialog}>
						<h3><Card style={{marginTop: '5%', marginLeft: '10%', width: '80%'}}>
							<CardHeader>
								<div style={{textAlign: 'left', fontWeight: 'bold', fontcolor: 'blue'}}>
									Chat Users
								</div>
							</CardHeader>
							<CardText>
								<UserList/>
							</CardText>
						</Card></h3>
					</Dialog>
					{this.state.loggedOn === false &&
					<Card>
						<CardHeader/>
						<div style={{textAlign: 'center', fontWeight: 'bold'}}>
							Sign In
						</div>
						<CardText>
							<div style={{textAlign: 'center'}}>
								<TextField id="Sign On" onChange={this.changeText} placeholder='Chat Name' errorText={this.state.logOnErr}/><br/>
							</div>
							<div style={{textAlign: 'center', fontWeight: 'bold'}}>
								<FlatButton label="JOIN CHAT" primary={true} onTouchTap={this.signOn} disabled={this.state.user.length==0}/>
							</div>
						</CardText>
					</Card>
					}
					{this.state.loggedOn === true &&
					<Card>
						<CardHeader style={{textAlign: 'left', fontWeight: 'bold'}}>
							<div>
								Chat Case Study 2
							</div>
						</CardHeader>
						<CardText>
							<div>{this.state.typingMessage}</div>
							<div className={styles.messageList}>
								<MessageList messages={this.state.messages} />

							</div>
							<TextField onChange={this.updateText} hintText={'enter a message here'} value={this.state.message} onKeyPress={this.messageOmit}/>
						</CardText>
					</Card>
					}
				</div>
			</MuiThemeProvider>
		)
	}
}
export default ExerciseComponent
