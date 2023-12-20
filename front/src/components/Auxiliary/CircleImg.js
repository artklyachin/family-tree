import {useEffect, useState} from "react";
import {ApiService} from "../../services/ApiService";
import {LinkBlock} from "./LinkBlock";
import {LOCAL_SERVER_PATH} from "../../Config"

export function CircleImg( {imgUrl} ) {

    if (imgUrl !== undefined && imgUrl.length > "/media".length && imgUrl.substring(0, "/media".length) === "/media") {
        imgUrl = LOCAL_SERVER_PATH + imgUrl
    }
    return(
        <span className="circle-image">
         <img src={imgUrl} alt="citcle_img"/>
        </span>
    );
}

export function AvatarBlock( {userUrl} ) {
    const [img_url, setImgUrl] = useState({})

    useEffect(() => {
        (async () => {
            const new_data = await ApiService(userUrl)
            setImgUrl(new_data.avatar)
        })();
    }, []);

    return(
        <LinkBlock elements={<CircleImg imgUrl={img_url}/>} to='/profile' className='header-avatar'/>
    );
}

export function CardAvaterBlock( {userUrl} ) {
    const [img_url, setImgUrl] = useState({})

    useEffect(() => {
        (async () => {
            const new_data = await ApiService(userUrl)
            setImgUrl(new_data.image)
        })();
    }, []);

    return(
        <LinkBlock elements={<CircleImg imgUrl={img_url}/>} to='/wiki' className='header-avatar'/>
    );
}