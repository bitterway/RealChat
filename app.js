/**
 * Created by CHEN on 3/22/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import ExerciseComponent from './exercise'
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
ReactDOM.render(
	<ExerciseComponent />, document.getElementById('app')
)
