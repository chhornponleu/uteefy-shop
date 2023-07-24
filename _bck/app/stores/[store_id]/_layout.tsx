
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, Tabs, useNavigation, useRouter, useSearchParams } from 'expo-router';
import { MotiView } from "moti";
import { ScrollView, Settings, TouchableOpacity, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../../../../components/containers";
import { Text } from "../../../../components/typo";
import { useWidth } from "../../../../hooks/useWidth";
import { colors } from "../../../../commons/colors";

import {
    useTheme,
} from "@react-navigation/native";
import { useStoreDetail } from "../../../../data/store";

type IconParams = { color?: string, focused?: boolean, size?: number }
const tabIcons = {
    home: ({ color, focused }: IconParams) => (
        <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 1000 }}
        >
            <MaterialCommunityIcons name="home-minus-outline" size={24} color={color} />
        </MotiView>
    ),
    orders: ({ color }: IconParams) => (
        <AntDesign name="profile" size={22} color={color} />
    ),
    items: ({ focused, color, size }: IconParams) => (
        <AntDesign name="tagso" size={28} color={color} />
    ),
    settings: ({ focused, color, size }: IconParams) => (
        <AntDesign name="setting" size={24} color={color} />
    )
}

export default function RootStoreLayout() {
    const params = useSearchParams();
    const navigation = useNavigation();
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const theme = useTheme()

    console.log('navigation', navigation.getState());


    const isDesktop = useWidth(1193);
    const isTablet = useWidth(768)
    const dim = useWindowDimensions()
    console.log(dim);


    const navigationState = navigation.getState();
    function isFocused(name: string) {
        const state = navigationState?.routes?.[navigationState?.index]?.state;
        let activeName: string;

        if (state?.index === undefined) {
            activeName = state?.routes?.[0]?.name
        }
        else {
            activeName = state?.routes?.[state?.index]?.name;
        }
        return name === activeName
    }

    const store = useStoreDetail(params.store_id);
    console.log({ store });


    return (
        <>
            <Stack.Screen options={{ headerShown: false, contentStyle: { backgroundColor: colors.white } }} />
            <Box row flex pl={insets.left} pr={insets.right}>
                {isTablet ? (
                    <Box height={"100%"} width={isDesktop ? 200 : undefined}
                        p={16} pt={16 + insets.top}
                        borderRight={{ width: 1, color: colors.gray[100] }}>
                        <Box row flex={{ items: "center", gap: 16, justify: isDesktop ? undefined : 'center' }}>
                            <Image source={{ uri: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico' }} style={{ width: 30, height: 30 }} />
                            {isDesktop ? (
                                <Text font={{ size: 16, weight: 'bold' }}>{store?.name}</Text>
                            ) : null}
                        </Box>
                        <Box flex>
                            <ScrollView contentContainerStyle={{ paddingTop: 32 }}>
                                {[
                                    {
                                        id: 1,
                                        title: 'Home',
                                        name: 'store',
                                        default: true,
                                        icon: tabIcons.home,
                                        href: '/stores/' + params.store_id + '/store'
                                    },
                                    {
                                        id: 2,
                                        title: 'Orders',
                                        name: 'orders',
                                        icon: tabIcons.orders,
                                        href: '/stores/' + params.store_id + '/orders'
                                    },
                                    {
                                        id: 3,
                                        title: 'Items',
                                        name: 'items',
                                        icon: tabIcons.items,
                                        href: '/stores/' + params.store_id + '/items'
                                    }
                                ].map(item => {
                                    return item;
                                }).map((item, index) => {
                                    const active = isFocused(item.name);
                                    const color = theme.colors.text
                                    return (
                                        <TouchableOpacity
                                            key={item.id}
                                            onPress={() => {
                                                console.log('item', item);
                                                router.push(item.href)
                                            }}
                                        >
                                            <Box
                                                key={index}
                                                direction={isDesktop ? 'row' : 'column'}
                                                columnGap={8}
                                                items="center"
                                                mb={8} py={8} px={16}
                                                bg={active ? colors.gray[100] : undefined}
                                                border={{ radius: 8 }}
                                            >
                                                <Box center width={30} height={30}>
                                                    {item.icon({ focused: active, })}
                                                </Box>
                                                {isTablet ? <Text size={14}>{item.title}</Text> : null}
                                            </Box>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </Box>
                        <Box pb={32}>
                            <TouchableOpacity
                                onPress={() => router.push('/stores/' + params.store_id + '/settings')}
                            >
                                <Box
                                    direction={isDesktop ? 'row' : 'column'}
                                    columnGap={8}
                                    items="center"
                                    mb={8} py={8} px={16}
                                    bg={isFocused('settings') ? colors.gray[100] : undefined}
                                    border={{ radius: 16 }}
                                >
                                    <Box center width={30} height={30}>
                                        {tabIcons.settings({ focused: isFocused('settings') })}
                                    </Box>
                                    <Text size={isTablet ? 14 : 16}>Settings</Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                ) : null}
                <Box flex>
                    <Tabs
                        {...((isTablet) ? { tabBar: () => null } : {})}
                        backBehavior="initialRoute"
                        initialRouteName="store"
                        sceneContainerStyle={{ backgroundColor: colors.white }}
                        screenOptions={(props) => ({
                            headerShown: false,
                            tabBarShowLabel: true,
                        })}>
                        <Tabs.Screen
                            name="store"
                            options={{
                                title: 'Home',
                                tabBarIcon: ({ focused, color, size }) => tabIcons.home({ focused, color })
                            }}
                        />
                        <Tabs.Screen name="orders"
                            options={{
                                title: 'Orders',
                                tabBarIcon: ({ focused, color, size }) => tabIcons.orders({ focused, color })
                            }}
                        />
                        <Tabs.Screen name="items"
                            options={{
                                title: 'Items',
                                tabBarIcon: tabIcons.items
                            }}
                        />
                        <Tabs.Screen name="settings"
                            options={{
                                title: 'Settings',
                                tabBarIcon: tabIcons.settings
                            }}
                        />
                    </Tabs>
                </Box >
            </Box >
        </>
    )
}