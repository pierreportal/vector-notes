import { useContext } from 'react';
import { AppContext } from '../../Context';
import { NewNoteModal } from '../../features/NewNote/components/NewNoteModal';
import { Main } from './styles';

export const MainContent = () => {

    const { showNewNOteModal } = useContext(AppContext);

    return (
        <Main>
            {showNewNOteModal && <NewNoteModal />}
        </Main>
    )
}