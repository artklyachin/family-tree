import {TextBlock} from "../Auxiliary/TextBlock";
import {Post} from "../Main/Post";

export function Desktop() {
    return (
        <div className='desktop-aside'>
            <div className="search-space">
                <TextBlock text="Search..." className="search-field"/>
            </div>
            <TextBlock text="Projects" className="section-page-name"/>
            <TextBlock text="your own page" className="section-section-name"/>
            <div className="post-grid">
                <Post name="Draco" surname="Malfoy" family="Malfoy family" to="/wiki_page"/>
            </div>
            <TextBlock text="pages with edit access" className="section-section-name"/>
            <div className="post-grid">
                <Post name="Lucius" surname="Malfoy" family="Malfoy family" to="/wiki_page"/>
            </div>
            <TextBlock text="favorite ⭐" className="section-section-name" to="/wiki_page"/>
            <div className="post-grid">
                <Post name="Harry" surname="Potter" family="" to="/wiki_page"/>
                <Post name="Hermione" surname="Granger" family="Granger family" to="/wiki_page"/>
                <Post name="Ron" surname="Weasley" family="Weasley family" to="/wiki_page"/>
                <Post name="Voldemort" surname="" family="" to="/wiki_page"/>
            </div>
        </div>
    );
}
