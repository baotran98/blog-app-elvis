import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

const OverviewArticle = ({
    overview = {
        description: [],
        contentArticle: [],
    }
}) => {

    const headlines = overview.contentArticle.filter(
        (component: { __component: string; }) => component.__component === "blog-article.head-line"
    )

    return (
        <div className="article-overview">
            <div className="article-overview__info">
                <h3 className="article-overview__headline">In this blog</h3>
                <div className="article-overview__excerpt">
                    <BlocksRenderer content={overview.description} />
                </div>
            </div>
            <ul className="article-overview__contents">
                {headlines.map((catalogue, index) => (
                    <li key={catalogue.id}>
                        <Link href={'#' + catalogue.slug}>
                            {index + 1} . {catalogue.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default OverviewArticle;