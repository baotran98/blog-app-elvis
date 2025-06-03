import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

const HighlightArticle = ({
    data
}) => {
    if (!data) return;

    const highLightItem = data?.find((item: { highlight: boolean; }) => item.highlight);

    const imageLoader = ({ src = '' }) => ( `${process.env.API_URL + src}` );

    return (
        <article className="highlight-article">
            <div className="highlight-article__info">
                <h3>{highLightItem?.title}</h3>
                <div className="copy">
                    { highLightItem?.description.length > 0 && (
                        <BlocksRenderer content={highLightItem?.description} />
                    )}
                </div>
                <Link className="btn btn--medium btn--turquoise" href={'/blog/' + highLightItem?.slug || ""}>
                    Read more
                </Link>
            </div>
            <Image className="highlight-article__image" loader={imageLoader} src={highLightItem?.image.url} alt={highLightItem?.image.name} width={highLightItem?.image.width} height={highLightItem?.image.height} />
        </article>
    )
}
export default HighlightArticle;
