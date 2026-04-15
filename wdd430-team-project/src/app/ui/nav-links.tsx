'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import styles from './nav.module.css'
import LogoutButton from './logout-button'
import { symlink } from 'fs'

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
					<>
						<Link
							href="/profile"
							className={styles.link}
						>
							Profile
						</Link>

						<LogoutButton className={styles.link} />

					</>
				)}

				<Link
					href="/products"
					className={styles.link}
					>Products</Link>
				<Link
					href="/cart"
					className={styles.link}
				>
					Cart
				</Link>
				{isLoggedIn && (
					<Link
						href="/wishlist"
						className={styles.link}
					>
						Wishlist
					</Link>
				)}
			</div>
		</nav>
	)
}
