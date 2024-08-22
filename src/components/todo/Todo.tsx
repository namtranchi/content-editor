import React, { useEffect, useState } from "react";

import { uuidV4 } from "@/utils/generator";

import AddNew from "./AddNew";
import TodoItem from "./TodoItem";
import { ITodo } from "./index.d";

export default function Todo() {
	const [list, setList] = useState<ITodo[]>([]);

	useEffect(() => {
		document.title = "Todo App";
	}, []);

	const handleAddNew = (todoText: string) => {
		setList(prev => [
			{
				id: uuidV4(),
				todo: todoText,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			},
			...prev,
		]);
	};

	const handleDelete = (todo: ITodo) => {
		setList(prev => prev.filter(item => item.id !== todo.id));
	};

	return (
		<div className="flex items-center justify-center my-8 font-medium">
			<div className="flex flex-grow items-center justify-center h-full text-gray-600">
				<div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
					<div className="flex items-center mb-6">
						<svg
							className="h-8 w-8 text-indigo-500 stroke-current"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
							/>
						</svg>
						<h4 className="font-semibold ml-3 text-lg">Frodo's Jobs</h4>
					</div>

					{list?.map(item => (
						<TodoItem
							key={item.id}
							{...item}
							onDelete={() => handleDelete(item)}
						/>
					))}

					<AddNew onAddNew={handleAddNew} />
				</div>
			</div>
		</div>
	);
}
