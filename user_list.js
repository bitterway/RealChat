/**
 * Created by CHEN on 3/22/2017.
 */
import React 	from 'react'
import List 	from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import Person from 'material-ui/svg-icons/social/person'

let  u = 0;

class UserList extends React.Component
{
	constructor()
	{
		super()
		this.state =
			{
				userList: []
			}
	}

	componentDidMount()
	{
		var request = new Request('/users')
		fetch(request)
			.then(response => {
				if (response.ok) {
					return Promise.resolve(response.json())
				}
				else {
					return Promise.reject(new Error(response.statusText))
				}
			})
			.then(json => {
				let u = 0;
				let arr = json.map((user) => {
					var item = <ListItem key={u} primaryText={user.name} leftAvatar={<Avatar backgroundColor={user.color} icon={<Person style={{backgroundColor: user.color}}></Person>}/>}></ListItem>
					u++
					return item
				})
				this.setState({userList: arr})
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	render()
	{
		return	(
			<List>
				{this.state.userList}
			</List>
		)
	}

}
export default UserList
