# W3lcome - Challenge 

## Monorepo
This monorepo contains the following applications:
* API ``./apps/api``
    -  Restfull API in express JS with Typescript
* Web ``./apps/web`` 
    - frontend to consume api in NextJS with Typescript

Common scripts for all applications:

```
npm run dev
```

# API

```cd ./apps/api```

## RFs (Requisitos Funcionais)

- [ ]  Deve ser possível visualizar as tarefas
- [ ]  Deve ser possível fazer paginação das tarefas 
- [ ]  Deve ser possível criar uma tarefa
- [ ]  Deve ser possível atualizar uma tarefa
- [ ]  Deve ser possível deletar uma tarefa


## RNs (Regras de Negócio)

- [ ]  Deve ser possível enviar um limit e um offset para o

## RNFs (Requisitos não-funcionais)



GET /tasks: Retorna um array de objetos de tarefa no formato JSON. Esse endpoint pode receber um limit e um offset para ser possivel fazer paginação.
POST /tasks: Aceita um objeto de tarefa no corpo da requisição (formato JSON) e adiciona-o ao array de tarefas. Adicione as validações que achar necessárias.
PATCH /tasks: Aceita um id de uma tarefa e um objeto de tarefa no corpo da requisição (formato JSON) e atualiza a tarefa no array. Adicione as validações que achar necessárias.
DELETE /tasks: Aceita um id de uma tarefa e remove a tarefa do array. Adicione as validações que achar necessárias.

const tasks = [
{ id: 1, titulo: "Aprender React", concluida: true },
{ id: 2, titulo: "Estudar NodeJS", concluida: false },
{ id: 3, titulo: "Praticar TypeScript", concluida: false }
];



