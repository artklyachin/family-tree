import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { PublicationForm } from "./PublicationForm";
export function PublicationItem(props) {
    const { imageUrl, comment, id, onEdit, onDelete } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSuccess = (edittedComment) => {
        setIsModalOpen(false);
        onEdit({ comment: edittedComment, id });
    };

    return (
        <div>
            <div className="pub-item-main">
                {comment}
                <div className="edit">
                    <button onClick={() => setIsModalOpen(true)}>edit</button>
                    <button onClick={() => onDelete({id})}>delete</button>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    content={
                        <PublicationForm
                            formTitle="Редактировать"
                            defaultComment={comment}
                            onSuccess={handleSuccess}
                        />
                    }
                />
            )}
        </div>
    );
}
