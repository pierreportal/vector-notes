import React, { useState } from 'react';
import { StyledEditor } from './styles';

export const Markdown = ({ fullWidth, mdString, isViewer }: any) => {
    const [markdown, setMarkdown] = useState(mdString);

    return (<></>
        // <StyledEditor
        //     autoFocus
        //     value={markdown}
        //     height="calc(100vh - 100px)"
        //     visible={isViewer || fullWidth}
        //     placeholder={'# New note'}
        //     visibleEditor={!isViewer}
        //     onChange={(value, viewUpdate) => setMarkdown(value)}
        // />
    );
}