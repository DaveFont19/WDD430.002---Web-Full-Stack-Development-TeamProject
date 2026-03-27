'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './nav.module.css'

export default function NavLinks() {
	const pathname = usePathname() as string

	const onLoginPage = pathname === '/login'

	return (
		<nav className={styles.nav}>
			{/* Left side */}
			<div className={styles.navLeft}>
				<Link
					href="/"
					className={styles.link}>
					Home
				</Link>
			</div>

			{/* Right side */}
			<div className={styles.navRight}>
				{/* Will update tot {!User} when login user logic exists. Right now shows login link on every page except when
				you are on the login page */}
				{!onLoginPage && (
					<Link
						href="/login"
						className={styles.link}
					>
						Login
					</Link>
				)}

				{/* Will update to user when login user login exists */}
				{onLoginPage && (
					<Link
						href="/profile"
						className={styles.link}
					>
						Profile
					</Link>
				)}

				<Link
					href="/cart"
					className={styles.link}
				>
					Cart
				</Link>
			</div>
		</nav>
	)
}
