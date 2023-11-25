import { Box, BoxProps } from "./Box";

const Sizes = {
    sm: 480,
    md: 760,
    lg: 1200,
    xl: 1400,
}

type Props = BoxProps & {
    size?: keyof typeof Sizes;
};
export default function Content({
    size = 'md',
    style,
    ...props
}: Props) {

    return (
        <Box
            {...props}
            style={[
                { width: '100%', maxWidth: Sizes[size], alignSelf: 'center' },
                style
            ]}
        />
    )
}