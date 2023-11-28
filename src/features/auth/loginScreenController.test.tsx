//tests for ./loginScreenController.tsx

import { render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { useLoginScreenViewController } from "./loginScreenController";

describe('useLoginScreenViewController', () => {
    it('should render correctly', () => {
        const { result } = renderHook(() => useLoginScreenViewController());
        expect(result.current.state.loading).toBeFalsy();
    });
});
