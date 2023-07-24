import { Slot } from "expo-router";
import { Box } from "../components/containers";

type Props = {};
export default function RootLayout({ }: Props) {
    return (
        <Slot />
    )
}