import React, { createContext, useState } from 'react';
import { Scene } from './components/Scene';
import { NoteCard } from './components/NoteCard';
import RAW_DATA from './fake_data.json';

const RAND_INIT = 40;
const RAND_OFFSET = 0.5;
export const P_RANGE_IN = [-(RAND_INIT * RAND_OFFSET), (RAND_INIT * RAND_OFFSET)]
const FAKE_DATA = RAW_DATA.map((x, i) => {
    return {
        ...x,
        x: (RAND_OFFSET - Math.random()) * RAND_INIT,
        y: (RAND_OFFSET - Math.random()) * RAND_INIT,
        z: (RAND_OFFSET - Math.random()) * RAND_INIT,
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