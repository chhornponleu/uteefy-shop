import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonExample, { buttons } from "./button.example";
import { Button } from "./button";

describe('ButtonExample', () => {
    let getByTestId, getAllByTestId;

    beforeEach(() => {
        ({ getByTestId, getAllByTestId } = render(
            <>
                <Button testID="button" onPress={() => { }}>Test</Button>
            </>
        ));
    });

    it('should render', () => {
        expect(getByTestId('button')).toBeTruthy();
    });

    it('should render 1 buttons', () => {
        expect(getAllByTestId('button')).toHaveLength(1);
    });

});