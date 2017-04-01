import React from 'react';
//import {render} from 'react-dom';

export default class Foo extends React.Component {
	constructor() {
		super();
		console.log('> constructor');
	}

	// CALLED ON  MOUNT
	componentWillMount() {
		console.log('> componentWillMount');
	}

	componentDidMount() {
		console.log('> componentDidMount');
	}

	//
	componentWillReceiveProps() {
		console.log('> componentWillReceiveProps');
	}

	// events
	onButtonSubmit() {
    console.log('> myOnButtonSubmit.....');
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

/**
  https://facebook.github.io/react/docs/react-component.html
  
 
	Mounting
    constructor()
    componentWillMount()
    render()
    componentDidMount()

	Updating	  
    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    render()
    componentDidUpdate()

	Unmounting
		componentWillUnmount()

 */