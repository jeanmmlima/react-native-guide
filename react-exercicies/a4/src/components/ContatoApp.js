import React, { useState, useEffect } from 'react';

const ContatosApp = () => {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const adicionarContato = () => {
    if (nome !== '' && telefone !== '' && email !== '') {
      setContatos([...contatos, { nome, telefone, email }]);
      setNome('');
      setTelefone('');
      setEmail('');
    }
  };

  const removerContato = (index) => {
    const novoContatos = contatos.filter((_, i) => i !== index);
    setContatos(novoContatos);
  };

  useEffect(() => {
    document.title = `Contatos: ${contatos.length}`;
  }, [contatos]);

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <div>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button onClick={adicionarContato}>Adicionar Contato</button>
      </div>
      <h2>Contatos:</h2>
      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            {contato.nome} - {contato.telefone} - {contato.email}
            <button onClick={() => removerContato(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContatosApp;
