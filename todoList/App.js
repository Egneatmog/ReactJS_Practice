import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		setToDos((currentArray) => [toDo, ...currentArray]);
		setToDo("");
	};
	const delToDo = (event) => {
		if (event.target.checked)
			setToDos((currentArray) => currentArray.filter((todos) => todos !== event.target.value));

		console.log(event.target.value, "asdf");
		console.log(
			toDos.map((item, index) => (
				<div key={index}>
					<input type="checkbox" value={index} name="toDos" onClick={delToDo} />
					<label htmlFor="toDos">{item}</label>
				</div>
			))
		);
	};
	return (
		<div>
			<h1>My To Dos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={toDo} onChange={onChange}></input>
				<button>Add To Do</button>
			</form>
			<hr />
			{toDos.map((item, index) => (
				<div key={index}>
					<input type="checkbox" value={index} name="toDos" onClick={delToDo} />
					<label htmlFor="toDos">{item}</label>
				</div>
			))}
		</div>
	);
}

export default App;
