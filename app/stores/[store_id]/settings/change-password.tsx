import { Stack } from "expo-router";
import { Switch, TextInput } from "react-native-gesture-handler";
import { Box, Card, CardContent, CardHeader } from "../../../../components/containers";
import Page from "../../../../components/containers/Page";
import { Text } from "../../../../components/typo";
import { colors } from "../../../../commons/colors";
import { useTheme } from '@react-navigation/native'
import { TouchableOpacity } from "react-native";

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

function ChangePassword() {
    const theme = useTheme();
    return (
        <Page>
            <Stack.Screen options={{ title: 'Set Password' }} />
            <Card>
                {/* <CardHeader title="Change" /> */}
                <CardContent bordered flex={{ gap: 16 }} mb={32}>
                    {/* TODO: old password is required unless user haven't set password */}
                    <Box>
                        <Field title="Old password" />
                        <TextInput
                            placeholder="Old password"
                            style={{ padding: 12, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 8 }}
                        />
                        <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 8 }}>
                            {/* TODO: show only after use made wrong attempt */}
                            <Text color={colors.blue[400]}>Forgot old password?</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box>
                        <Field title="New password" />
                        <TextInput
                            placeholder="New password"
                            style={{ padding: 12, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 8 }}
                        />
                    </Box>
                    <Box>
                        <Field title="Confirm New password" />
                        <TextInput
                            placeholder="Confirm New password"
                            style={{ padding: 12, borderWidth: 1, borderColor: theme.colors.border, borderRadius: 8 }}
                        />
                    </Box>

                </CardContent>
                <TouchableOpacity>
                    <Box bg={colors.black} p={16} border={{ radius: 8 }}>
                        <Text align="center" color={colors.white} >Set password now</Text>
                    </Box>
                </TouchableOpacity>
            </Card>

        </Page>
    )
}
export default ChangePassword;
