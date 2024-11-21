import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

export default function EntryLine({ title, value = '0.00', isExpense = false }) {
    return (
        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign='right'>
                <Grid.Row>
                    <Grid.Column width={10} textAlign='left'>{title}</Grid.Column>
                    <Grid.Column width={3} textAlign='right'>${value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name='edit' bordered></Icon>
                        <Icon name='trash' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
