# ✅ Board de Tarefas - Desafio 03 | Módulo de JavaScript - Escola DNC

Este projeto foi desenvolvido como parte do **Desafio 03** do módulo de **JavaScript** da **Escola DNC**, com o objetivo de praticar e aplicar os principais conceitos da linguagem na criação de uma aplicação **To-Do List** (quadro de tarefas).

---

## 📌 Objetivo

Criar uma aplicação web onde o usuário possa:

- Adicionar tarefas com nome e etiqueta (tag)
- Visualizar todas as tarefas cadastradas
- Marcar tarefas como concluídas
- Visualizar a contagem de tarefas finalizadas
- Observar um layout responsivo em diferentes tamanhos de tela

---

## ⚙️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página  
- **CSS3**: Estilização e responsividade  
- **JavaScript (ES6+)**: Lógica da aplicação (DOM, eventos, estado)  
- **Google Fonts**: Fontes Rubik e Inter  


---

## 💻 Funcionalidades

✅ Cadastro de tarefas com nome e etiqueta  
✅ Exibição dinâmica das tarefas  
✅ Botão "Concluir" para marcar a tarefa como feita  
✅ Estilo visual diferenciado para tarefas concluídas  
✅ Contador de tarefas concluídas no rodapé  
✅ Validação de campos obrigatórios  
✅ Layout adaptado para dispositivos móveis  

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone este repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git

2. cd seu-repo

3. Abra o arquivo index.html no navegador

Clique duas vezes ou utilize a extensão Live Server do VSCode.

🧠 Lógica JavaScript
A lógica do projeto é gerenciada com um array de objetos tasks, cada um representando uma tarefa com:

{
  id: "task-1",
  task: "Descrição da tarefa",
  tag: "Categoria",
  date: "DD/MM/AAAA",
  done: false
}

🔧 Funções Principais
createNewTask(): Cria uma nova tarefa ao enviar o formulário

renderTasks(): Re-renderiza todas as tarefas na tela

markTaskAsDone(taskObj): Marca a tarefa como concluída e re-renderiza

updateFooterCount(): Atualiza o rodapé com o número de tarefas concluídas

validateForm(): Verifica se os campos foram preenchidos

📱 Responsividade
Com uso de media queries, o layout se adapta automaticamente para:

Celulares: Campos e botões reorganizados verticalmente

Tablets e Desktop: Layout em linha, com maior aproveitamento da largura

📌 Exemplos de Uso
Adicionar uma tarefa: Preencha os campos e clique no botão +

Concluir uma tarefa: Clique no botão "Concluir" abaixo da tarefa

Ver status: Tarefas concluídas aparecem com texto riscado e botão desativado

Contador: Rodapé atualiza automaticamente o número de tarefas finalizadas

📦 Melhorias Futuras
 Armazenamento no localStorage

 Filtro por etiquetas

 Opção de editar tarefas

 Ordenação por data

 Modo escuro

🙌 Créditos
Projeto desenvolvido como parte da formação em Programação Full Stack na Escola DNC.

✍️ Autor
Nelson Lima
📧 nelson.lima1989@hotmail.com
🔗 LinkedIn

📄 Licença
Este projeto é apenas para fins educacionais e não possui licença comercial.

“A prática constante é o caminho para o domínio do desenvolvimento.” 🚀