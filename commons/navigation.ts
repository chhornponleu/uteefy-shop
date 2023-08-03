import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors } from "./colors";


export const defaultStackOptions: NativeStackNavigationOptions = {
    contentStyle: {
        backgroundColor: colors.white,
    },
    headerShadowVisible: false,

}