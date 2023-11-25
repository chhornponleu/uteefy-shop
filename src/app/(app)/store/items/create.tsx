import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from '@react-navigation/native';
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { colors } from "../../../../commons/colors";
import { Button } from "../../../../components/buttons";
import { Box, Card, CardContent, CardHeader } from "../../../../components/containers";
import Page from "../../../../components/containers/Page";
import Input from "../../../../components/form/Input";
import { Text } from "../../../../components/typo";
import { TextI18n } from "../../../../components/typo/TextI18n";
import useNavigationBackConfirmation from "../../../../hooks/useNavigationBackConfirmation";
import { useToggle } from "../../../../hooks/useToggle";
import { DraftItemData } from "../../../../../types/item";
import { useI18nMany } from "../../../../i18n/useI18n";

type Props = {};

interface DraftItemProps {
    data: DraftItemData;
    update(data: DraftItemData): void;
}

const useDraftItem = create(
    persist<DraftItemProps>(
        (set, get) => ({
            data: {
                title: 'Ice Capuchino',
                description: 'This is a description',
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
        price: 10,
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

    const [showInventoryDetail, toggleShowingInventory] = useToggle(true);

    function handleSelectPicture() {
        launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.All,
            allowsEditing: true,
            videoMaxDuration: 60,
            quality: 0.8,
            base64: false,

        })
    }

    const trans = useI18nMany({
        'product': undefined,
        'product.title': {},
        'product.description': {},
    })

    return (
        <Page>
            <KeyboardAwareScrollView
                keyboardDismissMode="interactive"
                contentOffset={{ y: 10, x: 0 }}>

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
                    <CardHeader title={<TextI18n code="media" />} />
                    <Box row columnGap={16}>
                        <CardContent
                            center
                            height={100} width={100}
                            border={{ radius: 8, style: 'dashed', width: 1, color: theme.colors.border }}
                        >
                            <Pressable style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialIcons name="add-a-photo" size={24} color={theme.colors.text} />
                                <Text mt={16} color={colors.blue['400']}>Capture</Text>
                            </Pressable>
                        </CardContent>
                        <CardContent
                            center
                            height={100} width={100}
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
                    <CardHeader title={<TextI18n code="product" />} />
                    <Input
                        label={trans["product.title"]}
                        value={form.data.title || ''}
                        wrapperProps={{ border: { style: 'dashed' } }}
                        size="lg"
                        onChangeText={(text) => {
                            form.data.title = text
                            form.update(form.data)
                        }}
                    />
                    <Input
                        label={trans["product.description"]}
                        value={form.data.description || ''}
                        onChangeText={(text) => {
                            form.data.description = text
                            form.update(form.data)
                        }}
                        multiline
                        numberOfLines={3}
                        wrapperProps={{ border: { style: 'dashed' }, maxH: 120 }}
                        size="lg"
                    />
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
                                <Pressable
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                    onPress={() => {
                                        if (form.data.quantity > 0) {
                                            form.data.quantity--;
                                            form.update(form.data)
                                        }
                                    }}
                                >
                                    <AntDesign
                                        size={22}
                                        name="minus"
                                        color={theme.colors.text}
                                        style={{ opacity: form.data.quantity > 0 ? 1 : 0.3, margin: 4, }}
                                    />
                                </Pressable>
                                <Box minW={40}>
                                    <Text align="center">{form.data.quantity}</Text>
                                </Box>
                                <Pressable
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                    onPress={() => {
                                        form.data.quantity++;
                                        form.update(form.data)
                                    }}
                                >
                                    <AntDesign name="plus" size={20} style={{ margin: 4 }} color={theme.colors.text} />
                                </Pressable>
                            </Box>
                        </Box>
                        {showInventoryDetail && (
                            <Box mt={16}>
                                <Box>
                                    <Input placeholder="SKU (Stock Keeping Unit)" />
                                </Box>
                                <Box>
                                    <Input placeholder="Barcode (ISBN, UPC, GTIN, etc.)" />
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
                                <Pressable>
                                    <AntDesign name="plus" size={22} />
                                </Pressable>
                            </Box>
                        )}
                    />
                    <CardContent
                        p={16}
                        border={{ radius: 8, style: 'dashed', width: 1, color: theme.colors.border }}
                    >
                        {/* <Box rowGap={8}>
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
                        </Box> */}
                        <Box>
                            <Input
                                label="Name"
                            />
                            <Input
                                label="Description"
                            />
                            <Text>Choices</Text>
                            {[0, 2].map((i) => (
                                <Box key={i}>
                                    <Input
                                        label="Name"

                                    />
                                    <Box row ml={16} columnGap={16}>
                                        <Text>Selection:</Text>
                                        <Input
                                            label="Min"
                                            wrapperStyle={{ flex: 1, borderStyle: 'dotted', marginTop: 0 }}
                                        />
                                        <Input
                                            label="Max"
                                            wrapperStyle={{ flex: 1, borderStyle: 'dotted', marginTop: 0 }}
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>

            </KeyboardAwareScrollView>
        </Page>
    )
}