import React from 'react';
import { TopBarStyled } from './styles';
import { SearchBar } from '../../features/SearchNote/components/SearchBar';
import { NewNoteButton } from '../../features/NewNote/components/NewNoteButton';
import { IconButton } from '../../UIkit/Buttons/IconButton';
import { FiMaximize, FiMinimize } from 'react-icons/fi';
import { FoldersSelector } from '../../features/FoldersSelector';

export const TopBar = () => {
    const [isFullScreen, setIsFullScreen] = React.useState(false);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullScreen(false);
        }
    }
    return (
        <TopBarStyled>
            <div style={{ width: '60px', display: 'flex' }}>
                <FoldersSelector />
                <NewNoteButton />
            </div>
            <SearchBar />
            <IconButton onClick={toggleFullScreen} icon={
                isFullScreen ? <FiMinimize /> : <FiMaximize />
            } />
        </TopBarStyled>
    )
}