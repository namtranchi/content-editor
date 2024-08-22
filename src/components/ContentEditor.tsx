import { useState } from "react";

import TinyMCE from "./TinyMCE";

export default function ContentEditor() {
	const [editorState, setEditorState] = useState<string>("");

	const handleChangeEditor = (content: string) => {
		setEditorState(content);
	};

	return (
		<div className="wrap-editor">
			<TinyMCE value={editorState} onEditorChange={handleChangeEditor} />
		</div>
	);
}
