import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from './buttons';

it('Render buttons', () => {
  const text = 'test';
  const calcObj = { string: 'test' };
  const onClick = jest.fn(() => {});
  const tree = renderer
    .create(<Buttons text={text} onClick={onClick} Obj={calcObj} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
