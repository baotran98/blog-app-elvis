
export default function HeadlineArticle({
    headline
}) {
    return <h3 className="article-headline" id={headline.slug}>{headline.title}</h3>
}
