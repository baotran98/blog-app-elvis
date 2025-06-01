import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const navItems = [
        {
            id: 1,
            name: 'the camp.',
            href: '/'
        },
        {
            id: 2,
            name: 'the experience.',
            href: '/experience'
        },
        {
            id: 3,
            name: 'the blog.',
            href: '/blog'
        },
        {
            id: 4,
            name: 'the events.',
            href: '/events'
        },
    ];

    const policyItems = [
        {
            id: 1,
            name: 'Imprint',
        },
        {
            id: 2,
            name: 'Terms and Conditions',
        },
        {
            id: 3,
            name: 'Data Protection',
        },
    ]

    return (
        <footer className="footer">
            <nav className='footer__nav'>
                <Image className="footer__logo" src={"/assets/logo.svg"} alt="" width={150} height={150} priority/>
                <ul className="footer__links">
                    {navItems && navItems.map((link) => (
                        <li key={link.id}>
                            <Link href={link.href}>
                                <h5>{link.name}</h5>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="footer__policies">
                <ul className="footer__policies-nav">
                    {policyItems && policyItems.map((item) => (
                        <li key={item.id}>
                            <p className="copy">{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}