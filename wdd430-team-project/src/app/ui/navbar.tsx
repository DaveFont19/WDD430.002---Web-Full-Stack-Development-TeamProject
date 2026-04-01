import NavLinks from "./nav-links";
import styles from "./nav.module.css"
import { lora } from "./fonts";

export default function NavBar() {
	return (
		<div className={lora.className}>
			<NavLinks />
		</div>
	)
}