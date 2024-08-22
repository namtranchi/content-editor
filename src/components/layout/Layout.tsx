import React, { ReactNode } from "react";

import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-gray-50">
			<Header />
			{children}
		</div>
	);
}
