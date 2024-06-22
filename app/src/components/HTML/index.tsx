import React from 'react'
import { Container } from '@react-three/uikit';
import { Html } from '@react-three/drei';

const DIV = Container as any

interface IHtmnContainerProps {
    render: () => React.ReactNode
}

export const HTML = ({ render }: IHtmnContainerProps) => {
    return (
        <DIV flexGrow={1} margin={48} backgroundColor="green">
            <Html center>
                {render()}
            </Html>
        </DIV>
    )
}