import React from 'react'
import { Box, Card, CardContent } from "../../components/containers";
import { Text } from "../../components/typo";
import { TextInput, TouchableOpacity, useWindowDimensions } from "react-native";
import { colors } from "../../commons/colors";
import LoadingModal from "../../components/indicator/LoadingModal";
import { useStoreCreate } from "../../data/store";
import { useRouter } from "expo-router";

type Props = {};
export default function StoreCreatePage({ }: Props) {
    const router = useRouter()
    const { width: w } = useWindowDimensions();
    let maxW = Math.min(420, w - 32)

    const [name, setName] = React.useState('')
    const [desc, setDesc] = React.useState('')

    const storeCeateApi = useStoreCreate()

    function handleSubmit() {
        if (!name.trim()) {
            alert('Please enter store name');
            return
        };


        storeCeateApi.mutateAsync({
            name,
            currency: {
                code: 'USD',
                symbol: '$',
                name: 'US Dollar',
            },
            about: desc,
        }).then(() => {
            alert('Create store success')
            router.back()
        }).catch(err => {
            alert('Create store failed')
        })
    }

    return (
        <Box flex items="center" >
            <Box width={maxW} rowGap={16} py={16}>
                <Box
                    center radius={16} width={90} height={90} bg={colors.gray[100]}
                >
                    <Text>LOGO</Text>
                </Box>
                <Card p={0}>
                    <CardContent bordered rowGap={8}>
                        <Text>Store name</Text>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Store name"
                            style={{ paddingHorizontal: 16, height: 50, borderWidth: 1, borderRadius: 8, borderColor: colors.gray[200] }}
                        />
                        <Text>Description</Text>
                        <TextInput
                            value={desc}
                            onChangeText={setDesc}
                            placeholder="About store"
                            numberOfLines={4}
                            multiline
                            verticalAlign="top"
                            style={{
                                paddingTop: 16,
                                paddingHorizontal: 16, minHeight: 80, borderWidth: 1, borderRadius: 8, borderColor: colors.gray[200]
                            }}
                        />
                    </CardContent>
                </Card>
                <Card p={0}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Box p={16} bg={colors.gray[100]}
                            border={{ width: 1, radius: 12, color: colors.gray[400] }}>
                            <Text align="center">Create now</Text>
                        </Box>
                    </TouchableOpacity>
                </Card>
            </Box>
            <LoadingModal visible={storeCeateApi.isLoading} />
        </Box>
    )
}