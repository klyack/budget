import React from 'react'
import ButtonSaveCancel from './ButtonSaveCancel';
import { Form } from 'semantic-ui-react';

export default function NewEntryForm(props) {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input icon="tags" width={12} label='Description' placeholder="New thing" />
                <Form.Input width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left' />
            </Form.Group>
            <ButtonSaveCancel />
        </Form>
    )
}
