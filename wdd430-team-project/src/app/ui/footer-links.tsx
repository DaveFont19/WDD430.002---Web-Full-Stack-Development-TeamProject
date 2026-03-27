import Link from "next/link";
import styles from "./footer.module.css";

const footerLinks = [
    {
        title: "Explore",
        links: [
            { name: "Home", href: "/" },
            { name: "Shop", href: "/shop" },
            { name: "Categories", href: "/categories" },
        ],
    },
    {
        title: "For Sellers",
        links: [
            { name: "Sell on Handcrafted Haven", href: "/sell" },
            { name: "Create a Shop", href: "/create-shop" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Help Center", href: "/help" },
            { name: "FAQs", href: "/faq" },
        ],
    },
];

export default function FooterLinks() {
    return (
        <>
            {footerLinks.map((section) => (
                <div key={section.title} className={styles.footerSection}>
                    <h3>{section.title}</h3>

                    <ul>
                        {section.links.map((link) => (
                            <li key={link.name} className={styles.footerLink}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}