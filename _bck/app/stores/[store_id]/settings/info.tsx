import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import { Stack } from "expo-router";
import React from 'react'
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, Card, CardContent, CardHeader } from "../../../../../components/containers";
import { Text } from "../../../../../components/typo";
import { colors } from "../../../../../commons/colors";

type Props = {};
const pencilIcon = (
    <SimpleLineIcons name="pencil" size={16} color={colors.red['600']} style={{ marginRight: 16 }} />
)

function Header(props: { title: string, onEditPress?: () => void }) {
    return (
        <Box row m={16} mt={32} justify={"space-between"}>
            <Text font={{ size: 16, weight: 'bold' }}>{props.title}</Text>
            <TouchableOpacity onPress={props.onEditPress}>
                {pencilIcon}
            </TouchableOpacity>
        </Box>
    )
}

function Field(props: { title: string; }) {
    return (
        <Text font={{}} color={colors.gray[500]} mb={8}>{props.title}</Text>
    )
}

function Value(props: { title: string; }) {
    return (
        <Text font={{ size: 16, }}>{props.title}</Text>
    )
}




const store = {
    name: faker.company.name(),
    desctiption: faker.lorem.sentence(10),
    currency: { symbol: faker.finance.currencySymbol(), code: faker.finance.currencyCode() },
    contact: {
        email: faker.internet.email(),
        phone: faker.phone.number(),

    },
    location: {
        country: 'Cambodia',
        city: 'Phnom Penh',
        postal_code: '',// faker.address.zipCodeByState('??'),
        address: '',// faker.address.streetAddress(),
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
    }
}

export default function Info({ }: Props) {

    return (
        <Box flex >
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ paddingBottom: 32, paddingTop: 16 }}>

                <Card>
                    <CardHeader
                        title="Store details"
                        right={pencilIcon}
                    />
                    <CardContent bordered gap={20}>
                        <Box>
                            <Field title="Store Name" />
                            <Value title={store.name} />
                        </Box>
                        <Box>
                            <Field title="Description" />
                            <Value title={store.desctiption} />
                        </Box>
                    </CardContent>
                </Card>


                <Card>
                    <CardHeader title="Languages" right={pencilIcon} />
                    <CardContent bordered gap={16}>
                        <Value title="English" />
                        <Value title="Khmer" />
                    </CardContent>
                </Card>


                <Card>
                    <CardHeader title="Contact" />
                    <CardContent bordered gap={16}>
                        <Box>
                            <Field title="Phone" />
                            <Value title={store.contact.phone} />
                        </Box>
                        <Box>
                            <Field title="Email" />
                            <Value title={store.contact.email} />
                        </Box>
                    </CardContent>
                </Card>


                <Card>
                    <CardHeader title="Location" right={pencilIcon} />
                    <CardContent bordered gap={16}>
                        <Box>
                            <Field title="Country" />
                            <Value title={store.location.country} />
                        </Box>
                        <Box>
                            <Field title="City" />
                            <Value title={store.location.city} />
                        </Box>
                        <Box>
                            <Field title="Postal Code" />
                            <Value title={store.location.postal_code} />
                        </Box>
                        <Box>
                            <Field title="Address" />
                            <Value title={store.location.address} />
                        </Box>
                        <Box row>
                            <Box flex>
                                <Field title="Latitude" />
                                <Value title={store.location.latitude} />
                            </Box>
                            <Box flex>
                                <Field title="Longitude" />
                                <Value title={store.location.longitude} />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

            </ScrollView>
        </Box>
    )
}