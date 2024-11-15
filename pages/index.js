// MODULES //

// COMPONENTS //
import Header from "@/components/Header";
import SideHeader from "@/components/sideHeader";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />
			<SideHeader />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<h2>Trupath Dashboard</h2>
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
