import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe('React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});