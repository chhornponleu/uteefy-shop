import { useMemo } from "react";
import { useWindowDimensions } from "react-native";


const minTablet = 768;
const minDesktop = 1024;
type Devices = 'phone' | 'tablet' | 'desktop';
export function useDeviceQuery() {
    const { width } = useWindowDimensions();

    const phone = useMemo(() => {
        return width < minTablet;
    }, [width < minTablet]);

    const tablet = useMemo(() => {
        return width >= minTablet && width < minDesktop;
    }, [width >= minTablet && width < minDesktop])

    const desktop = useMemo(() => {
        return width >= minDesktop;
    }, [width >= minDesktop])

    function select<T>(specifics: ({ [device in Devices]?: T } & { default: T })): T {
        if (!specifics) {
            return null;
        }
        if (phone) {
            return specifics.phone ?? specifics.default;
        }
        if (tablet) {
            return specifics.tablet ?? specifics.default;
        }
        if (desktop) {
            return specifics.desktop ?? specifics.default;
        }
        return specifics.default;
    }

    return {
        phone,
        tablet,
        desktop,
        select,
    }
}

// const {
//     phone,
//     desktop,
//     tablet,
// } = useDeviceQuery()