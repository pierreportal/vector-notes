import React, { useContext } from 'react';
import { FiPlus } from "react-icons/fi";
import { IconButton } from '../../../../UIkit/Buttons/IconButton';
import { AppContext } from '../../../../Context';
import { useKeys } from '../../../../hooks/useKeys';


export const NewNoteButton = () => {
    const { setShowNewNoteModal, showNewNOteModal } = useContext(AppContext);
    useKeys({
        key: '+',
        callback: () => setShowNewNoteModal(true)
    });

    useKeys({
        key: 'Escape',
        callback: () => setShowNewNoteModal(false)
    });

    const handleShowModal = () => setShowNewNoteModal(!showNewNOteModal);
    return <IconButton onClick={handleShowModal} icon={<FiPlus />} />;
}