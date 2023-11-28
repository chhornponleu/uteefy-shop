
// /tests for ./button.tsx

import { render } from '@testing-library/react-native';
import React from 'react';
import { Button } from "./button";

describe('Button', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(<Button testID="button">Button</Button>);
        expect(getByTestId('button')).toBeDefined();
    });
});
