import React from 'react';
import Dashboard from './Dashboard';
import * as functions from './Dashboard';
import { render } from '@testing-library/react';

it('Renders the Dashboard component without crashing', () => {
    render(<Dashboard/>);
})

expect(5).toBe(5);



