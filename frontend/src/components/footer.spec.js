jest.unmock('./footer.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Footer from './footer.jsx';


describe('footer search bar', () => {

  it('has an input box and a button', () => {
    const rendered = TestUtils.renderIntoDocument(<Footer />);
    const inputBox = TestUtils.findRenderedDOMComponentWithClass(rendered, 'search');
    const searchBtn = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'button');
    expect(searchBtn.length).toEqual(1);
    expect(inputBox.placeholder).toEqual("search for student...");
  });

});
