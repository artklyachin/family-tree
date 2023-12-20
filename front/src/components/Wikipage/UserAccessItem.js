import {TextBlock} from "../Auxiliary/TextBlock";
import {Link} from "react-router-dom";
import {CircleImg} from "../Auxiliary/CircleImg";
import React, {useEffect, useState} from "react";
import {ApiService, IsAuthorized} from "../../services/ApiService";

export function UserAccessItem( props  ) {
    const { id, onDelete, listname } = props;
    let user_id = id
    let IsOwner = props.IsOwner ? props.IsOwner : false

    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const responce = await ApiService(`users/${user_id}`);
                setUser(responce);
            }
        })();
    }, []);

    // const handleSuccess = (edittedComment) => {
    //     setIsModalOpen(false);
    //     onEdit({ comment: edittedComment, id });
    // };

    return (
        <div className="access-user-item-wrap">
            { IsOwner ? null :
                <button onClick={() => onDelete({id : id, listname : listname})}>delete</button>
            }
            <Link to = {`/profile/${user.id}`} className={'access-user-item-link'}>
                <div className="access-user-item">
                    <div className='access-user-item-img'>
                        <CircleImg imgUrl={user.avatar}/>
                    </div>
                    <TextBlock text={`${user.username} name: ${user.first_name} ${user.last_name}`} className="access-user-item-text"/>
                </div>
            </Link>
        </div>
    );
}
