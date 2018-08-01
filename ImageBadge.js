import React, { PureComponent } from 'react'

import { ImageBackground, Text, View } from 'react-native'

const defaultBadgeContainerStyle = {
  alignItems: 'center',
  height: 20,
  justifyContent: 'center',
  width: 40,
}

const defaultBadgeStyle = {
  color: 'white',
}

class ImageBadge extends PureComponent {
  constructor(props, context) {
    super(props, context)

    this.renderContent = this.renderContent.bind(this)
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderContent() {
    const { imageSrc, text, styles } = this.props
    const { badgeContainerStyle, badgeStyle } = styles

    const textStyle = [defaultBadgeStyle, badgeStyle]
    const content = <Text style={textStyle}>{text}</Text>

    const containerStyle = [defaultBadgeContainerStyle, badgeContainerStyle]
    return (
      <ImageBackground source={imageSrc} style={containerStyle}>
        {content}
      </ImageBackground>
    )
  }

  renderChildren() {
    const { children } = this.props

    if (!children) {
      return null
    }

    return children
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {this.renderChildren()}
        {this.renderContent()}
      </View>
    )
  }
}

export default ImageBadge
