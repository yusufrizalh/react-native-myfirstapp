import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ImageApp extends Component {
    render() {
        let img = {
            uri: 'https://i.ibb.co/SBnPLW6/boy.png'
        };
        return (
            <Image source={img} />
        );
    }
}