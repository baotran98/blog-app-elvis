import { fetchStrapiData } from "@/utils/strapi.utils";

export default async function BlogDetail({ params }) {
    const { detail: id } = params;
    console.log(id)

    const blogArticles = await fetchStrapiData("/api/blog-articles?pLevel")
    // Find blog detail with the matching ID
    const blogDetail = blogArticles.data?.find((item) => item.slug === id)

    return (
        <main>
            <h4>{blogDetail.title}</h4>
        </main>
    )
}

export async function generateStaticParams() {
    const response = await fetchStrapiData("/api/blog-articles");

    return response?.data?.map((item) => ({
        id: item.slug,
    }));
}
