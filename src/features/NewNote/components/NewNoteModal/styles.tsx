import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
`;

export interface ModalProps {
    fullWidth?: boolean;
}

export const Modal = styled.div<ModalProps>`
    position: absolute;
    padding: 30px;
    top: ${({ fullWidth }) => fullWidth ? '0' : '50px'};
    left: ${({ fullWidth }) => fullWidth ? '0' : 'calc(50vw - 25%)'};
    width: ${({ fullWidth }) => fullWidth ? '100%' : '50%'};
    height: ${({ fullWidth }) => fullWidth ? '100%' : 'calc(100% - 100px)'};
    background-color: #100f13;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: width 0.3s ease, left 0.3s ease, top 0.3s ease, height 0.3s ease;
    animation: ${slideUp} 0.3s ease;
    border-radius: 10px;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
    animation: ${fadeIn} 0.5s ease;
`;