
import React, { createContext, useState } from 'react';

interface IContextValue {
    showNewNoteModal: boolean;
    setShowNewNoteModal: (show: boolean) => void;
    displayedNote: any;
    setDisplayedNote: (note: any) => void;
}

export const AppContext = createContext({} as IContextValue);

export const Context = ({ children }: any) => {

    const [showNewNoteModal, setShowNewNoteModal] = useState(false);
    const [displayedNote, setDisplayedNote] = useState(null);

    const contextValue = {
        showNewNoteModal,
        setShowNewNoteModal,
        displayedNote,
        setDisplayedNote
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}