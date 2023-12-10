import { useMemo, useState } from "react"
import { Pressable, View } from "react-native"
import ReactNativeModal from "react-native-modal"
import { Text } from "../typo"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useLocale } from "../../context/AppProvider"
import { FlatList } from "../list/FlatList"
import { Ionicons } from "@expo/vector-icons"


export function useChangeLanuageModal() {
    const [visibile, setVisible] = useState(false)
    return {
        open: () => { setVisible(true) },
        close: () => { setVisible(false) },
        LanguageSettingModal: useMemo(() => {
            return (
                <Modal
                    visible={visibile}
                    onRequestClose={() => setVisible(false)}
                />
            )
        }, [visibile])
    }
}

type ModalProps = {
    visible: boolean;
    onRequestClose?: () => void;
}
function Modal({ visible, onRequestClose }: ModalProps) {
    const { locale, setLocale } = useLocale();
    const insets = useSafeAreaInsets()
    return (
        <ReactNativeModal
            isVisible={visible}
            useNativeDriver
            hideModalContentWhileAnimating
            onBackdropPress={onRequestClose}
            onBackButtonPress={onRequestClose}
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <View className="bg-white p-6 rounded-tl-3xl rounded-tr-3xl">
                <View className="container max-w-xl m-auto">
                    <Text className="text-xl font-bold text-gray-500 mb-10 mt-4">Choose your lanuage</Text>
                    <FlatList
                        data={[
                            { locale: 'ភាសាខ្មែរ', value: 'km' },
                            { locale: 'English', value: 'en' },
                        ]}
                        contentContainerStyle={{ paddingBottom: insets.bottom }}
                        ItemSeparatorComponent={() => <View className="h-px bg-gray-200 my-4" />}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => {
                                    setLocale(item.value as never);
                                    onRequestClose?.();
                                }}>
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-xl" style={{ lineHeight: 32 }}>{item.locale}</Text>
                                    <Ionicons name="caret-forward" color="lightgrey" />
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

            </View>
        </ReactNativeModal >
    )
}