import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

const InfoBlock = ({
    data = {
        title: "",
        description: [],
        image: {
            url: "",
            width: 0,
            height: 0
        },
        button: {
            slug: "",
            text: "",
            color: "",
        }
    },
    reversed = false
}) => {
    const imageLoader = ({ src = '' }) => ( `${process.env.API_URL + src}` );

    return (
        <div className={"info" + (reversed ? " info--reversed" : "")}>
            <Image className="info__image" loader={imageLoader} src={data.image?.url} alt="" width={data.image?.width} height={data.image?.height} loading="lazy"/>
            <div className="info__text">
                <h2 className="info__headline">{data.title}</h2>
                <div className="copy">
                    <BlocksRenderer content={data.description} />
                </div>
                <Link href={'/' + data.button?.slug} className={"btn btn--medium btn--" + data.button?.color}>{data.button?.text}</Link>
            </div>
        </div>
    )
}
export default InfoBlock;