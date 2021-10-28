import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

it('Render Header', () => {
  const tree = renderer
    .create(<Router><Header /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
