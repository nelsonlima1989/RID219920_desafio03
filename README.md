# Lista de Tarefas Simples 📝

Este projeto foi feito como desafio da Escola DNC para colocar em prática tudo que aprendi no módulo de JavaScript 🚀.

---

## O que ele faz? 🤔

- Mostra uma lista de tarefas com título, tag, data de criação e status (concluída ✅ ou não ❌).  
- Permite adicionar novas tarefas pelo formulário (com checagem para não deixar campos vazios).  
- Dá para marcar as tarefas como concluídas com um clique, que risca o texto e atualiza o contador no rodapé 📊.  
- Guarda as tarefas numa lista na memória, tudo dinamicamente com JavaScript.

---

## Visual e experiência 🖌️

- Layout clean, com fundo claro (#f5f9ff) e conteúdo centralizado na tela para foco na lista.  
- Caixa principal (`main`) com fundo branco, cantos arredondados e sombra suave para destaque.  
- Tipografia moderna usando *Rubik* e *Inter*, com tamanhos adaptados para boa leitura.  
- Formulário de criação de tarefa alinhado horizontalmente em telas grandes e em coluna no mobile, garantindo ótima usabilidade.  
- Botões azuis com efeito hover para feedback visual.  
- Tags destacadas com bordas arredondadas e cores suaves para melhor identificação.  
- Tarefas concluídas riscadas e com cor mais clara, indicando status visualmente.  
- Rodapé com contador alinhado à direita, separado por linha sutil no topo.  
- **Design totalmente responsivo:**  
  - Adaptação automática para telas pequenas (até 767px), com empilhamento de elementos, inputs e botões que se ajustam à largura da tela, mantendo usabilidade e estética.  
  - Ajustes precisos de fontes, margens e espaçamentos para garantir conforto em qualquer dispositivo — desktop, tablet ou celular.

---

## Como funciona por dentro? 🔧

- As tarefas ficam guardadas num array chamado `tasks`, cada uma com um id único, descrição, tag, data e status.  
- Tem funções para:  
  - Criar IDs únicos para cada tarefa.  
  - Validar o formulário antes de criar uma tarefa nova.  
  - Criar o HTML para mostrar cada tarefa no site.  
  - Atualizar a lista toda na tela sempre que algo muda.  
  - Marcar as tarefas como feitas e atualizar a visualização.  
  - Resetar o formulário depois que a tarefa é adicionada.

---

## Como usar? 🖥️

1. Abra o arquivo HTML.  
2. Você vai ver algumas tarefas já criadas para começar.  
3. Preencha o formulário com a tarefa e a tag, e clique em adicionar.  
4. Clique em “Concluir” para marcar uma tarefa como feita.  
5. Veja o rodapé mostrando quantas tarefas você já concluiu 🎉.

---

## Tecnologias usadas ⚙️

- HTML, CSS e JavaScript puro (sem frameworks).  
- Manipulação do DOM para tudo acontecer na hora, sem precisar recarregar a página.  
- Eventos para capturar ações do usuário, como enviar formulário e clicar em botões.  
- CSS moderno com Flexbox para layout flexível e responsivo.  
- Fonte principal *Rubik* para modernidade e legibilidade.  

---

## O que pode melhorar? 💡

- Salvar as tarefas no navegador (LocalStorage) para não perder ao fechar a página.  
- Permitir editar e excluir tarefas.  
- Criar filtros para ver só tarefas de uma tag ou só as pendentes.  

---

## Quem fez? 🙋‍♂️

Nelson Lima - nelson.lima1989@hotmail.com

---

## Licença 📄

Projeto open-source sob licença MIT. Fique à vontade para usar e contribuir!

