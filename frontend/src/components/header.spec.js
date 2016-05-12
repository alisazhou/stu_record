/* eslint-env jest */
jest.unmock('./header.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Header from './header.jsx';

  
describe('header', () => {

  it('has "Math" in the title', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Header />
    );
    const header = ReactDOM.findDOMNode(rendered);
    expect(header.textContent).toEqual('Math');
  });

});
