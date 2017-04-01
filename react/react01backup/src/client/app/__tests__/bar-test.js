'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Bar from '../bar.jsx'

describe('Bar', () => {
	let renderer;

	describe('full', () => {
		let barObj, barNodee;

		beforeEach(() => {
			barObj = ReactTestUtils.renderIntoDocument(
				 <Bar/> 
			);
			barNodee = ReactDOM.findDOMNode(barObj);
		});

		it('a', () => {
			expect(barNodee.textContent).toBeTruthy();
		});
	});

	describe('full events.', () => {
		let barObj, barNodee, mockFn;

		beforeEach(() => {
			mockFn = jest.fn();
			// mock the Bar comp before render.
			Bar.prototype.onButtonSubmit = mockFn();

			// render stuff.
			barObj = ReactTestUtils.renderIntoDocument(
				 <Bar onClick={mockFn} /> 
			);
			barNodee = ReactDOM.findDOMNode(barObj);
		});

		// so if the component like this, this test will pass.
		// base you are pasisng in the mock function.
		// <button onClick={this.props.onClick}>Click Me</button>
		it('button clicked', () => {
			let buttonTag = ReactTestUtils.findRenderedDOMComponentWithTag(barObj, 'button');
      ReactTestUtils.Simulate.click(buttonTag);
      expect(mockFn).toBeCalled();
			//expect(barNodee.textContent).toBeTruthy();
		});
	});

});