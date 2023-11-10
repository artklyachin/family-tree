import { useState } from "react";
import { PublicationItem } from "./PublicationItem";

export function PublicationForm(props) {
    const { onSuccess, formTitle, defaultComment } = props;
    const [comment, setComment] = useState(defaultComment);
    const [error, setError] = useState("");

    const handleChangeComment = (event) => {
        if (event.target.value.length > 50) {
            setError("Comment не может быть больше 50 символов");
        } else if (event.target.value.length === 0) {
            setError("Comment не может быть пустым");
        } else {
            setError("");
            setComment(event.target.value);
        }
    };

    return (
        <main className="main publication">
            <h1>{formTitle}</h1>
            <div className="publication-create">
                <form>
                    <span className="error">{error}</span>
                    <div className="form-item">
                        <label id="comment">comment</label>
                        <input name="comment" onChange={handleChangeComment} />
                    </div>
                    <div>
                        <button
                            type="submit"
                            id="create-button"
                            value={comment}
                            onClick={(event) => {
                                event.preventDefault();
                                onSuccess({comment});
                            }}
                        >
                            {formTitle}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
