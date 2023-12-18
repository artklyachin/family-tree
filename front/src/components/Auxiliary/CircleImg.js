import {useEffect, useState} from "react";
import {ApiService} from "../../services/ApiService";
import {LinkBlock} from "./LinkBlock";

export function CircleImg( {imgUrl} ) {
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
            console.log(img_url, 2)
        })();
    }, []);

    console.log(img_url, 2)


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