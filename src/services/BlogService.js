import { ServerHeaders } from "@/utils/RequestHeaders";

/** Fetch Blog Data */
// export const getAllBlogs = async () => {
// 	const req = await fetch(
// 		`${process.env.STRAPI_DO_BASE_URL}/api/blogs?populate=*`,
// 		ServerHeaders
// 	);
// 	const res = await req.json();
// 	return res;
// };

/** get All Blog */
export async function getAllBlogs() {
	const res = await fetch("http://localhost:8080/api/blogs", {
		headers: {
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
	});
	const data = await res.json();
	return data;
}

/** Post One Blog */
export async function createBlog({ token, name }) {
	const formdata = new FormData();
	formdata.append("title", name);
	const res = await fetch("http://localhost:8080/api/blogs", {
		method: "POST",
		// headers: {
		// 	Authorization: `Bearer ${process.env.TOKEN}`,
		// },
		body: formdata,
	});
	const data = await res.json();
	return data;
}

// export async function getAllBlogs() {
// 	console.log("Fetching blogs...");

// 	try {
// 		const res = await fetch("http://localhost:8080/api/blogs");
// 		console.log("Response received:", res);

// 		if (!res.ok) {
// 			throw new Error(`Failed to fetch blogs: ${res.statusText}`);
// 		}

// 		const data = await res.json();
// 		console.log("Data fetched:", data);
// 		return data;
// 	} catch (error) {
// 		console.error("Error in getAllBlogs:", error);
// 		return [];
// 	}
// }

/** Fetch Blogs Inside Data */
export const getBlogBySlug = async (slug) => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/blogs?populate=*&filters[slug][$eq]=${slug}`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};

/** Fetch Related Blogs Data */
export const getRelatedBlogsBySlug = async (slug) => {
	const req = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/blogs?populate=*&filters[slug][$ne]=${slug}`,
		ServerHeaders
	);
	const res = await req.json();
	return res;
};
