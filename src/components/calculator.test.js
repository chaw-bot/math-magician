import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('Render calculator', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
