import { useState } from "react";
import { PublicationItem } from "./PublicationItem";

export function PublicationForm(props) {
    const { onSuccess, formTitle, defaultComment, listname, checkError } = props;
    const [comment, setComment] = useState();
    const [error, setError] = useState("");

    // const handleCheck = (comment) => {
    //     setComment(comment);
    //     console.log(comment, IsErrorCheck)
    //     if (IsErrorCheck === true) {
    //         if (comment && comment.length > 50) {
    //             setError("Поле не может быть больше 50 символов");
    //             return false
    //         } else if (!comment || comment.length === 0) {
    //             setError("Поле не может быть пустым");
    //             return false
    //         } else {
    //             setError(null);
    //             return true
    //         }
    //     }
    //     return true
    // }

    const handleChangeComment = async (event) => {
        if (checkError) {
            setComment(event.target.value)
            const responce = await checkError({comment: event.target.value, listname: listname})
            setError(responce)
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
                            onClick={async (event) => {
                                if (error === "") {
                                    onSuccess({comment: comment, listname: listname});
                                    event.preventDefault();
                                }
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
