'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Foo from '../foo.jsx'

describe('foo', () => {
	let renderer;

	describe('full', () => {
		let fooObj, fooNode;

		beforeEach(() => {
			fooObj = ReactTestUtils.renderIntoDocument(
				 <Foo /> 
			);
			fooNode = ReactDOM.findDOMNode(fooObj);
		});

		it('a', () => {
			expect(fooNode.textContent).toBeTruthy();
		});
	});

	describe('full events.', () => {
		let fooObj, fooNode, mockFn;

		beforeEach(() => {
			mockFn = jest.fn();
			fooObj = ReactTestUtils.renderIntoDocument(
				 <Foo onClick={mockFn} /> 
			);
			fooNode = ReactDOM.findDOMNode(fooObj);
		});

		// so if the component like this, this test will pass.
		// base you are pasisng in the mock function.
		// <button onClick={this.props.onClick}>Click Me</button>
		it('button clicked', () => {
			let buttonTag = ReactTestUtils.findRenderedDOMComponentWithTag(fooObj, 'button');
      ReactTestUtils.Simulate.click(buttonTag);
      expect(mockFn).toBeCalled();
			//expect(fooNode.textContent).toBeTruthy();
		});
	});

	// describe('full events 2.', () => {
	// 	let fooObj, fooNode, mockFn;

	// 	beforeEach(() => {
	// 		mockFn = jest.fn();
	// 		fooObj = ReactTestUtils.renderIntoDocument(
	// 			 <Foo /> 
	// 		);
	// 		fooNode = ReactDOM.findDOMNode(fooObj);
	// 	});

	// 	it('button clicked', () => {
	// 		let buttonTag = ReactTestUtils.findRenderedDOMComponentWithTag(fooObj, 'button');
  //     ReactTestUtils.Simulate.click(buttonTag);
  //     expect(1).toEqual(1);
	// 		//expect(fooNode.textContent).toBeTruthy();
	// 	});
	// });

	describe('shallow', () => {
		let fooObj, fooNode;

		beforeEach(() => {
			fooObj = ReactTestUtils.renderIntoDocument(
				<Foo /> 
			);
			fooNode = ReactDOM.findDOMNode(fooObj);
		});

		it('a', () => {
			expect(fooNode.textContent).toContain("Hello React!");
		});
	});
});