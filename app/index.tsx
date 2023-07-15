import { Platform, ScrollView, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Path, Svg } from 'react-native-svg';
import { colors } from "../commons/colors";

import { Stack, useRootNavigation, useRouter, useSegments } from "expo-router";
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Box, Card } from "../components/containers";
import { Text } from "../components/typo";
import { createStyleHook } from "../hooks/createStyleHook";
import { useDeviceQuery } from "../hooks/useDeviceQuery";
import { useAuthStore } from "../modules/auth/useAuthStore";

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const useStyles = createStyleHook(({ height, width, theme }) => ({
    wrapper: {
        flex: 1,
    },
    button: {
        backgroundColor: colors.indigo[400],
        borderRadius: 8,
        padding: 16,
    }
}))

export default function Index() {
    const { styles } = useStyles();
    const insets = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();
    const s = useSegments();

    const router = useRouter();
    const navigation = useRootNavigation()

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })

    const authStore = useAuthStore();

    const headerTextStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            transform: [
                { scale: interpolate(scrollY.value, [0, 100], [1, 0.5], Extrapolate.CLAMP) },
            ]
        }
    }, [])


    function login() {
        router.push('login')
    }

    function loginWithGmail() {
        authStore.setToken('1234567890')
        if (Platform.OS === 'web') {
            router.push('/stores/12345')
            return;
        }
        router.replace('/stores/12345')
    }

    const { select } = useDeviceQuery()

    const style = select({
        phone: "phone",
        desktop: "desktop",
        tablet: "tablet",
        default: "default",
    })

    return (
        <View style={styles.wrapper}>
            <Stack.Screen options={{ headerShown: false }} />
            <Box
                flex={{ justify: 'center', items: 'center', rowGap: 16 }}
                bg={colors.indigo[200]}
                pt={insets.bottom + 100}
                px={16}
                py={8}
            >
                <Animated.View style={[headerTextStyle]}>
                    <Animated.Text style={[{ fontSize: 32, fontWeight: 'bold' }]}>E-Menu</Animated.Text>
                </Animated.View>
            </Box>

            <Box
                bg={colors.indigo[200]}
                flex={{ justify: 'center', items: 'center', rowGap: 16 }}
                py={32}
            >
                <Text size={16}>An open menu platform for locals!</Text>
            </Box>

            <Box bg={colors.white}>
                <Svg
                    width={width} height={30}>
                    <Path
                        fill={colors.indigo[200]}
                        d={`M0,0s${width / 2},${60},${width},0Z`}
                    />
                </Svg>
                <Card flex={{ gap: 8 }}>
                    <Text color={"red"} my={30} font={{ size: 16 * 1.5, weight: '600' }}>Login</Text>

                    <TouchableOpacity onPress={login} style={styles.button}>
                        <Text>Login with Phone </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={loginWithGmail} style={[styles.button, { backgroundColor: colors.red['500'] }]}>
                        <Box>
                            <Text color={colors.white}>Login with Google </Text>
                        </Box>
                    </TouchableOpacity>
                </Card>

            </Box>
        </View >
    )
}