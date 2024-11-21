import React from 'react'
import { Header } from 'semantic-ui-react';

export function MainHeader({ title, type = 'H1' }) {
    return <Header as={type}>{title}</Header>;
}

export default MainHeader;