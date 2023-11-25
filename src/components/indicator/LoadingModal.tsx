import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
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
            <Box bg={colors.white}
                row={horizontal} center
                py={16} px={horizontal ? 32 : 16}
                minW={110} minH={horizontal ? 90 : 110}
                radius={16} columnGap={16} rowGap={16}
            >
                <ActivityIndicator animating size={size} />
                {text ? (
                    <Text size={12} numberOfLines={2}>{text}</Text>
                ) : null}
            </Box>
        </ReactNativeModal>
    )
}