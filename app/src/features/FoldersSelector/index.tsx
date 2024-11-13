import React from 'react';
import { IconButton } from '../../UIkit/Buttons/IconButton';
import { FiBook } from "react-icons/fi";

export const FoldersSelector = () => {
    const [displayFolders, setDisplayFolders] = React.useState(false);

    return <IconButton icon={<FiBook />} onClick={() => setDisplayFolders(true)} />;
};