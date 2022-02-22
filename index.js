class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      is_done: false, 
      toDoList: [],
      strikeThrough: []
  };
}

saveToDoListItem = toDoItem => {
  this.setState({
      toDoList: [...this.state.toDoList, toDoItem]
  });
};

/*evento para o texto ficar riscado */
strikethrough = event => {
  const element = event.target;
  element.classList.toggle("crossed-line");
};
  
  

        
  

  render() {
    return <li id="task" onClick={this.strikethrough}>
  
    {this.props.task}
    
    </li>;
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to_do_list: ["Finish this test", "Get hired", "Change the world"],
      value: "",
    };

    
	this.handleChange=this.handleChange.bind(this)
	this.addTask=this.addTask.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addTask() {

	this.state.to_do_list.push(this.state.value)
	this.setState({value:""})
  }

  render() {
    return (

      <div id="container">
        <h2 id="title">Add a new task to your to-do list!</h2>
        
        
        {/* Caixa de input para adicionar uma nova tarefa */}
        <input id='input'
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />

        {/* Botão para adicionar nova tarefa */}
        <button id="btnAdd" onClick={this.addTask}>Add</button>

        <ul>
          {this.state.to_do_list.map((task_text) => (
            <ToDoItem task={task_text} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ToDoList />, document.getElementById("root"));
