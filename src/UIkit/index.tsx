import styled from 'styled-components';

interface RowProps {
    spread?: boolean;
    hcenter?: boolean;
    gap?: number;
}

export const Row = styled.div<RowProps>`
        display: flex;
        flex-direction: row;
        ${({ spread }) => spread && `justify-content: space-between;`}
        ${({ hcenter }) => hcenter && `align-items: center;`}
        ${({ gap }) => gap && `gap: ${gap}px;`}
`;