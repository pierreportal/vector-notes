import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context';
import { NewNoteModal } from '../../features/NewNote/components/NewNoteModal';
import { Main } from './styles';
import { VectorMap } from '../../features/VectorMap';


export const MainContent = () => {

    const { showNewNOteModal } = useContext(AppContext);

    return (
        <Main>
            <div style={{ zIndex: 100 }}>
                {showNewNOteModal && <NewNoteModal />}
            </div>
            <VectorMap />
        </Main>
    )
}