import React, { Component } from 'react';
import { Container, Content, ListItem, CheckBox, Text, Body } from 'react-native';
export class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <ListItem>
                        <CheckBox
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <Body>
                        <Text>Finish list Screen</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

export default Toggle;