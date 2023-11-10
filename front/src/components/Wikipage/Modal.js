export function Modal(props) {
    const { onClose, content } = props;

    return (
        <div className="modalContainer" onClick={onClose}>
            <div className="modal"
                    onClick={(event) => event.stopPropagation()}>
                {content}
            </div>
        </div>
    );
}
