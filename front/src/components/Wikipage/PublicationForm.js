import { useState } from "react";
import { PublicationItem } from "./PublicationItem";

export function PublicationForm(props) {
    const { onSuccess, formTitle, defaultComment, listname } = props;
    const [comment, setComment] = useState();
    const [error, setError] = useState("");

    const handleChangeComment = (event) => {
        if (event.target.value.length > 50) {
            setError("Поле не может быть больше 50 символов");
        } else if (event.target.value.length === 0) {
            setError("Поле не может быть пустым");
        } else {
            setError("");
            setComment(event.target.value);
        }
    };

    return (
        <main className="main publication">
            <div className="pub-form-create-lable">{formTitle}</div>
            <div className="publication-create">
                <form>
                    <span className="error">{error}</span>
                    <div>
                        <input className="pub-form-item" name="comment" onChange={handleChangeComment} />
                    </div>
                    <div>
                        <button
                            type="submit"
                            id="create-button"
                            value={comment}
                            className={"pub-form-buttom-save"}
                            onClick={(event) => {
                                event.preventDefault();
                                onSuccess({comment : comment, listname : listname});
                            }}
                        >
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
