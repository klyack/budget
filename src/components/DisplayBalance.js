import React from 'react'
import { Statistic } from 'semantic-ui-react'

export default function DisplayBalance({ size = 'tiny', color = 'green', label = 'Label', value = '0.00' }) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: 'left' }}>
                {label}
            </Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    )
}
