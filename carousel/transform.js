export function topLeftTransformStyle(index,animatedValue, props) {
    const { itemWidth, sliderWidth } = props
    
    let style = {}
    style['transform'] = [
        {
            'translateY': animatedValue.interpolate({
                inputRange: [-8, -4, 0, 4, 8],
                outputRange: [-10, -5, 0, -5, -10],
                extrapolate: 'clamp'
            })
        },
        {
            'rotate': animatedValue.interpolate({
                inputRange: [-8, -4, 0, 4, 8],
                outputRange: ['-10deg', '-5deg', '0deg', '5deg', '10deg'],
                extrapolate: 'clamp'
            })
        },
        {
            'translateX': animatedValue.interpolate({
                inputRange: [-8, -4, 0, 4, 8],
                outputRange: [60, 40, 0, -40, -60],
                extrapolate: 'clamp'
            })
        },
    ]

    return style
}
