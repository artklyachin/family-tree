import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { PublicationForm } from "./PublicationForm";

export function EditableItem(props) {
    const { content, onEdit, id } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSuccess = (edittedComment) => {
        setIsModalOpen(false);
        onEdit({ comment: edittedComment, id });
    };

    return (
        <div>
            <div className="editable-item-grid">
                {content}
                <div className="edit">
                    <button onClick={() => setIsModalOpen(true)}>edit</button>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    content={
                        <PublicationForm
                            formTitle="Редактировать"
                            onSuccess={handleSuccess}
                        />
                    }
                />
            )}
        </div>
    );
}
