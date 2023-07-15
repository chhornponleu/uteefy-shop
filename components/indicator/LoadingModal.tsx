import React from 'react'
import ReactNativeModal from "react-native-modal";
import { Box } from "../containers";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { colors } from "../../commons/colors";
import { Text } from "../typo";
type Props = {
    visible: boolean;
    size?: ActivityIndicatorProps['size'];
    text?: string;
    horizontal?: boolean;
};
export default function LoadingModal({ visible, horizontal = false, text = 'loading', size = 'small' }: Props) {
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
            <Box row={horizontal} center py={16} minW={90} minH={90} px={32} radius={16} bg={colors.white} columnGap={16} rowGap={8}>
                <ActivityIndicator animating size={size} />
                {text ? (
                    <Text>{text}</Text>
                ) : null}
            </Box>
        </ReactNativeModal>
    )
}