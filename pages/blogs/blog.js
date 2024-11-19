/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable require-jsdoc */
// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //
import Header from "@/components/Header";
import SideHeader from "@/components/sideHeader";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/blog.module.scss";

// UTILS //

// IMAGES //
import Edit from "@/../public/img/edit.png";
import Delete from "@/../public/img/delete.png";

// DATA //
import { getAllBlogs } from "@/services/BlogService";
import { deleteBlog } from "@/services/BlogService";
import { title } from "process";

/** Contact Page */
export default function Blog() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect
	useEffect(() => {
		async function fetchBlogs() {
			const data = await getAllBlogs();
			setBlogs(data);
			setLoading(false);
		}

		fetchBlogs();
	}, []);

	console.log(blogs);

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />
			<SideHeader />

			{/* Page Content starts here */}
			<main className={styles.BlogPage}>
				<div className={`${styles.title_addEntery_btn}`}>
					<div className={`${styles.title}`}>
						<h2>Blogs</h2>
					</div>
					<div className={`${styles.addEntery_btn}`}>
						<a href="/blogs/create">Create new entry</a>
					</div>
				</div>
				<div className={`${styles.show_data} ${styles.show_data_bg}`}>
					<div className={`${styles.field}`}>
						<h4>Title</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>Description</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>Date</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>Slug</h4>
					</div>
					<div className={`${styles.field}`}>
						<h4>Action</h4>
					</div>
				</div>

				<>
					{blogs.blog?.map((item, ind) => {
						return (
							<div className={`${styles.show_data}`} key={ind}>
								<div className={`${styles.field}`}>
									<p>{item.title}</p>
								</div>
								<div className={`${styles.field}`}>
									<p>{item.description}</p>
								</div>
								<div className={`${styles.field}`}>
									<p>{item.date}</p>
								</div>
								<div className={`${styles.field}`}>
									<p>{item.slug}</p>
								</div>
								<div className={`${styles.field}`}>
									<div className={`${styles.action}`}>
										<div
											className={`${styles.action_img}`}
											onClick={() => console.log(`Editing ${item.title}`)}
										>
											<img src={Edit.src} alt="Edit" />
										</div>
										<div
											className={`${styles.action_img}`}
											// onClick={() => console.log(`Editing ${item.title}`)}
											onClick={() => deleteBlog({ title: item.title })}
										>
											<img src={Delete.src} alt="Edit" />
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</>
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
