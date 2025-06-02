import { formatDate } from "@/utils/strapi.utils";
import Image from "next/image";
import Link from "next/link";

const FeaturedBlock = ({
    featuredItem = {
        title: "",
        slug: "",
        description: "",
        image: {
            url: "",
            width: 0,
            height: 0,
        },
        publishedAt: Date(),
    },
}) => {
    const imageLoader = ({ src = '' }) => ( `${process.env.API_URL + src}` );

    return (
        <Link
            href={'/blog/' + featuredItem.slug}
            className="featured-items__article"
        >
            <div className="featured-items__article-img">
                <Image className="" loader={imageLoader} src={featuredItem?.image?.url} alt={"Go read article" + featuredItem.title} width={featuredItem?.image?.width} height={featuredItem?.image?.height} loading="lazy"/>
            </div>
            <div className="featured-items__article-text">
                <h4>{featuredItem.title}</h4>
                <p className="copy-small">{formatDate(featuredItem.publishedAt)}</p>
            </div>
        </Link>
    )
}
export default FeaturedBlock;