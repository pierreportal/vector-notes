import { useState } from 'react';
import { StyledEditor } from './styles';

export const Editor = ({ fullWidth, mdString }: any) => {
    const [markdown, setMarkdown] = useState(mdString);

    return (
        <StyledEditor
            autoFocus
            value={markdown}
            height="calc(100vh - 100px)"
            visible={fullWidth}
            placeholder={'# New note'}
            onChange={(value, viewUpdate) => setMarkdown(value)}
        />
    );
}