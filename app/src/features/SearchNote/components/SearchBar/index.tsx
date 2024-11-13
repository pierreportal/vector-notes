import React, { useContext, useEffect, useRef, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { IconButton } from '../../../../UIkit/Buttons/IconButton';
import { Row } from '../../../../UIkit';
import { useKeys } from '../../../../hooks/useKeys';
import { AppContext } from '../../../../Context';

export const SearchBar = () => {

    const inputRef = useRef(null);

    const { showNewNoteModal } = useContext(AppContext);

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (showNewNoteModal) {
            (inputRef?.current as any)?.blur();
            setIsFocused(false);
        }
    }, [showNewNoteModal]);

    useKeys({
        meta: true,
        key: 'k',
        callback: () => {
            if (!showNewNoteModal) {
                (inputRef?.current as any)?.focus();
                setIsFocused(true);
            }
        }
    });

    return <Row>
        <input
            type="text"
            placeholder="⌘ + k Search notes"
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            style={{
                width: isFocused ? 'calc(100vw - 140px)' : '150px',
                transition: 'width 0.3s'
            }}
            ref={inputRef}
        />
        <IconButton onClick={() => true} icon={<FiSearch />} />
    </Row>
}