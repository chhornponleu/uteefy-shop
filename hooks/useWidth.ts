import { useWindowDimensions } from "react-native";

export function useWidth(size) {
    if (typeof window === "undefined") {
        return true;
    }
    const { width } = useWindowDimensions();
    return width >= size;
}
