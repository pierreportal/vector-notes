import React from 'react';
import { TopBarStyled } from './styles';
import { NewNoteButton } from '../../features/NewNote/components/NewNoteButton';
import { SearchBar } from '../../features/SearchNote/components/SearchBar';

export const TopBar = () => {
    return <TopBarStyled>
        <NewNoteButton />
        <SearchBar />
    </TopBarStyled>
}