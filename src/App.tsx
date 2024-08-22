import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContentEditor from "@/components/ContentEditor";
import { Layout } from "@/components/layout";
import { Todo } from "@/components/todo";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Layout>
				<Todo />
			</Layout>
		),
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
