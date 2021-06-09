import React from 'react'
import {Container, Grid, GridColumn, GridRow} from 'semantic-ui-react'
import Sidebar from './Sidebar'
import Section from './Section'

export default function Dashboard() {
    return (
        <Container>
            <Grid columns='equal'>
                <GridRow>
                    <GridColumn>
                        <Sidebar/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Section/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    )
}
