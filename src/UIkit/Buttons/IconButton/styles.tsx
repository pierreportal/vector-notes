import styled from 'styled-components';

export const RoundButton = styled.button`
    border-radius: 50%;
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    transition: 0.2s;

    &:hover {
        transform: translateX(2px);
    }
`;