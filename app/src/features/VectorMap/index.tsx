import React, { createContext, useState } from 'react';
import { Scene } from './components/Scene';
import { NoteCard } from './components/NoteCard';
import RAW_DATA from '../../data.json';

const RAND_INIT = 40;
const RAND_OFFSET = 0.5;
// TODO: recalculate the range based on the data (min, max)
export const P_RANGE_IN = [-(RAND_INIT * RAND_OFFSET), (RAND_INIT * RAND_OFFSET)]

const FAKE_DATA = RAW_DATA.map((d, i) => {
    const [x, y, z] = d.vector;
    return {
        ...d, x, y, z
    }
});

export const SpaceContext = createContext({
    selectedNote: null,
    setSelectedNote: (id: number) => { },
});

export const VectorMap = () => {

    const [selectedNote, setSelectedNote] = useState<null | number>(null);
    const points = FAKE_DATA.map((p, i) => <NoteCard key={i} note={p} />);

    const value: any = {
        selectedNote,
        setSelectedNote
    }

    return (
        <SpaceContext.Provider value={value}>
            <Scene>
                {points}
            </Scene>
        </SpaceContext.Provider>
    )
}