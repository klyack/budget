import React from 'react'
import DisplayBalance from './DisplayBalance'
import { Grid } from 'semantic-ui-react'

export default function DisplayBalances({ income = '0.0', expenses = '0.0' }) {
    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <DisplayBalance color='green' label='Income:' value={income} />
                </Grid.Column>
                <Grid.Column>
                    <DisplayBalance color='red' label='Expenses:' value={expenses} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
