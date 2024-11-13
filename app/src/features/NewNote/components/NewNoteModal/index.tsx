import React, { useContext, useState } from "react";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { Modal, Overlay, TargetInfo } from "./styles";
import { IconButton } from "../../../../UIkit/Buttons/IconButton";
import { Row } from "../../../../UIkit";
import { useKeys } from "../../../../hooks/useKeys";
import { Markdown } from "../../../MarkdownEditor";
import { AppContext } from "../../../../Context";

const diskTarget = '/Users/username/Documents/notes';

export const NewNoteModal = () => {
    const { setShowNewNoteModal, setDisplayedNote } = useContext(AppContext);
    const [fullWidth, setFullWidth] = useState(false);
    const [noteTitle, setNodeTitle] = useState('');
    const [updatesAreSaved, setUpdatesAreSaved] = useState(true);

    const closeModal = () => {
        if (!updatesAreSaved) {
            if (window.confirm('Are you sure you want to close this note?')) {
                setShowNewNoteModal(false);
                setDisplayedNote(null);
            }
            return;
        }
        setShowNewNoteModal(false);
        setDisplayedNote(null);
    }
    const handleResize = () => setFullWidth(!fullWidth);

    useKeys({
        meta: true,
        key: 'e',
        callback: () => setFullWidth(!fullWidth)
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNodeTitle(value);
    }

    const saveNote = () => {
        setUpdatesAreSaved(true);
        // TODO: Save note logic here
    };


    const MD_STR = ''

    return <>
        <Overlay />
        <Modal fullWidth={fullWidth}>
            <Row spread>
                <Row hcenter gap={10}>
                    <IconButton onClick={closeModal} icon={<FiPlus style={{ transform: 'rotate(45deg)' }} />} />
                    <input type="text" name="note_title" value={noteTitle} onChange={handleTitleChange} placeholder="Untitled" />
                </Row>
                <Row hcenter gap={5}>
                    {updatesAreSaved ?
                        <FiCheck color="rgb(100, 255, 118)" />
                        :
                        <IconButton onClick={saveNote} icon={<FiCheck color="rgb(50,50,50)" />} />
                    }
                    <IconButton onClick={handleResize} icon={<FiArrowUpRight style={{ transform: `rotate(${180 * Number(fullWidth)}deg)` }} />} />
                </Row>
            </Row>
            <Markdown mdString={MD_STR} fullWidth={fullWidth} setUpdatesAreSaved={setUpdatesAreSaved} />
            <TargetInfo>{diskTarget}</TargetInfo>
        </Modal>
    </>
}
