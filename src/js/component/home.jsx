import React , {useState} from "react";
import { ListGroup } from "react-bootstrap";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Lista = () => {
	const [lista , setLista] = useState(["Wash my hands", "Make the bed", "Wash my hands", "Eat", "Walk the dog"])
	const FuncionsetLista = () => {
		setLista([...lista, value]);
	} 
	const [value, setValue] = useState("");
	const handleChange = e => {
		setValue(e.target.value);
	};
	const handleKeypress = e => {
		if (e.key == "Enter") {
			FuncionsetLista();
		}
	};
	const deleteItem = (index) => {
		const listCopy =[...lista]
		listCopy.splice(index, 1)
    	setLista(listCopy);
		
	}
	return (
	<>	
	<input value = {value} onChange={handleChange} onKeyPress={handleKeypress}  ></input>	
	<ListGroup className="grupolista"> 
	{lista.map((elemento, index) => {
		return (
			<>
			<ListGroup.Item className="Item"> 
			<span>{elemento}</span> 
			<span className="x" onClick={() => deleteItem(index)}>x</span>
			</ListGroup.Item>
			</>
		)
	})}
	</ListGroup>
	<div className="contador">
			
			{lista.length} item left
	</div>

	</>
	);
};


const Home = () => {
	return(
	<div className="container">
		<span className="titulo">todos</span>
		<Lista />
	</div>
	);

	
};

export default Home;
