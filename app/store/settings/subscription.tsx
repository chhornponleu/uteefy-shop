import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from 'react';
import { ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../commons/colors";
import { Text } from "../../../components/typo";
import { Box, Card, CardContent, CardHeader } from "../../../components/containers";

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


export default function Billings({ }: Props) {

    const insets = useSafeAreaInsets();

    return (
        <Box flex>
            <Stack.Screen options={{ title: 'Subscription' }} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ paddingBottom: 32 }}>
                <Card>
                    <CardHeader title="Your current plan" />
                    <CardContent bordered>
                        <TouchableOpacity>
                            <Box flex={{ gap: 8 }}>
                                <Value title="Free plan" />
                                <Field title="Maximum 20 items, 1000 views/month, 1 user (owners)" />
                            </Box>
                        </TouchableOpacity>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader title="Upgrade plan" subTitle="Remove ads, and extend usage your limits" />
                    <Box flex={{ gap: 8 }}>
                        <TouchableOpacity>
                            <CardContent bordered>
                                <Box row flex={{ items: "center" }}>
                                    <Box flex={{ flex: 1, gap: 8 }}>
                                        <Value title="Basic" />
                                        <Field title="Maximum 50 items, 3000 views/month, 3 users (Admin, User)" />
                                        <Field title="$1.99 per additional user" />
                                        <Value title="$4.99 / month" />
                                    </Box>
                                    <Ionicons name="arrow-forward" />
                                </Box>
                            </CardContent>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <CardContent bordered>
                                <Box row flex={{ items: "center" }}>
                                    <Box flex={{ flex: 1, gap: 8 }}>
                                        <Value title="Mature" />
                                        <Field title="Maximum 100 items, 5000 views/month" />
                                        <Field title="$2.49 per additional user, up to 10 more" />
                                        <Value title="$9.99 / month" />
                                    </Box>
                                    <Ionicons name="arrow-forward" />
                                </Box>
                            </CardContent>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <CardContent bordered>
                                <Box row flex={{ items: "center" }}>
                                    <Box flex={{ flex: 1, gap: 8 }}>
                                        <Value title="Mature" />
                                        <Field title="Maximum 100 items, 5000 views/month" />
                                        <Field title="$3.49 per additional user, up to 30 more" />
                                        <Value title="$9.99 / month" />
                                    </Box>
                                    <Ionicons name="arrow-forward" />
                                </Box>
                            </CardContent>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <CardContent bordered>
                                <Box row flex={{ items: "center" }}>
                                    <Box flex={{ flex: 1, gap: 8 }}>
                                        <Value title="Enterprise Cloud" />
                                        <Field title="Everything unlimited" />
                                        <Value title="Contact us" />
                                    </Box>
                                    <Ionicons name="arrow-forward" />
                                </Box>
                            </CardContent>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <CardContent bordered>
                                <Box row flex={{ items: "center" }}>
                                    <Box flex={{ flex: 1, gap: 8 }}>
                                        <Value title="Enterprise on Premise" />
                                        <Field title="Everything unlimited" />
                                        <Value title="Contact us" />
                                    </Box>
                                    <Ionicons name="arrow-forward" />
                                </Box>
                            </CardContent>
                        </TouchableOpacity>
                    </Box>
                </Card>


                {/* <Card>
                    <CardHeader title="Users" />
                    <CardContent bordered>
                        <Box row>
                            <Box flex={{ flex: 1, gap: 8 }}>
                                <Value title="Adam" />
                                <Field title="Role: Owner" />
                            </Box>
                            <Box>
                                <Text>$4.99</Text>
                                <Text>x2</Text>
                                <Text font={{ weight: 'bold', size: 16 }}>${4.99 * 2}</Text>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent bordered>
                        <Box row>
                            <Box flex={{ flex: 1, gap: 8 }}>
                                <Value title="Adam" />
                                <Field title="Role: Owner" />
                            </Box>
                            <Box>
                                <Text>$4.99</Text>
                                <Text>x2</Text>
                                <Text font={{ weight: 'bold', size: 16 }}>${4.99 * 2}</Text>
                            </Box>
                        </Box>
                    </CardContent>
                </Card> */}

            </ScrollView>

        </Box>
    )
}