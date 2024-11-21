/* eslint-disable @typescript-eslint/no-var-requires */
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

// STYLES //
import styles from "@/styles/pages/blogCreate.module.scss";

// UTILS //

// IMAGES //

// DATA //
import { createBlog } from "@/services/BlogService";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

/** Contact Page */
export default function Blog() {
	const editorRef = useRef();
	const [editorLoaded, setEditorLoaded] = useState(false);
	const { CKEditor, ClassicEditor } = editorRef.current || {};
	useEffect(() => {
		// Dynamically load CKEditor and its build
		editorRef.current = {
			CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
			ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
		};
		setEditorLoaded(true); // Indicate that the editor is loaded
	}, []);

	const router = useRouter();

	const [content, setContent] = useState("");

	const handleEditorChange = (event, editor) => {
		const data = editor.getData();
		setContent(data);
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formdata = new FormData();
		formdata.append("title", e.target.title.value);
		formdata.append("description", e.target.description.value);
		formdata.append("slug", e.target.slug.value);
		formdata.append("date", e.target.date.value);
		formdata.append("readTime", e.target.readTime.value);
		// Append thumbnail
		if (e.target.thumbnail.files[0]) {
			formdata.append("thumbnail", e.target.thumbnail.files[0]);
		}
		// Append CKEditor content
		formdata.append("content", content);
		// Send formdata to API
		await createBlog({ formdata });
		router.push("/blogs");
	};

	console.log(content, "data");

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"blog create"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Header */}
			<Header />
			<SideHeader />

			{/* Page Content starts here */}
			<main className={styles.CreatBlogPage}>
				<div className={`${styles.ContactForm}`}>
					<div>
						<form onSubmit={handleSubmit}>
							<div className={`${styles.fiels_section}`}>
								<div className={`${styles.fiels}`}>
									<label>Title</label>
									<input
										name="title"
										id="title"
										type="text"
										placeholder="Title"
										required
									/>
								</div>
								<div className={`${styles.fiels}`}>
									<label>Description</label>
									<input
										name="description"
										id="description"
										type="text"
										placeholder="Description"
										required
									/>
								</div>
								<div className={`${styles.fiels}`}>
									<label>Thumbnail:</label>
									<input
										type="file"
										name="thumbnail"
										id="thumbnail"
										accept="image/*"
										required
									/>
								</div>
								<div className={`${styles.fiels}`}>
									<label>Content</label>
									{editorLoaded ? (
										<CKEditor
											editor={ClassicEditor}
											data={content}
											onInit={(editor) => {
												console.log("Editor is ready to use!", editor);
											}}
											onChange={handleEditorChange}
										/>
									) : (
										<div>Editor loading</div>
									)}
								</div>

								<div className={`${styles.fiels}`}>
									<label>Slug</label>
									<input name="slug" id="slug" type="text" placeholder="slug" required />
								</div>
								<div className={`${styles.fiels}`}>
									<label>Date</label>
									<input name="date" id="date" type="text" placeholder="Date" required />
								</div>
								<div className={`${styles.fiels}`}>
									<label>Read Time</label>
									<input
										name="readTime"
										id="readTime"
										type="text"
										placeholder="Read Time"
										required
									/>
								</div>
							</div>
							<button type="submit" className={`${styles.submit_btn}`}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
