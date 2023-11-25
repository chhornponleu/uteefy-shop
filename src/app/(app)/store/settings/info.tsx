import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from 'react'
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "../../../../components/typo";
import { colors } from "../../../../commons/colors";
import { Box, Card, CardContent, CardHeader } from "../../../../components/containers";

type Props = {};
const pencilIcon = (
    <SimpleLineIcons name="pencil" size={16} color={colors.red['600']} style={{ marginRight: 16 }} />
)


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
                            <Value title={"My First Store"} />
                        </Box>
                        <Box>
                            <Field title="Description" />
                            <Value title={"All kinds of foods"} />
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
                            <Value title={"099477664"} />
                        </Box>
                        <Box>
                            <Field title="Email" />
                            <Value title={"whoami@gmail.com"} />
                        </Box>
                    </CardContent>
                </Card>


                <Card>
                    <CardHeader title="Location" right={pencilIcon} />
                    <CardContent bordered gap={16}>
                        <Box>
                            <Field title="Country" />
                            <Value title={"Cambodia"} />
                        </Box>
                        <Box>
                            <Field title="City" />
                            <Value title={"Phnom Penh"} />
                        </Box>
                        <Box>
                            <Field title="Postal Code" />
                            <Value title={"120051"} />
                        </Box>
                        <Box>
                            <Field title="Address" />
                            <Value title={"No 124, St 12, PP"} />
                        </Box>
                        <Box row>
                            <Box flex>
                                <Field title="Latitude" />
                                <Value title={"122.22222"} />
                            </Box>
                            <Box flex>
                                <Field title="Longitude" />
                                <Value title={"122.22222"} />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

            </ScrollView>
        </Box>
    )
}