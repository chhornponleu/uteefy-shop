import { ColorSchemeName, Platform, StyleProp, StyleSheet, useColorScheme, useWindowDimensions } from "react-native";
import { useDeviceQuery } from "./useDeviceQuery";


export { createStyleHook };
/**
 * Example: 
 * @description
 * ```jsx
 * const useStyle = createStyleHook(() => ({
 *     title: {
 *         color: 'black',
 *         dark: {
 *             color: 'white'
 *         },
 *     },
 *     container: {
 *         backgroundColor: 'white',
 *         dark: {
 *             backgroundColor: 'black'
 *         },
 *     }
 * }));
 * 
 * function App() {
 *      const { styles, theme } = useStyle();
 *     return (
 *          <View style={styles.container}>
 *              <Text style={styles.title}>Hello world</Text>
 *          </View>
 *     );
 * }
 * 
 * ```
 */
type CallbackParams = {
    width: number,
    height: number
    theme: ColorSchemeName,
}
function createStyleHook<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
    callabck: ({ height, theme, width }: CallbackParams) => T
) {
    return function useStyleHook() {

        const theme = useColorScheme();
        const { width, height } = useWindowDimensions();

        let styles = callabck({
            theme,
            height,
            width,
        });

        return {
            styles: styles as T,
            theme, width, height,
        };
    }
}