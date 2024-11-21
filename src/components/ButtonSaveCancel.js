import React from 'react'
import { Button } from 'semantic-ui-react'

export default function ButtonSaveCancel({ oktitle = 'Ok' }) {
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>{oktitle}</Button>
        </Button.Group>
    )
}
