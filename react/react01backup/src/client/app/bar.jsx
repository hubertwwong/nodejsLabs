import React from 'react';
//import {render} from 'react-dom';

export default class Foo extends React.Component {
	onButtonSubmit() {
    console.log('myOnButtonSubmit.....');
  };

  render() {
		return(
			<div>
    		<p>Hello React!</p>
				<form>
					<button onClick={this.onButtonSubmit}>Click Me</button>
					</form>
			</div>
		);
  }
}