import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Root } from '@react-three/uikit';

const Rooot = Root as any
export const Scene = ({ children }: any) => {
    return (
        <Canvas>
            <fog attach="fog" args={['#1d1b24', 0, 100]} />
            <Rooot flexDirection="row">
                <OrbitControls
                    minDistance={20}
                    maxDistance={40}
                />
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    {children}
                </Suspense>
            </Rooot>
        </Canvas>
    )
}