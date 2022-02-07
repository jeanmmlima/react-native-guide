# Guia Básico React Native

## Excutando projetos do repositório

Para executar os projetos do repositório, você vai precisar dos módulos necessários: *node_modules* deve estar dentro do diretório do projeto desejado.
Para obter *node_modules*: 
1. Crie um novo projeto react native como descrito nos próximos tópicos, acesse o diretório do projeto, copie o diretório *node_modules* e cole-o no diretório do projeto que você deseja executar. 

## Configração do Ambiente

1. Instalar versão mais recente LTS Node.js: [aqui](https://nodejs.org/en/). A versão utilizada para desenvolvimento do guia foi a 14.17. Para testar se o Node foi instalado corretamente, abra o terminal e execute abaixo. Deve retornar a versão do Node que foi instalada.
```
node -v
```
2. Instalar o Expo-CLI. No terminal, rode o seguinte comando:
```
npm install --global expo-cli
```

## Criando seu primeiro app

1. No terminal, rode o comando abaixo. Obs: Você pode atribuir qualquer nome ao seu projeto, no exemplo usei *"meu-primeiro-app"*.
```
expo init meu-primeiro-app
```

## Rodando o seu app

1. Acesse o diretório do seu app e execute o comando *npm start*.
```
cd meu-primero-app
npm start
```

