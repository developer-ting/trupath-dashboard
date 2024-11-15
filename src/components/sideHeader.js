/* eslint-disable @next/next/no-html-link-for-pages */
// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/sideHeader.module.scss";

// IMAGES //
import Dashboard from "@/../public/img/dashboard.png";
import Blog from "@/../public/img/blog.png";
import Phone from "@/../public/img/phone.png";

// DATA //

/** Header Component */
export default function SideHeader() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<div className={`${styles.side_header}`}>
			<div className={`${styles.header_inside}`}>
				{/* Logo wrap */}
				<div className={`${styles.navigation}`}>
					<div className={`${styles.navigation_title}`}>Navigation</div>
					<div className={`${styles.pages}`}>
						<ul>
							<li>
								<a href="/">
									<div className={`${styles.page_img}`}>
										<img src={Dashboard.src} alt="logo" />
									</div>
									Dashboard
								</a>
							</li>
							<li>
								<a href="/blogs/blog">
									<div className={`${styles.page_img}`}>
										<img src={Blog.src} alt="logo" />
									</div>
									Blogs
								</a>
							</li>
							<li>
								<a href="/blogs/blog">
									<div className={`${styles.page_img}`}>
										<img src={Phone.src} alt="logo" />
									</div>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Links Wrap */}
				<div className={`${styles.links_wrap}`}></div>

				{/* Hamburger icon visible in mobile only */}
				<div className={styles.hamburger_icon} onClick={toggleSidebar}>
					<span className={styles.hamburger_line}></span>
					<span className={styles.hamburger_line}></span>
					<span className={styles.hamburger_line}></span>
				</div>
			</div>
		</div>
	);
}
