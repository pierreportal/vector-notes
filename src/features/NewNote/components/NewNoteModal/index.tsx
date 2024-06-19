import { useContext, useState } from "react";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { Modal, Overlay } from "./styles";
import { IconButton } from "../../../../UIkit/Buttons/IconButton";
import { AppContext } from "../../../../Context";
import { Row } from "../../../../UIkit";
import { useKeys } from "../../../../hooks/useKeys";
import { Editor } from "../../../MarkdownEditor";

export const NewNoteModal = () => {
    const { setShowNewNoteModal } = useContext(AppContext);
    const [fullWidth, setFullWidth] = useState(false);

    const closeModal = () => setShowNewNoteModal(false);
    const handleResize = () => setFullWidth(!fullWidth);

    useKeys({
        meta: true,
        key: 'e',
        callback: () => setFullWidth(!fullWidth)
    });

    const MD_STR = ''
    const nodeTitle = MD_STR.length ? MD_STR.split('\n')[0].replace('#', '').trim() : 'Untitled';

    return <>
        <Overlay />
        <Modal fullWidth={fullWidth}>
            <Row spread>
                <Row hcenter gap={10}>
                    <IconButton onClick={closeModal} icon={<FiPlus style={{ transform: 'rotate(45deg)' }} />} />
                    <input type="text" name="note_title" value={nodeTitle} />
                </Row>
                <Row hcenter gap={5}>
                    <FiCheck color="rgb(100, 255, 118)" />
                    <IconButton onClick={handleResize} icon={<FiArrowUpRight style={{ transform: `rotate(${180 * Number(fullWidth)}deg)` }} />} />
                </Row>
            </Row>
            <Editor mdString={MD_STR} fullWidth={fullWidth} />
        </Modal>
    </>
}
