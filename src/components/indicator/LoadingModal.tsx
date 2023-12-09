import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import { colors } from "../../commons/colors";
import { Box } from "../containers";
import { Text } from "../typo";
type Props = {
    visible: boolean;
    size?: ActivityIndicatorProps['size'];
    text?: string;
    horizontal?: boolean;
};
export default function LoadingModal({
    visible,
    horizontal = false,
    text = 'loading...',
    size = 'small'
}: Props) {
    return (
        <ReactNativeModal
            isVisible={visible}
            onBackButtonPress={() => { }}
            onBackdropPress={() => { }}
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropOpacity={0.5}
            style={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <Box
                style={{ minHeight: 100, minWidth: 100, rowGap: 5, paddingBottom: text ? 12 : 0 }}
                className="bg-white place-items-center justify-center place-content-center rounded-xl"
            >
                <ActivityIndicator animating size={size} />
                {text ? (
                    <View className="absolute left-0 bottom-0 right-0 pb-4">
                        <Text className="text-center">{text}</Text>
                    </View>
                ) : null}
            </Box>
        </ReactNativeModal>
    )
}