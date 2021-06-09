import React from 'react'
import {Segment, Header, Button, Icon, Container} from 'semantic-ui-react'

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Segment placeholder>
                    <Header icon>
                    <Icon name='search' />
                    Do you want to search for job postings?
                    </Header>
                    <Segment.Inline>
                    <Button primary>Search</Button>
                    <Button negative>Register</Button>
                    </Segment.Inline>
                </Segment>
            </Container>
        </div>
    )
}
