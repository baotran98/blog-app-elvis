import Image from "next/image";
import Link from "next/link";

const HeroSection = ({
    imgSrc = "",
    headline,
    theme = "turquoise"
}) => {
    return (
        <section className="hero">
            <div className="hero__background">
                <Image src={imgSrc || "/assets/kv/kv-sea.png"} alt="" width={1440} height={329} priority/>
            </div>
            <div className={"hero__headline hero__headline--" + theme}>
                {headline}
            </div>
            <Link href="/events">
                <button className={"btn btn--medium btn--" + theme}>BOOK NOW</button>
            </Link>
            <Image className={"hero__logo hero__logo--" + theme} src="/assets/logo.svg" alt="" width={150} height={150} priority/>
        </section>
    )
}
export default HeroSection;
