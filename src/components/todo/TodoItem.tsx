import React, { useEffect, useRef, useState } from "react";

import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

import { ITodo } from "./index.d";

interface IProps extends ITodo {
	onDelete: () => void;
	onEdit: (text: string) => void;
	onComplete: () => void;
}
export default function TodoItem({
	todo,
	isCompleted,
	onDelete,
	onEdit,
	onComplete,
}: IProps) {
	console.log("💊 ~ isCompleted:", isCompleted);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [text, setText] = useState<string>(todo);

	const inputRef = useRef<any>();

	useEffect(() => {
		if (isEdit) {
			inputRef?.current?.focus();
		}
	}, [isEdit]);

	return (
		<div className="group select-none">
			<input className="hidden" type="checkbox" id="task_1" defaultChecked />
			<label
				className={twMerge(
					"flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100",
					!isEdit && "select-none",
				)}
				htmlFor="task_1"
			>
				<span
					className={twMerge(
						"flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full",
						isCompleted && "text-green-500 border-green-500",
					)}
					onClick={onComplete}
				>
					<svg
						className="w-4 h-4 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
				<input
					ref={inputRef}
					className={twMerge(
						"ml-4 text-sm bg-transparent select-none",
						isCompleted && "line-through text-gray-400",
					)}
					// defaultValue={todo}
					onChange={evt => {
						setText(evt.target.value);
						onEdit(text);
					}}
					value={text}
					disabled={!isEdit}
				/>
				{/* <span className="ml-4 text-sm">{todo}</span> */}
				<div className="ml-auto grid gap-2 grid-cols-2">
					<TrashIcon
						aria-hidden="true"
						className="h-8 w-8 flex-none group-hover:text-red-500 text-transparent hover:bg-red-200 rounded-md p-1.5"
						onClick={onDelete}
					/>
					<PencilIcon
						aria-hidden="true"
						className="h-8 w-8 flex-none group-hover:text-orange-500 text-transparent hover:bg-orange-200 rounded-md p-1.5"
						onClick={() => setIsEdit(prev => !prev)}
					/>
				</div>
			</label>
		</div>
	);
}
