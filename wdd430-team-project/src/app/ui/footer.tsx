import Image from "next/image";
import styles from "./footer.module.css";
import FooterLinks from "./footer-links";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <Image
                        src="/logo.png"
                        alt="Handcrafted Haven"
                        width={120}
                        height={40}
                    />
                    <p className={styles.tagline}>
                        Discover unique handmade creations
                    </p>
                </div>
                <FooterLinks />
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.socials}>
                    <img src="/facebook.svg" alt="Facebook" />
                    <img src="/instagram.svg" alt="Instagram" />
                    <img src="/pinterest.svg" alt="Pinterest" />
                    <img src="/linkedin.svg" alt="LinkedIn" />
                </div>

                <p>© 2026 Handcrafted Haven</p>
            </div>
        </footer>
    );
}