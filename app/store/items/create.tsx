import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from '@react-navigation/native';
import { Stack } from "expo-router";
import { KeyboardAvoidingView, Platform, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { colors } from "../../../commons/colors";
import { Button } from "../../../components/buttons";
import { Box, Card, CardContent, CardHeader } from "../../../components/containers";
import Page from "../../../components/containers/Page";
import Input from "../../../components/form/Input";
import { Text } from "../../../components/typo";
import { TextI18n } from "../../../components/typo/TextI18n";
import useNavigationBackConfirmation from "../../../hooks/useNavigationBackConfirmation";
import { useToggle } from "../../../hooks/useToggle";

type Props = {};


type DescriptionText = {
    type: 'text';
    content: string;
    size?: number;
};
type DescriptionImage = {
    type: 'image';
    uri: string;
    mime: string;
    width?: number;
    height?: number;
};
type MediaImage = {
    type: 'image';
    uri: string;
    mime: string;
    width: number;
    height: number;
};
type MediaVideo = {
    type: 'video';
    uri: string;
    mime: string;
    width: number;
    height: number;
    duration?: number;
};

type Media = MediaImage | MediaVideo;
type Description = DescriptionText | DescriptionImage;

type Inventory = {
    sku?: string;
    barcode?: string;
    quantity?: number;
    track: boolean;
}

type Variant = {
    name: string;
    description: string;
    price: number;
    quantity?: number;
    inventory?: Inventory;
    media?: Media[];
}

type Option = {
    name: string;
    description: string;
    variants: Variant[];
}

type DraftItemData = {
    title: string;
    description: Description[];
    media: Media[];
    price: number;
    quantity?: number;
    options: Option[]
}

interface DraftItemProps {
    data: DraftItemData;
    update(data: DraftItemData): void;
}

const useDraftItem = create(
    persist<DraftItemProps>(
        (set, get) => ({
            data: {
                title: 'Ice Capuchino',
                description: [
                    { type: 'text', content: 'This is a description', size: 16 },
                    { type: 'image', uri: 'https://picsum.photos/200/300', mime: 'image/jpeg', width: 200, height: 300 },
                ],
                media: [
                    { type: 'image', uri: 'https://picsum.photos/200/300', mime: 'image/jpeg', width: 200, height: 300 },
                    { type: 'image', uri: 'https://picsum.photos/200/300', mime: 'image/jpeg', width: 200, height: 300 },
                ],
                price: 0,
                quantity: 0,
                options: [
                    {
                        name: 'Size',
                        description: '',
                        price: 0,
                        quantity: 0,
                        variants: [
                            {
                                name: 'S',
                                description: '',
                                price: 0,
                                quantity: 0,
                                media: [
                                    { type: 'image', uri: 'https://picsum.photos/200/300', mime: 'image/jpeg', width: 200, height: 300 },
                                ]
                            },
                            {
                                name: 'M',
                                description: '',
                                price: 0,
                                quantity: 0,
                                media: [
                                    { type: 'image', uri: 'https://picsum.photos/200/300', mime: 'image/jpeg', width: 200, height: 300 },
                                ]
                            },
                            {
                                name: 'L',
                                description: '',
                                price: 0,
                                quantity: 0,
                                media: [
                                    { type: 'image', uri: 'https://picsum.photos/200/300', mime: 'image/jpeg', width: 200, height: 300 },
                                ]
                            },
                        ]
                    }
                ],
            },
            update: (data) => {
                set(prev => ({
                    ...prev,
                    data
                }))
            }
        }),
        {
            name: 'draft-new-item',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)

const variants = [
    {
        name: 'Red',
        description: '',
        required: true,
        choices: [
            {
                name: 'Size',
                description: 'small',
                min: 1,
                max: 1,
                options: [
                    {
                        name: 'S',
                        description: '',
                        price: 0,
                        quantity: 0,
                    },
                    {
                        name: 'M',
                        description: '',
                        price: 0,
                        quantity: 0,
                    },
                    {
                        name: 'L',
                        description: '',
                        price: 0,
                        quantity: 0,
                    },
                ]
            },
        ]
    },
]

export default function StoreItems({ }: Props) {
    useNavigationBackConfirmation({ enabled: false })

    const theme = useTheme()
    const form = useDraftItem();

    const [showInventoryDetail, toggleShowingInventory] = useToggle(true)

    return (
        <Page>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    // automaticallyAdjustKeyboardInsets
                    contentInsetAdjustmentBehavior="automatic"
                    contentContainerStyle={{ paddingBottom: 32 }}
                >
                    <Stack.Screen options={{
                        headerRight: ({ tintColor }) => (
                            <Pressable
                                onPress={() => {
                                    console.log('pressed')
                                }}
                                style={{ marginRight: 16 }}>
                                <TextI18n code="save" size={16} color={colors.gray[400]} />
                            </Pressable>
                        )
                    }} />
                    <Card>
                        <CardHeader title="" subTitle="Product title" />
                        <CardContent
                            border={{ radius: 8, style: 'dashed', width: 1, color: theme.colors.border }}
                        >
                            <TextInput
                                value={form.data.title || ''}
                                onChangeText={(text) => {
                                    form.data.title = text
                                    form.update(form.data)
                                }}
                                style={{ flex: 1, fontSize: 18, paddingHorizontal: 16, paddingBottom: 8 }}
                                placeholder="Product title"
                                placeholderTextColor={colors.gray['400']}
                                verticalAlign="middle"
                                multiline
                            />
                        </CardContent>
                        <CardHeader title="" subTitle="Description" />
                        <CardContent
                            border={{ radius: 8, style: 'dashed', width: 1, color: theme.colors.border }}
                        >
                            <TextInput
                                value={form.data.description?.[0]?.content || ''}
                                onChangeText={(text) => {
                                    form.data.description = [{ type: 'text', content: text }]
                                    form.update(form.data)
                                }}
                                style={{ flex: 1, fontSize: 18, paddingHorizontal: 16, paddingBottom: 8 }}
                                placeholder="More information about your product"
                                placeholderTextColor={colors.gray['400']}
                                verticalAlign="middle"
                                multiline
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader title="Media" />
                        <Box row columnGap={16}>
                            <CardContent
                                flex
                                center
                                height={100}
                                border={{ radius: 8, style: 'dashed', width: 1, color: theme.colors.border }}
                            >
                                <Pressable style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialIcons name="add-a-photo" size={24} color={theme.colors.text} />
                                    <Text mt={16} color={colors.blue['400']}>Capture</Text>
                                </Pressable>
                            </CardContent>
                            <CardContent
                                flex
                                center
                                height={100}
                                border={{ radius: 8, style: 'dashed', width: 1, color: theme.colors.border }}
                            >
                                <Pressable style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialIcons name="add-photo-alternate" size={24} color={theme.colors.text} />
                                    <Text mt={16} color={colors.blue['400']}>Choose </Text>
                                </Pressable>
                            </CardContent>
                        </Box>
                    </Card>

                    <Card>
                        <CardHeader
                            title="Inventory"
                            right={(
                                <Box row>
                                    <Pressable onPress={toggleShowingInventory}>
                                        <TextI18n code="more" color={colors.blue[400]} />
                                    </Pressable>
                                </Box>
                            )}
                        />
                        <CardContent
                            p={16}
                            border={{ radius: 8, style: 'dashed', width: 1, color: theme.colors.border }}
                        >
                            <Box row justify="space-between">
                                <TextI18n code="available" />
                                <Box row items="center">
                                    <Pressable>
                                        <AntDesign name="minus" size={22} color={theme.colors.text} />
                                    </Pressable>
                                    <Box minW={40}>
                                        <Text align="center">{form.quantity}</Text>
                                    </Box>
                                    <Pressable>
                                        <AntDesign name="plus" size={20} color={theme.colors.text} />
                                    </Pressable>
                                </Box>
                            </Box>
                            {showInventoryDetail && (
                                <Box mt={16}>
                                    <Box  >
                                        <Input
                                            placeholder="SKU (Stock Keeping Unit)"
                                        />
                                    </Box>
                                    <Box>
                                        <Input
                                            placeholder="Barcode (ISBN, UPC, GTIN, etc.)"
                                        />
                                    </Box>
                                </Box>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader
                            title="Options"
                            right={(
                                <Box row>
                                    <Pressable onPress={toggleShowingInventory}>
                                        <TextI18n code="more" color={colors.blue[400]} />
                                    </Pressable>
                                </Box>
                            )}
                        />
                        <CardContent
                            p={16}
                            border={{ radius: 8, style: 'dashed', width: 1, color: theme.colors.border }}
                        >
                            <Box rowGap={8}>
                                <Text>
                                    Add options to allow customers to choose variants of your product.
                                </Text>
                                <Button
                                    size="sm"
                                    radius="sm"
                                    alignSelf="center"
                                    variant="default"
                                >
                                    Add options
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>

                </ScrollView>
            </KeyboardAvoidingView>
        </Page>
    )
}