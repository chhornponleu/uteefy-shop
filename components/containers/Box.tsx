import { View, ViewProps, ViewStyle } from "react-native";

export { Box };

export type BoxProps = ViewProps & {
    shadow?: 'sm' | 'md' | 'lg'
    display?: 'none' | 'flex'

    row?: boolean
    center?: boolean

    opacity?: ViewStyle['opacity']
    w?: ViewStyle['width']
    width?: ViewStyle['width']
    minW?: ViewStyle['minWidth']
    maxW?: ViewStyle['maxWidth']
    h?: ViewStyle['height']
    height?: ViewStyle['height']
    minH?: ViewStyle['minHeight']
    maxH?: ViewStyle['maxHeight']

    p?: ViewStyle['padding']
    pt?: ViewStyle['padding']
    pb?: ViewStyle['padding']
    pl?: ViewStyle['padding']
    pr?: ViewStyle['padding']
    px?: ViewStyle['padding']
    py?: ViewStyle['padding']

    m?: ViewStyle['margin']
    mt?: ViewStyle['margin']
    mb?: ViewStyle['margin']
    ml?: ViewStyle['margin']
    mr?: ViewStyle['margin']
    mx?: ViewStyle['margin']
    my?: ViewStyle['margin']

    bg?: ViewStyle['backgroundColor']
    zIndex?: ViewStyle['zIndex']

    border?: Border,
    radius?: ViewStyle['borderRadius'],
    borderWidth?: ViewStyle['borderWidth'],
    borderColor?: ViewStyle['borderColor'],
    borderTop?: Omit<Border, 'style'>
    borderBottom?: Omit<Border, 'style'>,
    borderLeft?: Omit<Border, 'style'>,
    borderRight?: Omit<Border, 'style'>,
    borderX?: Omit<Border, 'style'>,
    borderY?: Omit<Border, 'style'>,

    position?: ViewStyle['position']
    insets?: {
        top?: ViewStyle['top'];
        left?: ViewStyle['top'];
        right?: ViewStyle['top'];
        bottom?: ViewStyle['top'];
        x?: ViewStyle['top'];
        y?: ViewStyle['top'];
    }
} & FlexProps;

type FlexProps = {
    flex?: number | boolean | FlexProps;
    direction?: ViewStyle['flexDirection'],
    wrap?: ViewStyle['flexWrap'],
    justify?: ViewStyle['justifyContent'],
    items?: ViewStyle['alignItems'],
    alignContent?: ViewStyle['alignContent'],
    grow?: ViewStyle['flexGrow'],
    shrink?: ViewStyle['flexShrink'],
    basis?: ViewStyle['flexBasis'],
    gap?: ViewStyle['gap'],
    rowGap?: ViewStyle['rowGap'],
    columnGap?: ViewStyle['columnGap'],
    self?: ViewStyle['alignSelf'],
}

type Border = {
    width?: ViewStyle['borderWidth'],
    color?: ViewStyle['borderColor'],
    style?: ViewStyle['borderStyle'],
    radius?: ViewStyle['borderRadius']
}
/**
 * The flattest props is more prioritized. 
 * Use style prop override
 * 
 * Example:
 * ```
 * // flex = 1
 *  <Box flex={1} flex={{flex:2}} /> 
 * 
 * // flex = 2
 * <Box flex={1} style={{ flex:2 }}/> 
 * 
 * ```
 */

function Box({
    shadow,
    row, center,
    display,

    opacity,
    w, width, minW, maxW,
    h, height, minH, maxH,

    p,
    pt,
    pb,
    pl,
    pr,
    px,
    py,

    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,

    bg,
    zIndex,

    border,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    borderX,
    borderY,
    borderColor,
    borderWidth,
    radius,

    flex,
    direction,
    wrap,
    justify,
    items,
    alignContent,
    grow,
    shrink,
    basis,
    gap,
    rowGap,
    columnGap,
    self,

    position,
    insets,

    style,
    ...props
}: BoxProps) {
    const s: ViewStyle = {};

    if (shadow) {
        // shadow
        console.warn('shadow is not implemented yet');
    }
    if (display != undefined) {
        s.display = display;
    }
    if (opacity != undefined) {
        s.opacity = opacity;
    }
    if (w != undefined) {
        s.width = w;
    }
    if (width != undefined) {
        s.width = width;
    }
    if (minW != undefined) {
        s.minWidth = minW;
    }
    if (maxW != undefined) {
        s.maxWidth = maxW;
    }
    if (h != undefined) {
        s.height = h;
    }
    if (height != undefined) {
        s.height = height;
    }
    if (minH != undefined) {
        s.minHeight = minH;
    }
    if (maxH != undefined) {
        s.maxHeight = maxH;
    }
    if (p != undefined) {
        s.padding = p;
    }
    if (pt != undefined) {
        s.paddingTop = pt;
    }
    if (pb != undefined) {
        s.paddingBottom = pb;
    }
    if (pl != undefined) {
        s.paddingLeft = pl;
    }
    if (pr != undefined) {
        s.paddingRight = pr;
    }
    if (px != undefined) {
        s.paddingHorizontal = px;
    }
    if (py != undefined) {
        s.paddingVertical = py;
    }
    if (m != undefined) {
        s.margin = m;
    }
    if (mt != undefined) {
        s.marginTop = mt;
    }
    if (mb != undefined) {
        s.marginBottom = mb;
    }
    if (ml != undefined) {
        s.marginLeft = ml;
    }
    if (mr != undefined) {
        s.marginRight = mr;
    }
    if (mx != undefined) {
        s.marginHorizontal = mx;
    }
    if (my != undefined) {
        s.marginVertical = my;
    }
    if (bg != undefined) {
        s.backgroundColor = bg;
    }


    /**
     * Border
     */
    if (border != undefined) {
        s.borderWidth = border.width;
        s.borderStyle = border.style;
        s.borderColor = border.color;
        s.borderRadius = border.radius;
    }
    if (radius != undefined) {
        s.borderRadius = radius;
    }
    if (borderColor != undefined) {
        s.borderColor = borderColor;
    }
    if (borderWidth != undefined) {
        s.borderWidth = borderWidth;
    }
    if (borderTop != undefined) {
        s.borderTopWidth = borderTop.width;
        s.borderTopColor = borderTop.color;
        s.borderTopLeftRadius = borderTop.radius;
        s.borderTopRightRadius = borderTop.radius;
    }
    if (borderBottom != undefined) {
        s.borderBottomWidth = borderBottom.width;
        s.borderBottomColor = borderBottom.color;
        s.borderBottomLeftRadius = borderBottom.radius;
        s.borderBottomRightRadius = borderBottom.radius;
    }
    if (borderLeft != undefined) {
        s.borderLeftWidth = borderLeft.width;
        s.borderLeftColor = borderLeft.color;
        s.borderTopLeftRadius = borderLeft.radius;
        s.borderBottomLeftRadius = borderLeft.radius;
    }
    if (borderRight != undefined) {
        s.borderRightWidth = borderRight.width;
        s.borderRightColor = borderRight.color;
        s.borderTopRightRadius = borderRight.radius;
        s.borderBottomRightRadius = borderRight.radius;
    }
    if (borderX != undefined) {
        s.borderLeftWidth = borderX.width;
        s.borderRightWidth = borderX.width;
        s.borderLeftColor = borderX.color;
        s.borderRightColor = borderX.color;
        s.borderTopLeftRadius = borderX.radius;
        s.borderBottomLeftRadius = borderX.radius;
        s.borderTopRightRadius = borderX.radius;
        s.borderBottomRightRadius = borderX.radius;
    }
    if (borderY != undefined) {
        s.borderTopWidth = borderY.width;
        s.borderBottomWidth = borderY.width;
        s.borderTopColor = borderY.color;
        s.borderBottomColor = borderY.color;
        s.borderTopLeftRadius = borderY.radius;
        s.borderBottomLeftRadius = borderY.radius;
        s.borderTopRightRadius = borderY.radius;
        s.borderBottomRightRadius = borderY.radius;
    }

    /**
     * Flex
     */
    if (flex != undefined) {
        if (typeof flex == 'number') {
            s.flex = flex;
        }
        else if (typeof flex === 'boolean') {
            s.flex = flex ? 1 : 0;
        }
        else if (typeof flex === 'object') {
            if (typeof flex.flex === 'boolean') {
                s.flex = flex.flex ? 1 : 0;
            }
            else if (typeof flex.flex == 'number') {
                s.flex = flex.flex;
            }
            s.flexDirection = flex.direction;
            s.flexWrap = flex.wrap;
            s.justifyContent = flex.justify;
            s.alignItems = flex.items;
            s.alignContent = flex.alignContent;
            s.flexGrow = flex.grow;
            s.flexShrink = flex.shrink;
            s.flexBasis = flex.basis;
            s.gap = flex.gap;
            s.rowGap = flex.rowGap;
            s.columnGap = flex.columnGap;
            s.alignSelf = flex.self;
        }
    }
    if (row != undefined) {
        s.flexDirection = row ? 'row' : 'column';
    }
    if (center != undefined) {
        s.justifyContent = center ? 'center' : 'flex-start';
        s.alignItems = center ? 'center' : 'flex-start';
    }
    if (direction != undefined) {
        s.flexDirection = direction;
    }
    if (wrap != undefined) {
        s.flexWrap = wrap;
    }
    if (justify != undefined) {
        s.justifyContent = justify;
    }
    if (items != undefined) {
        s.alignItems = items;
    }
    if (alignContent != undefined) {
        s.alignContent = alignContent;
    }
    if (grow != undefined) {
        s.flexGrow = grow;
    }
    if (shrink != undefined) {
        s.flexShrink = shrink;
    }
    if (basis != undefined) {
        s.flexBasis = basis;
    }
    if (gap != undefined) {
        s.gap = gap;
    }
    if (rowGap != undefined) {
        s.rowGap = rowGap;
    }
    if (columnGap != undefined) {
        s.columnGap = columnGap;
    }
    if (self != undefined) {
        s.alignSelf = self;
    }

    /**
     * Positions
     */
    if (zIndex != undefined) {
        s.zIndex = zIndex;
    }
    if (position != undefined) {
        s.position = position;
    }
    if (insets != undefined) {
        if (insets.x != undefined) {
            s.left = insets.x;
            s.right = insets.x;
        }
        if (insets.y != undefined) {
            s.top = insets.y;
            s.bottom = insets.y;
        }
        s.top = insets.top;
        s.bottom = insets.bottom;
        s.left = insets.left;
        s.right = insets.right;
    }

    return (
        <View {...props} style={[s, style]} />
    )

}
