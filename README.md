# Aula 4

- Revisão
- Requisições GET para API com fetch()
- Adicionar resposta do GET em um estado com React
- Criação de um componente que faz Map
- Inputs Controlados
- Filtro com Inputs Controlados

* Endpoint de listagem de cursos: [GET] - https://6348cc5ea59874146b110e79.mockapi.io/courses

* Endpoint de criação de cursos:
  - [POST] - https://6348cc5ea59874146b110e79.mockapi.io/courses
  - Body: { title: "", description: "", instructor: "" }

# Aula 5

- Criação do componente de Input
- Criação do componente de Button recebendo a prop `children` e com duas variantes
- Rest operator nas props de um componente de _repassando_ essas props para o elemento HTML (componente Button)
- Named exports e Default exports
- Formulário de submit
- Campos de Input com validação de obrigatoriedade
- POST em uma api, mandando JSON para ela
- Estrutura de requests para api, separando-as de acordo com a responsabilidade

# Aula 6

- Axios
  - Instalação
  - Configuração de uma instância axios
    - baseURL
  - Métodos HTTP com axios
  - Trabalhos que não precisamos fazer, pois o próprio axios já lida
  - Diferença da resposta do axios para a fetch api do JS
- Separação de responsabilidades: comunicação com api, páginas, componentes e rotas.
- React Router
  - Instalação
  - BrowserRouter, Routes e Route
  - Criação das páginas
  - Transição entre páginas com Link
  - Transição entre páginas com useNavigate
  - Parâmetros dinâmicos para rotas com useParams

# Aula 7

- Edição de cursos
- Condicionais dentro do JSX
- Criação de um componente de Loading
- Fazer botão aceitar estado de carregamento
- Inserimos uma mensagem de carregamento nas seguintes situações
  - Carregando os detalhes de um curso
  - Estado de salvando/editando um curso
  - Carregando a listagem de cursos
  - Deletando um curso
- Requisição de detalhes de curso (GET)
- Requisição de atualização de curso (PUT)
- Iniciado uma nova aplicação de Blog
- Clean up da aplicação de blog
- Instalação das bibliotecas já conhecidas
- Overview sobre styled-components
  - Instalação
  - Como criar um componente estilizado
  - Como utilizar o componente estilizado
  - Estilos globais
