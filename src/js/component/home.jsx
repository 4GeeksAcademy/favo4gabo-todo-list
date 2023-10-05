import React,{ useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	const eliminateTask = (index) => {
		setTodos(todos.filter(
			(t, currentIndex) => index != currentIndex))
	}
	const addTask = (event) => {
		console.log(event.key)
		if (event.key == "Enter") {
			setTodos([...todos, inputValue]);
			setInputValue ("")	
		}
	}
	return (
		<div className="container">
			<h1>To-do list</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown= {addTask}
						placeholder="que debes hacer?">
					</input>

				</li>
				{todos.map((item, index) =>
					
					<li className="d-flex justify-content-between w-100"> {item} {" "}				
					<i 
						className="fa-solid fa-trash" 
							onClick={() => eliminateTask (index)}></i>
					</li>)}		
						
			</ul>
			<div>{todos.length} tareas</div>
		</div>
	);
};

export default Home;
