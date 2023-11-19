
import { View } from "react-native";
import { useAuthLoginWithEmail } from "../../context/auth-context";
import { Text } from "../../components/typo";


const useLoginScreenViewController = () => {

}

export default function AppIndex() {

    const contr = useLoginScreenViewController();

    return (
        <View>
            <Text>Hello world!</Text>
        </View>
    )

}
