import React, { Component } from 'react'
import {
    Animated,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'

import {  topLeftTransformStyle } from './transform'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)
const AnimatedView = Animated.createAnimatedComponent(View)
class Carousel extends Component {
    // static propTypes = {
    //     itemWidth: PropTypes.number, 
    //     itemHeight: PropTypes.number, 
    //     sliderWidth: PropTypes.number, 
    //     sliderHeight: PropTypes.number,
    //     data:PropTypes.array,
    //     renderItem:PropTypes.function,
    // }

    constructor(props) {
        super(props)
        this._setScrollHandler(props)
        this.values = [
            this._scrollPos.interpolate({
                inputRange:[0,1],
                outputRange:[0,1]
            }),
            this._scrollPos.interpolate({
                inputRange:[0,1],
                outputRange:[0,1]
            }),
            this._scrollPos.interpolate({
                inputRange:[0,1],
                outputRange:[0,1]
            }),
        ]
    }

    _setScrollHandler(props) {
        const scrollEventConfig = {
            listener: this._onScroll,
            useNativeDriver: true,
          }
        this._scrollPos = new Animated.Value(0);
        const argMapping = [{ nativeEvent: { contentOffset: { x: this._scrollPos } } }]
        this._onScrollHandler = Animated.event(
            argMapping,
            scrollEventConfig
          )
    }

    render() {
        const { itemWidth , sliderWidth } = this.props
        let itemLeft = (sliderWidth - itemWidth) / 2

        return (<View style={[Styles.contianerStyle, this.props.style || {},]}>
            <AnimatedScrollView
                style={Styles.scrollViewStyle}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={Styles.contentContainerStyle}
                scrollEventThrottle={1}
                horizontal={true}
                onScroll={this._onScrollHandler}
            >
                {
                    this.props.data.map((item,index)=>{
                        return this._renderItem(index,item)
                    })
                }
            </AnimatedScrollView>
        </View>)
    }

    _renderItem(index,item){
        const { itemWidth , sliderWidth ,renderItem } = this.props
        let itemLeft = (sliderWidth - itemWidth) / 2
        return(
            <AnimatedView style={{width:itemWidth , let:itemLeft}}>
                { renderItem(index,item) }
            </AnimatedView>
        )
    }

    _onScroll(event){
        console.log(`_onScroll : ${event.nativeEvent.contentOffset.x}`)
    }

}


const Styles = StyleSheet.create({
    contianerStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'orange',
    },
    scrollViewStyle: {
        backgroundColor: 'grey'
    },
    contentContainerStyle: {
    },
    cardStyle: {
        backgroundColor: 'blue',
    },
})


module.exports = Carousel