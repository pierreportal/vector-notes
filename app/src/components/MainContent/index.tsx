import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import { NewNoteModal } from '../../features/NewNote/components/NewNoteModal';
import { Main } from './styles';
import { VectorMap } from '../../features/VectorMap';


export const MainContent = () => {

    const { showNewNoteModal, displayedNote } = useContext(AppContext);

    return (
        <Main>
            <div style={{ zIndex: 100 }}>
                {(showNewNoteModal || !!displayedNote) && <NewNoteModal />}
            </div>
            <VectorMap />
        </Main>
    )
}