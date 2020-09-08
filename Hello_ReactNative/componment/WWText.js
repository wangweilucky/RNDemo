import React, { Component } from 'react';
import { View, Text, StatusBarStyle } from 'react-native';

export default class WWText extends Component {

    constructor() {
        super();

        this.state = {
            name: "react native",
            subtitle: 'wangdaji hellow',
        }
    }

    render() {
        const { name, subtitle } = this.state
        return {
            // <View>{subtitle}</View>
    }
}
}
