import React, { useContext, useState } from 'react'
import { Billboard, Box, Text } from "@react-three/drei";
import { P_RANGE_IN, SpaceContext } from '../..';
import { scale } from '../../../../utils/scaling';
import { rgbToHex } from '../../../../utils/colors';
import { HTML } from '../../../../components/HTML';
import { AppContext } from '../../../../Context';


const Dot = ({ color }: any) => <Text color={color}>●</Text>

export const NoteCard = ({ note }: any) => {
    const { id, x, y, z, title } = note;
    const position: any = [x, y, z]

    const { setSelectedNote, selectedNote } = useContext(SpaceContext)
    const { setDisplayedNote } = useContext(AppContext)

    console.log('selected note', selectedNote)

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
        setDisplayedNote(id)
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
                            userSelect: 'none',
                        }}
                    >
                        <h2>{title}</h2>
                        <p>Selected Note content</p>
                        <p>Jun 12 2024</p>
                    </div>}
                />}
                <Dot color={c} />
            </Billboard>
        </>
    )
}
