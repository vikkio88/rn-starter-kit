import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
    Header,
    H3,
    Button,
    Title,
    Left,
    Body,
    Card,
    CardItem,
    Text,
    Container,
    Content,
    Row,
    Col,
    Icon
} from 'native-base';
import {Actions} from 'react-native-router-flux';

import {colors} from '../common';
import {Date} from '../dash';

import {advanceTime} from '../../store/actions';

class MainDashView extends Component {
    doStuff() {
    }

    render() {
        const {
            headerStyle,
            containerStyle,
            cardStyle,
            actionButtonStyle,
            bottomBar
        } = styles;
        return (
            <Container>
                <Header style={headerStyle} androidStatusBarColor={colors.lightGray}>
                    <Body>
                    <Title style={{color: 'black'}}>
                        Dashboard
                    </Title>
                    </Body>
                </Header>

                <Content style={containerStyle}>
                    <Card style={cardStyle}>
                        <Col>
                            <Text>Dash</Text>
                        </Col>
                    </Card>
                </Content>
                <Row style={bottomBar}>
                    <Col>
                        <Date date="07-07-2017"/>
                    </Col>
                    <Col/>
                    <Col>
                        <Button style={actionButtonStyle} onPress={() => this.doStuff()}>
                            <Text>Continue</Text>
                            <Icon name="skip-forward" style={{fontSize: 15}}/>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const styles = {
    headerStyle: {
        backgroundColor: colors.lightGray,
    },
    containerStyle: {
        padding: 5
    },
    cardStyle: {
        marginBottom: 20,
        padding: 5
    },
    actionButtonStyle: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 5
    },
    bottomBar: {
        backgroundColor: colors.lightGray,
        borderTopWidth: 1,
        borderColor: colors.softBorderColor,
        padding: 8,
        position: 'absolute',
        bottom: 0,
    }
};

const mapStateToProps = ({user}) => {
    return {
        user
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const MainDash = connect(mapStateToProps, mapDispatchToProps)(MainDashView);
export {MainDash}