import { Ionicons } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import { Stack } from "expo-router";
import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../../../../commons/colors";
import { Box, Card, CardContent, CardHeader } from "../../../../components/containers";
import { Text } from "../../../../components/typo";

type Props = {};


const fakeUsers = [
    { id: 1, name: faker.person.fullName(), phone: faker.phone.number(), email: faker.internet.email(), role: "Admin" }
]

export default function Users({ }: Props) {

    const [tmpValue, setTmpValue] = useState();
    const [users, setUsres] = useState([]);

    return (
        <Box flex>
            <Stack.Screen options={{
                title: 'Users',
                headerRight: ({ tintColor }) => (
                    <TouchableOpacity onPress={() => setTmpValue({} as any)}>
                        <Ionicons name="add" size={26} color={tintColor} />
                    </TouchableOpacity>
                )
            }} />
            <Card>
                <CardHeader title="Roles" />
                <CardContent bordered>
                    <Text>Admin</Text>
                </CardContent>
            </Card>
            <Card>
                <CardHeader
                    title="All users"
                    rightIcons={(
                        <TouchableOpacity onPress={() => setTmpValue({} as any)}>
                            <Ionicons name="add" size={26} />
                        </TouchableOpacity>
                    )}
                />
                <CardContent bordered>
                    <FlatList
                        data={users}
                        ListEmptyComponent={() => (
                            <Box p={32} center>
                                <Text color={colors.yellow[800]} mb={16}>No users has been added</Text>
                                <TouchableOpacity onPress={() => setUsres(fakeUsers)}>
                                    <Box
                                        px={32} py={8}
                                        border={{ width: 1, radius: 8, color: colors.blue[400] }}>
                                        <Text color={colors.blue[800]}>Add user</Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        )
                        }
                        renderItem={({ item }) => {
                            return (
                                <Box row p={16} flex={{ justify: "space-between" }}
                                    border={{ width: 1, radius: 8, color: colors.gray[400] }}>
                                    <Box>
                                        <Text>{item.name}</Text>
                                        <Text color={colors.gray[400]}>{item.phone}</Text>
                                        <Text color={colors.gray[400]}>{item.email}</Text>
                                    </Box>
                                    <Text color={colors.blue[800]}>{item.role}</Text>
                                </Box>
                            )
                        }}
                    />
                </CardContent >
            </Card >
        </Box >
    )
}