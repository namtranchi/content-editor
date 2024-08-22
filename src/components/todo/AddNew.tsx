import React, { ChangeEvent, useState } from "react";

interface IProps {
	onAddNew: (todo: string) => void;
}
export default function AddNew({ onAddNew }: IProps) {
	const [text, setText] = useState<string>("");

	const handleSubmit = () => {
		onAddNew(text);
		setText("");
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleEnter = (event: any) => {
		if (event.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<fieldset className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
			<svg
				className="w-5 h-5 text-gray-400 fill-current"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				onClick={handleSubmit}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 6v6m0 0v6m0-6h6m-6 0H6"
				/>
			</svg>
			<input
				className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
				type="text"
				placeholder="add a new task"
				value={text}
				onChange={handleChange}
				onKeyDown={handleEnter}
			/>
		</fieldset>
	);
}
