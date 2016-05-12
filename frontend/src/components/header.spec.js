/* eslint-env jest */
jest.unmock('./header');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Header from './header';

  
describe('header', () => {

  it('has "math" in the title', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Header />
    );
    const header = ReactDOM.findDOMNode(rendered);
    expect(header.textContent).toEqual('Hello');
  });

});
