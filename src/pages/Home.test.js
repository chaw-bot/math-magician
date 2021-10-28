import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('Render Home page', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});