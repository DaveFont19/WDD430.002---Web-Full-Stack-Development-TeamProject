'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
	const pathname = usePathname() as string

	const onLoginPage = pathname === '/login'

	return (
		<nav>
			{/* Left side */}
			<div>
				<Link
					href="/"
					className={'active'}>
					Home
				</Link>
			</div>

			{/* Right side */}
			<div>
				{/* Will update tot {!User} when login user logic exists. Right now shows login link on every page except when
				you are on the login page */}
				{!onLoginPage && (
					<Link
						href="/login"
						className={'active'}
					>
						Login
					</Link>
				)}

				{/* Will update to user when login user login exists */}
				{onLoginPage && (
					<Link
						href="/profile"
						className={'active'}
					>
						Profile
					</Link>
				)}

				<Link
					href="/cart"
					className={'active'}
				>
					Cart
				</Link>
			</div>
		</nav>
	)
}
