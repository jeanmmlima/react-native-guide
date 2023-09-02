import React, { Component } from 'react';

class ListaTarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: '',
      taskStatus: 'noPrazo',
      tasks: [],
    };
  }

  handleTitleChange = (event) => {
    this.setState({ taskTitle: event.target.value });
  };

  handleStatusChange = (event) => {
    this.setState({ taskStatus: event.target.value });
  };

  handleAddTask = () => {
    const { taskTitle, taskStatus } = this.state;

    if (taskTitle.trim() === '') {
      return; // Não adiciona tarefa vazia
    }

    const statusMap = {
      noPrazo: 'No Prazo',
      atrasada: 'Atrasada',
      proximoPrazo: 'Próximo ao Prazo',
    };

    const newTask = {
      title: taskTitle,
      status: statusMap[taskStatus], // Mapeia o valor para a descrição
    };

    this.setState((prevState) => ({
      taskTitle: '',
      taskStatus: 'noPrazo',
      tasks: [...prevState.tasks, newTask],
    }));
  };

  render() {
    const { taskTitle, taskStatus, tasks } = this.state;

    return (
      <div className="ListaTarefas">
        <h1>Lista de Tarefas</h1>
        <div>
          <label>Título da Tarefa:</label>
          <input
            type="text"
            value={taskTitle}
            onChange={this.handleTitleChange}
          />
        </div>
        <div>
          <label>Status da Tarefa:</label>
          <select value={taskStatus} onChange={this.handleStatusChange}>
            <option value="noPrazo">No Prazo</option>
            <option value="atrasada">Atrasada</option>
            <option value="proximoPrazo">Próximo ao Prazo</option>
          </select>
        </div>
        <button onClick={this.handleAddTask}>Adicionar Tarefa</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>Título:</strong> {task.title}, <strong>Status:</strong> {task.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaTarefas;
