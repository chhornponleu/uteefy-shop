import React from 'react';
import { View } from "react-native";
import renderer from 'react-test-renderer';
import { MockedProvider } from "@apollo/client/testing";

const mocks = []
const App = () => (
    <MockedProvider mocks={mocks} addTypename={false}>
        <View>App</View>
    </MockedProvider>
)

describe('<App />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});

// const mocks = []; // We'll fill this in next

// it("renders without error", async () => {
//     render(
//         <MockedProvider mocks={mocks} addTypename={false} >
//             {/* <Dog name="Buck" /> */}
//         </MockedProvider>
//     );
//     expect(await screen.findByText("Loading...")).toBeInTheDocument();
// });