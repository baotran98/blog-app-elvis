"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();
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
    ];

    return (
        <header className={'header' + (path === '/experience' ? ' header--light' : '')}>
            <Link href="/">
                <Image className='header__logo' src={"/assets/logo.svg"} alt='' width={150} height={150} priority/>
            </Link>
            <ul className='header__nav'>
                {navItems && navItems.map((link) => (
                    <li key={link.id}>
                        <Link href={link.href}>
                            <h5>{link.name}</h5>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/events">
                <button className='btn btn--black btn--small'>BOOK NOW</button>
            </Link>
        </header>
    )
}
