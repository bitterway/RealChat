/**
 * Created by CHEN on 4/14/2017.
 */
import React from 'react'; // pulls Component object out of React library
import ChatIcon from 'material-ui/svg-icons/Action/feedback'
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
const TopBar = (props) => {
	const iconStyles = {
			height: 50,
			width: 50,
			marginTop: -10
		},
		onIconClicked = () => {
			props.viewDialog();
		}
	return (
		<Toolbar style={{backgroundColor: '#18FFFF', color: 'white', marginBottom:20, fontWeight:'bold'}}>
			<ToolbarTitle text='Chat'/>
			<IconButton tooltip="Chat Users"
									tooltipPosition="bottom-left"
									onClick={onIconClicked}
									iconStyle={iconStyles}
			>
				<ChatIcon style={iconStyles} color="white"/>
			</IconButton>
		</Toolbar>
	)
}
export default TopBar
