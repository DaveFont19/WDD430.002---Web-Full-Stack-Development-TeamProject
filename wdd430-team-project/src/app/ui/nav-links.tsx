'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import styles from './nav.module.css'

export default function NavLinks() {
	const pathname = usePathname() as string
	const { data: session, status } = useSession()

	const isLoggedIn = status === 'authenticated'

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
				{!isLoggedIn && (
					<Link
						href="/login"
						className={styles.link}
					>
						Login
					</Link>
				)}

				{isLoggedIn && (
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
