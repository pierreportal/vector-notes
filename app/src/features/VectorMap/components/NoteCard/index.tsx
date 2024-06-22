import React, { useContext, useState } from 'react'
import { Billboard, Box, Text } from "@react-three/drei";
import { P_RANGE_IN, SpaceContext } from '../..';
import { scale } from '../../../../utils/scaling';
import { rgbToHex } from '../../../../utils/colors';
import { HTML } from '../../../../components/HTML';


const Dot = ({ color }: any) => <Text color={color}>●</Text>

const Card = ({ title, color }: any) => {
    const fontProps: any = { anchorX: 'left', letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const sc_bgcol = [29, 27, 36].map((p: number) => scale(p, [0, 255], [0, 0.8]))

    return (
        <>
            <Text fontSize={0.5} {...fontProps} color={color}>{title}</Text>
            <Text fontSize={0.4} position={[0, -0.6, 0]} color={color} {...fontProps}>
                This is a note card
            </Text>
            <Text fontSize={0.3} position={[0, -1.1, 0]} color={color} {...fontProps}>
                12 Jun 2024
            </Text>
            <Box
                args={[4, 2, 0.1]} position={[1.5, -0.5, -0.1]}
            >
                <meshStandardMaterial
                    transparent
                    color={sc_bgcol as any}
                />
            </Box>
        </>
    )
}


export const NoteCard = ({ note }: any) => {
    const { id, x, y, z, title } = note;
    const position: any = [x, y, z]

    const { setSelectedNote } = useContext(SpaceContext)

    const sc_color = position.map((p: number) => ~~scale(p, P_RANGE_IN, [120, 255]))
    const c = rgbToHex(sc_color)

    const [hovered, setHover] = useState(false)

    const handleHover = (e: any) => {
        e.stopPropagation()
        setHover(true)
    }

    const handleMouseLeave = (e: any) => {
        e.stopPropagation()
        setHover(false)
    }

    const handleCardClick = (e: any) => {
        e.stopPropagation()
        setSelectedNote(id)
    }

    return (
        <>
            <Billboard position={position}
                onPointerOver={handleHover}
                onPointerOut={handleMouseLeave}
                onClick={handleCardClick}>
                {hovered && <HTML
                    render={() => <div
                        style={{
                            fontSize: 12,
                            color: c,
                            position: 'absolute',
                            left: 40,
                            top: -40,
                            pointerEvents: 'none',
                            width: 200,
                        }}
                    >
                        <h2>{title}</h2>
                        <p>Selected Note content</p>
                        <p>Jun 12 2024</p>
                    </div>}
                />}
                <Dot color={c} />
                {/* <Card title={title} color={c} /> */}
            </Billboard>
        </>
    )
}
