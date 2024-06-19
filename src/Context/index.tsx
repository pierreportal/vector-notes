import { createContext, useState } from 'react';


interface IContextValue {
    showNewNOteModal: boolean;
    setShowNewNoteModal: (show: boolean) => void;
}

export const AppContext = createContext({} as IContextValue);

export const Context = ({ children }: any) => {

    const [showNewNOteModal, setShowNewNoteModal] = useState(false);

    const contextValue = {
        showNewNOteModal,
        setShowNewNoteModal
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}