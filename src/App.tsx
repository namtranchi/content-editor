import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContentEditor from "@/components/ContentEditor";
import { Header, Layout } from "@/components/layout";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout>main content</Layout>,
	},
	{
		path: "/content-editor",
		element: (
			<Layout>
				<ContentEditor />
			</Layout>
		),
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
