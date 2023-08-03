import { Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native";
import {
    useTheme
} from "@react-navigation/native";


export { Text };

export type TextProps = RNTextProps & {
    m?: TextStyle['margin'],
    mt?: TextStyle['marginTop'],
    mb?: TextStyle['marginBottom'],
    ml?: TextStyle['marginLeft'],
    mr?: TextStyle['marginRight'],
    mx?: TextStyle['marginHorizontal'],
    my?: TextStyle['marginHorizontal'],

    p?: TextStyle['padding'],
    pt?: TextStyle['paddingTop'],
    pb?: TextStyle['paddingBottom'],
    pl?: TextStyle['paddingLeft'],
    pr?: TextStyle['paddingRight'],
    px?: TextStyle['paddingHorizontal'],
    py?: TextStyle['paddingVertical'],

    font?: TextFontProps;
} & TextFontProps

type TextFontProps = {
    color?: TextStyle['color'],
    size?: TextStyle['fontSize'],
    family?: string,
    weight?: TextStyle['fontWeight'],
    fontStyle?: TextStyle['fontStyle'],
    variant?: TextStyle['fontVariant']
    align?: TextStyle['textAlign'],
    vAlign?: TextStyle['textAlignVertical'],
    alignSelf?: TextStyle['alignSelf']
}

/**
 * The flattest props is more prioritized. 
 * Use style prop override
 * 
 * Example:
 * ```
 * // fontSize = 12
 *  <Text size={12} font={{size: 14}}/> 
 * 
 * // fontSize = 14
 * <Box size={12} style={{ fontSize: 14 }}/> 
 * 
 * ```
 */

function Text({
    color,
    size,
    family,
    weight,
    fontStyle,
    variant,
    align,
    alignSelf,
    vAlign,

    m, mb, mt, ml, mr, mx, my,
    p, pb, pt, pl, pr, px, py,

    font,
    style,

    ...props
}: TextProps) {
    const theme = useTheme();
    const s: TextStyle = {}
    if (font != undefined) {
        s.color = font.color
        s.fontSize = font.size
        s.fontWeight = font.weight
        s.fontFamily = font.family
        s.fontStyle = font.fontStyle
        s.fontVariant = font.variant
        s.textAlign = font.align
        s.alignSelf = font.alignSelf
        s.textAlignVertical = font.vAlign
    }

    if (color != undefined) s.color = color
    if (size != undefined) s.fontSize = size
    if (weight !== undefined) s.fontWeight = weight
    if (family != undefined) s.fontFamily = family
    if (fontStyle != undefined) s.fontStyle = fontStyle
    if (variant != undefined) s.fontVariant = variant
    if (align != undefined) s.textAlign = align
    if (alignSelf != undefined) s.alignSelf = alignSelf
    if (vAlign != undefined) s.textAlignVertical = vAlign

    if (m != undefined) s.margin = m
    if (mb != undefined) s.marginBottom = mb
    if (mt != undefined) s.marginTop = mt
    if (mr != undefined) s.marginRight = mr
    if (ml != undefined) s.marginLeft = ml
    if (mx != undefined) s.marginHorizontal = mx
    if (my != undefined) s.marginVertical = my

    if (p != undefined) s.padding = p
    if (pb != undefined) s.paddingBottom = pb
    if (pt != undefined) s.paddingTop = pt
    if (pr != undefined) s.paddingRight = pr
    if (pl != undefined) s.paddingLeft = ml
    if (px != undefined) s.paddingHorizontal = px
    if (py != undefined) s.paddingVertical = py

    if (!s.color) {
        s.color = theme.colors.text
    }

    return (
        <RNText  {...props} style={[s, style,]} />
    )
}
