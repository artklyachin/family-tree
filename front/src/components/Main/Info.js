import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "./main-texts";
import {info_texts} from "./info-texts";
import { InfoText } from "./info-texts";

export function Info() {

    /*
    Promise.all([
        fetch('sample.txt').then(x => x.text()),
        fetch('sample2.txt').then(x => x.text())
    ]).then(([sampleResp, sample2Resp]) => {
        console.log(sampleResp);
        console.log(sample2Resp);
    });*/
    console.log();

    return (
        <div className='main-aside'>
            <div className="part-under-header"/>
            <div className="info-part-1">
                <p className="info-part-1-txt1"> { InfoText().props.children } </p>
            </div>
        </div>
    );
}


/*
                <TextBlock text={info_texts["information"]} className="info-part-1-txt1"/>

function GetTextFromFile() {
    let data = async()=> {

    }
    fetch('data.txt')
        .then(function(response){
            return response.text();
        }).then(function (data) {
        console.log(data);
    })
    return data;
}

function changeFavicon() {
    let src = "https://www.adobe.com/express/feature/image/media_15960174677e9abd368c05a0e53f9cc5526099a27.png?width=2000&format=webply&optimize=medium";
    let link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}*/