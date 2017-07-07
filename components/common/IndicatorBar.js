import React from 'react';
import {View, Text} from 'react-native';
import {Row, Col} from 'native-base';
import {colors} from './styles';


const IndicatorBar = ({value}) => {
    const t = value / 100;
    const backgroundColor = `rgb(${255 * (1 - t)}, ${255 * t}, 0)`;
    return (
        <Row style={{borderWidth: 1, borderColor: colors.softBorderColor}}>
            <Col size={value}>
                <View style={{flex: 1, backgroundColor}}>
                    <Text>{` `}</Text>
                </View>
            </Col>
            <Col size={100 - value}/>
        </Row>
    );
};

export {IndicatorBar};