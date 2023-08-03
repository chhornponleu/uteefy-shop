import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Alert } from "react-native";


type Props = {
    enabled?: boolean,
    messageTitle?: string,
    messageBody?: string,
    discardText?: string,
    keepEditingText?: string,
};
export default function useNavigationBackConfirmation({
    enabled = true,
    messageTitle = "Discard changes?",
    messageBody = "You have unsaved changes. Are you sure to discard them and leave the screen?",
    discardText = "Discard",
    keepEditingText = "Keep Editing",
}: Props) {
    const navigation = useNavigation();
    useEffect(() => {
        if (!enabled) return;
        function listener(e) {
            console.log(e);
            e.preventDefault();
            Alert.alert(
                messageTitle,
                messageBody,
                [
                    { text: discardText, style: "destructive", onPress: () => navigation.dispatch(e.data.action) },
                    { text: keepEditingText, onPress: () => { } },
                ]
            )
        }
        navigation.addListener('beforeRemove', listener);
        return () => {
            navigation.removeListener('beforeRemove', listener);
        }
    }, [enabled]);
    return {

    }
}