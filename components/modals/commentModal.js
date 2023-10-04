import { closeCommentModal } from "@/Redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function commentModal() {

    const isOpen = useSelector(state => state.modals.commentModalOpen)
    const dispatch = useDispatch()
    return (
        <>
            <Modal
                open={isOpen}
                onClose={() => dispatch(closeCommentModal())}
            >
                <div className="w-[500px] h-500px]">This is the comment Modal</div>

        </Modal>
        
        </>
    )
}