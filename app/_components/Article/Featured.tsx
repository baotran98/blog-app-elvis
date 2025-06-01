import { useState } from "react";
import FeaturedBlock from "../Block/Featured";

const FeaturedArticle = ({
    data
}) => {
    const [moreItem, setMoreItem] = useState(3)

    const handleMoreItem = () => {
        setMoreItem(moreItem + 3)
    }

    return (
        <article className="featured-items">
            <h3 className="featured-items__headline">Our featured articles</h3>
            <div className="featured-items__container">
                { data && data?.slice(0, moreItem).map((item) => <FeaturedBlock key={item.id} featuredItem={item} /> )}
            </div>
            { moreItem < data?.length && (
                <button className="btn btn--medium btn--turquoise" onClick={handleMoreItem}>SEE MORE</button>
            )}
        </article>
    )
}
export default FeaturedArticle;