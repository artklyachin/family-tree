import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { PublicationForm } from "./PublicationForm";

export function EditableItem(props) {
    const { content, onEdit, id, errorCheck } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState();

    const handleSuccess = (edittedComment) => {
        const responce = errorCheck ? errorCheck(edittedComment.comment) : true
        console.log(edittedComment, responce)
        if (responce === true) {
            setError(null)
            setIsModalOpen(false);
            onEdit({ comment: edittedComment, id });
        } else {
            setError(responce)
        }
    };

    return (
        <div>
            <div className="editable-item-grid">
                {content}
                <div className="edit">
                    <button onClick={() => setIsModalOpen(true)}>edit</button>
                </div>
            </div>
            <div className={"editable-item-error"}>
                {error}
            </div>
            {isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    content={
                        <PublicationForm
                            formTitle="Edit"
                            onSuccess={handleSuccess}
                        />
                    }
                />
            )}
        </div>
    );
}
