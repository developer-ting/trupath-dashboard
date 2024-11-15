/* eslint-disable require-jsdoc */
// MODULES //
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

// COMPONENTS //
import Header from "@/components/Header";
import SideHeader from "@/components/sideHeader";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";

// STYLES //
import styles from "@/styles/pages/blogCreate.module.scss";

// UTILS //

// IMAGES //
import Edit from "@/../public/img/edit.png";
import Delete from "@/../public/img/delete.png";

// DATA //
import { createBlog } from "@/services/BlogService";
import { title } from "process";

/** Contact Page */
export default function Blog() {
	const router = useRouter();
	/** */
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const formdata = e.target;
	// 	const name = formdata.title.value;
	// 	await createBlog({ title: name });
	// 	router.push("/blogs/blog");
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formdata = e.target;
		const name = formdata.firstname.value;
		await createBlog({ name: name });
		router.push("/blogs/blog");
	};

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />
			<SideHeader />

			{/* Page Content starts here */}
			<main className={styles.CreatBlogPage}>
				<div className={`${styles.ContactForm}`}>
					<div>
						<h2>Submit a New Blog</h2>
						<form onSubmit={handleSubmit}>
							<div>
								<label>
									Title:
									<input
										name="firstname"
										id="firstname"
										type="text"
										placeholder="First"
									/>
								</label>
							</div>
							<div>
								<label>
									Thumbnail:
									<input
										type="file"
										name="thumbnail"
										id="thumbnail"
										accept="image/*"
										// required
									/>
								</label>
							</div>
							{/* <div>
								<label>
									Description:
									<textarea type="text" name="desc" id="desc" placeholder="desc" />
								</label>
							</div> */}
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
