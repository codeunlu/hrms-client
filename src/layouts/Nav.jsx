import React from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'

export default function Nav() {
    return (
        <Container>
            <Menu>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button.Group>
                            <Button positive>Login</Button>
                            <Button.Or />
                            <Button negative>Register</Button>
                        </Button.Group>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
}
