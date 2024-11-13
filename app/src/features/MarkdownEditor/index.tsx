import React, { useState } from 'react';
import { StyledEditor } from './styles';

export const Markdown = ({ fullWidth, mdString, isViewer, setUpdatesAreSaved }: any) => {
    const [markdown, setMarkdown] = useState(mdString);

    const updateNote = (value: string) => {
        setUpdatesAreSaved(false);
        setMarkdown(value);
    }

    return (
        <StyledEditor
            autoFocus
            value={markdown}
            height="calc(100vh - 200px)"
            visible={isViewer || fullWidth}
            placeholder={'# New note'}
            visibleEditor={!isViewer}
            onChange={updateNote}
        />
    );
}