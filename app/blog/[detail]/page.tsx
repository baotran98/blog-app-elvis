import BlockArticle from "@/app/_components/Article/Block";
import IntroArticle from "@/app/_components/Article/Intro";
import OverviewArticle from "@/app/_components/Article/Overview";
import { fetchStrapiData } from "@/utils/strapi.utils";

export default async function BlogDetail({ params = { detail: "" } }) {
    const { detail: id } = params;

    const blogArticles = await fetchStrapiData("/api/blog-articles?pLevel")

    if (!blogArticles) return;

    // Find blog detail with the matching ID
    const blogDetail = blogArticles.data?.find((item: { slug: string; }) => item.slug === id)

    return (
        <main>
            <IntroArticle article={blogDetail}/>
            <div className="article-section">
                <OverviewArticle overview={blogDetail} />
                {blogDetail.contentArticle.map((component: {
                    id: string
                }) => (
                    <BlockArticle key={component.id} data={component} />
                ))}
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    const response = await fetchStrapiData("/api/blog-articles");

    return response?.data?.map((item: { slug: string; }) => ({
        id: item.slug,
    }));
}
