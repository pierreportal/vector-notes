import React from 'react';
import { RoundButton } from './styles';


export const IconButton = ({ onClick, icon }: any) => {

    return <RoundButton onClick={onClick}>
        {icon}
    </RoundButton>;
}