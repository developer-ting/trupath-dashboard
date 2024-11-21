/* eslint-disable require-jsdoc */
import { ServerHeaders } from "@/utils/RequestHeaders";

/** Get All Blog */
export async function getAllBlogs() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
		headers: {
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
	});
	const data = await res.json();
	return data;
}

/** Get ID Blog */
export async function getIdBlogs(_id) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/blogById/${_id}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.TOKEN}`,
			},
		}
	);
	const data = await res.json();
	return data;
}

/** Post One Blog */
export async function createBlog({ token, formdata }) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
		method: "POST",
		// headers: {
		// 	Authorization: `Bearer ${process.env.TOKEN}`,
		// },
		body: formdata,
	});
	const data = await res.json();
	return data;
}

/** Delete One Blog */
export async function deleteBlog({ title }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${title}`,
		{
			method: "DELETE",
			// headers: { Authorization: `Bearer ${token}` },
		}
	);
	const data = await res.json();
	window.location.reload();
	return data;
}

// updateOneBlogById
// eslint-disable-next-line require-jsdoc
export async function updateOneBlogById({ formdata, _id }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/updateOneBlogById/${_id}`,
		{
			method: "PUT",
			// headers: {
			// 	"Content-Type": "application/json",
			// },
			body: formdata,
		}
	);
	const data = await res.json();
	return data;
}

// updateBlog
// export async function updateBlog({ _id }) {
// 	const formdata = new FormData();
// 	const res = await fetch(
// 		`${process.env.NEXT_PUBLIC_API_URL}/api/blogById/${_id}`,
// 		{
// 			method: "PUT",
// 			// headers: { Authorization: `Bearer ${token}` },
// 			body: formdata,
// 		}
// 	);
// 	const data = await res.json();
// 	return data;
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
