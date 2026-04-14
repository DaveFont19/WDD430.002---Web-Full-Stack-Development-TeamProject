export default function Layout({ children }: { children: React.ReactNode; }) {
	return (
		<div className="grid grid-cols-4 md:grid-cols-8">
			<div className="h-screen border m-2 ">{ /* Category Sidebar goes here */}
				<p>Categories</p>
				<form><ul>
					<li><input type="checkbox" name="Pottery" id="pottery" /><label htmlFor="mug">Pottery</label></li>
					<li><input type="checkbox" name="Hand-Woven" id="handwoven" /><label htmlFor="handwoven">Hand-Woven</label></li>
					<li><input type="checkbox" name="Clothing" id="clothing" /><label htmlFor="clothing">Clothing</label></li>
				</ul></form>
			</div>
			<div className="col-start-2 col-end-5 md:col-end-9">{children}</div>
		</div>
	)
}