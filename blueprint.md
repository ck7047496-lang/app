## 🧪 Prova Técnica – Desenvolvedor Full Stack (Java + Angular)

### 🎯 Objetivo

Criar um *sistema web bancário* completo com as seguintes funcionalidades principais:

---

### 🛠️ Tecnologias Obrigatórias

*Backend (Java):*

*   Java 17
*   Spring Boot
*   Spring Security
*   Spring Data JPA
*   Hibernate
*   Lombok
*   RabbitMQ
*   Banco de dados: Oracle

*Frontend (Angular):*

*   Angular 20+ (Seguindo as melhores práticas e últimas features)

---

### 📌 Descrição do Projeto

Você deverá criar uma aplicação web simulando um *banco digital*, com os seguintes módulos:

#### 1. Cadastro de Cliente

*   Tela de cadastro (Frontend em Angular)
*   Armazenamento dos dados no banco de dados Oracle
*   Após o cadastro, deve ser enviada uma requisição (RabbitMQ) para análise do gerente

#### 2. Aprovação de Cadastro

*   O gerente deve ter uma tela para *aprovar ou reprovar* o cadastro do cliente
*   Apenas após a aprovação, o cliente pode acessar a plataforma

#### 3. Plataforma do Cliente

Após ser aprovado:

*   O cliente poderá fazer login
*   Consultar o saldo da sua conta (inicialmente zero)
*   Solicitar *empréstimo de até R\$10.000, em **até 24 parcelas, com **juros de 1% ao mês*

#### 4. Regras do Empréstimo

*   O cliente só pode solicitar empréstimo *uma única vez*
*   Só pode haver *um empréstimo ativo* por cliente
*   Após aprovação do gerente, o valor é *disponibilizado imediatamente* na conta do cliente

---

### 🔒 Segurança

*   A autenticação deve ser feita com Spring Security
*   Use roles distintas para *clientes* e *gerentes*

---

### ✅ Requisitos Técnicos

*   Integração assíncrona entre cadastro e aprovação via *RabbitMQ*
*   Backend com Spring Boot seguindo boas práticas de API REST
*   Persistência com Hibernate + Spring Data JPA
*   Banco de dados: Oracle
*   Frontend com Angular 20+, consumindo os endpoints do backend
*   Aplicação deve rodar localmente com instruções claras de como subir o ambiente

---

### 📦 Entregáveis

*   Código-fonte completo (GitHub ou ZIP)
*   README com:

    *   Instruções de execução
    *   Documentação dos endpoints
    *   Usuários de exemplo (cliente e gerente)
*   Scripts SQL para criação de schema e tabelas no Oracle

---

### 🧠 Diferenciais (não obrigatórios, mas contam pontos!)

*   Testes automatizados (unitários ou de integração)
*   Documentação Swagger/OpenAPI

## Plano de Desenvolvimento

### Fase 1: Configuração do Projeto e Frontend Base (Foco Angular)

#### Objetivo da Fase
Configurar a estrutura básica do projeto Angular, incluindo roteamento, um componente de cabeçalho e estilização global. Esta fase irá estabelecer as bases para os painéis de cliente e gerente.

#### Passos Detalhados

1.  **Criação do `blueprint.md` (Geral)**
    *   Criar um arquivo `blueprint.md` no diretório raiz do projeto. Este arquivo documentará a visão geral do projeto, as funcionalidades detalhadas e o plano de desenvolvimento atual.
2.  **Verificação da Versão do Angular (Frontend)**
    *   Confirmar que o projeto Angular está configurado com a versão mais recente compatível (Angular 20+).
3.  **Atualização de `app.config.ts` (Frontend)**
    *   Configurar `app.config.ts` para fornecer módulos ou serviços globais necessários, como `provideHttpClient()` para chamadas de API, `provideRouter()` para roteamento e `provideAnimations()` para futuras animações.
4.  **Criação de `app.routes.ts` (Frontend)**
    *   Definir as rotas para a aplicação. Inicialmente, isso incluirá rotas para uma página de login, um painel de cliente e um painel de gerente.
5.  **Criação de `AppComponent` (`src/app/app.ts`) (Frontend)**
    *   Garantir que o `AppComponent` principal esteja configurado corretamente, utilizando `ChangeDetectionStrategy.OnPush` e importando `RouterOutlet` para roteamento.
6.  **Criação de `HeaderComponent` (`src/app/components/header/header.ts`, `header.html`, `header.css`) (Frontend)**
    *   Gerar um componente de cabeçalho standalone.
    *   Este componente conterá navegação básica (ex: Home, Login).
    *   Aplicar `ChangeDetectionStrategy.OnPush`.
7.  **Integração de `HeaderComponent` em `AppComponent` (Frontend)**
    *   Adicionar o seletor do `HeaderComponent` ao `app.html`.
8.  **Criação de `HomePage` (`src/app/pages/home/home.ts`, `home.html`, `home.css`) (Frontend)**
    *   Gerar um componente de página Home standalone.
    *   Esta será a página de destino padrão.
    *   Aplicar `ChangeDetectionStrategy.OnPush`.
9.  **Estilização Global em `src/app/app.css` (Frontend)**
    *   Definir variáveis CSS para cores e fontes.
    *   Aplicar estilos básicos para um design limpo e moderno, garantindo responsividade.
10. **Verificação e Ajustes (Geral)**
    *   Executar `ng build` para compilar o projeto Angular e verificar erros.
    *   Realizar ajustes necessários com base nos erros do compilador.

### Fase 2: Autenticação e Rotas Protegidas no Frontend (Foco Angular)

#### Objetivo da Fase
Implementar a funcionalidade de login, criar componentes para os painéis do cliente e gerente, e configurar a proteção de rotas no Angular com base nas roles do usuário.

#### Passos Detalhados

1.  **Atualização do `blueprint.md`**
    *   Atualizar o arquivo `blueprint.md` com os detalhes da Fase 2.
2.  **Criação de `LoginComponent` (`src/app/pages/login/login.ts`, `login.html`, `login.css`) (Frontend)**
    *   Gerar um componente de login standalone.
    *   Implementar um formulário reativo para username e password.
    *   Adicionar `ChangeDetectionStrategy.OnPush`.
    *   Adicionar estilos para um formulário de login visualmente atraente.
3.  **Atualização de `app.routes.ts` com a rota de login (Frontend)**
    *   Adicionar a rota para o `LoginComponent`.
4.  **Criação de `AuthService` (`src/app/services/auth.service.ts`) (Frontend)**
    *   Gerar um serviço singleton para lidar com a lógica de autenticação (simulação inicial).
    *   Implementar métodos para `login()` (retornando um token simulado e role) e `logout()`.
    *   Usar `inject(HttpClient)` para futuras chamadas de API.
    *   Armazenar o token e a role no `localStorage` ou em um sinal de estado global.
5.  **Criação de `ClientDashboardComponent` (`src/app/pages/client-dashboard/client-dashboard.ts`, `client-dashboard.html`, `client-dashboard.css`) (Frontend)**
    *   Gerar um componente para o painel do cliente standalone.
    *   Exibir uma mensagem de boas-vindas.
    *   Aplicar `ChangeDetectionStrategy.OnPush`.
6.  **Criação de `ManagerDashboardComponent` (`src/app/pages/manager-dashboard/manager-dashboard.ts`, `manager-dashboard.html`, `manager-dashboard.css`) (Frontend)**
    *   Gerar um componente para o painel do gerente standalone.
    *   Exibir uma mensagem de boas-vindas.
    *   Aplicar `ChangeDetectionStrategy.OnPush`.
7.  **Implementação de Guards de Rota (`src/app/guards/auth.guard.ts`, `role.guard.ts`) (Frontend)**
    *   Criar um `AuthGuard` para verificar se o usuário está autenticado antes de acessar rotas protegidas.
    *   Criar um `RoleGuard` para verificar as permissões do usuário (cliente ou gerente) antes de permitir o acesso a rotas específicas.
    *   Usar a função `inject()` dentro dos guards.
8.  **Atualização de `app.routes.ts` com rotas protegidas (Frontend)**
    *   Aplicar os `AuthGuard` e `RoleGuard` às rotas de `client-dashboard` e `manager-dashboard`.
9.  **Integração do `AuthService` com `LoginComponent` (Frontend)**
    *   No `LoginComponent`, injetar o `AuthService` e chamar o método `login()` quando o formulário for submetido.
    *   Redirecionar o usuário para o dashboard apropriado após o login bem-sucedido.
10. **Ajuste do `HeaderComponent` para exibir links dinamicamente (Frontend)**
    *   Atualizar o `HeaderComponent` para mostrar/esconder links de dashboard e logout com base no status de autenticação e role do usuário (usando `AuthService`).
11. **Verificação e Ajustes (Geral)**
    *   Executar `ng build` para compilar o projeto Angular e verificar erros.
    *   Realizar ajustes necessários com base nos erros do compilador.
    *   Testar a funcionalidade de login e a proteção de rotas no navegador.

### Fase 3: Cadastro de Cliente e Comunicação Assíncrona (Frontend + Backend)

#### Objetivo da Fase
Implementar a tela de cadastro de cliente no frontend e simular a comunicação assíncrona com o backend para análise do gerente, utilizando um serviço mock no frontend.

#### Passos Detalhados

1.  **Atualização do `blueprint.md`**
    *   Atualizar o arquivo `blueprint.md` com os detalhes da Fase 3.
2.  **Criação de `RegisterComponent` (`src/app/pages/register/register.ts`, `register.html`, `register.css`) (Frontend)**
    *   Gerar um componente de cadastro standalone.
    *   Implementar um formulário reativo para os dados do cliente (nome, email, CPF, etc.).
    *   Adicionar `ChangeDetectionStrategy.OnPush`.
    *   Adicionar estilos para um formulário de cadastro visualmente atraente.
3.  **Atualização de `app.routes.ts` com a rota de cadastro (Frontend)**
    *   Adicionar a rota para o `RegisterComponent`.
4.  **Atualização do `AuthService` ou Criação de `UserService` (Frontend)**
    *   Para simplificar a simulação no frontend, manteremos a lógica no `AuthService` por enquanto ou criar um `UserService` dedicado se a complexidade aumentar. Por hora vamos fazer no `AuthService` e depois refatoramos.
    *   Adicionar um método `registerUser(userData: any)` que simule o envio de dados para o backend (inicialmente retornando um Observable `of()` para simulação).
5.  **Integração do `AuthService` (ou `UserService`) com `RegisterComponent` (Frontend)**
    *   No `RegisterComponent`, injetar o `AuthService` e chamar o método `registerUser()` quando o formulário for submetido.
    *   Simular o envio da requisição para o RabbitMQ (no frontend, isso será apenas uma simulação, talvez um `setTimeout` para atrasar a resposta).
    *   Exibir uma mensagem de sucesso ou erro para o usuário.
6.  **Ajuste do `HeaderComponent` para incluir o link de cadastro (Frontend)**
    *   Adicionar um link "Cadastre-se" no cabeçalho, visível quando o usuário não está autenticado.
7.  **Verificação e Ajustes (Geral)**
    *   Executar `ng build` para compilar o projeto Angular e verificar erros.
    *   Realizar ajustes necessários com base nos erros do compilador.
    *   Testar a funcionalidade de cadastro no navegador.

### Fase 4: Backend - Estrutura Inicial e Cadastro de Cliente

#### Objetivo da Fase
Configurar o ambiente inicial do backend com Spring Boot, Spring Data JPA, e implementar a API de cadastro de cliente, incluindo a comunicação com o RabbitMQ.

#### Passos Detalhados

1.  **Atualização do `blueprint.md`**
    *   Atualizar o arquivo `blueprint.md` com os detalhes da Fase 4.
2.  **Configuração Inicial do Projeto Spring Boot (Backend)**
    *   Criar uma nova pasta `backend` no diretório raiz do projeto.
    *   Inicializar um projeto Spring Boot com as dependências: `Spring Web`, `Spring Data JPA`, `Spring Security`, `Lombok`, `AMQP (RabbitMQ)`, `Oracle Driver`.
    *   (Observação: Não consigo criar o projeto Spring Boot diretamente, mas vou descrever os passos e os arquivos esperados).
3.  **Configuração do `application.properties` (Backend)**
    *   Configurar as propriedades do banco de dados Oracle e do RabbitMQ.
4.  **Criação da Entidade `Client` (Backend)**
    *   Definir a entidade `Client` com campos como ID, nome, email, CPF, senha, status (PENDING, APPROVED, REJECTED), e role (CLIENT).
5.  **Criação do Repositório `ClientRepository` (Backend)**
    *   Criar uma interface de repositório que estenda `JpaRepository` para a entidade `Client`.
6.  **Criação do `AuthService` (Backend)**
    *   Criar um serviço para lidar com a lógica de negócio de autenticação e registro.
    *   Implementar o método `registerClient(Client client)` que salve o cliente no banco de dados com status `PENDING` e envie uma mensagem para o RabbitMQ.
7.  **Criação do `AuthController` (Backend)**
    *   Criar um controlador REST para o endpoint de registro (`/api/auth/register`).
    *   Receber os dados do cliente e chamar o `AuthService`.
8.  **Configuração do RabbitMQ (Backend)**
    *   Configurar um `Queue`, `Exchange` e `Binding` para o processamento de aprovação de cadastro.
    *   (Isso envolverá classes de configuração específicas do RabbitMQ).
9.  **Criação do Listener RabbitMQ (Backend)**
    *   Criar um componente que escute mensagens na fila de cadastro (simulando a análise do gerente).
    *   Este listener irá processar a mensagem e atualizar o status do cliente no banco de dados para `APPROVED` ou `REJECTED`.
10. **Ajuste da comunicação Frontend-Backend (Frontend)**
    *   No `AuthService` do frontend, alterar o método `registerUser` para fazer uma requisição HTTP POST real para o endpoint `/api/auth/register` do backend.
11. **Verificação e Testes (Geral)**
    *   Compilar e rodar o backend (instruções de como fazer isso serão fornecidas no `README` ou aqui).
    *   Testar o cadastro de cliente via frontend, observando o log do backend e a simulação de mensagem no RabbitMQ.
    *   (Não consigo rodar o backend diretamente, mas vou te guiar nos arquivos e comandos que você precisaria usar).

### Fase 5: Aprovação de Cadastro e Login com Spring Security (Backend)

#### Objetivo da Fase
Implementar a funcionalidade de login com Spring Security no backend, permitindo que clientes aprovados e gerentes acessem o sistema.

#### Passos Detalhados

1.  **Atualização do `blueprint.md`**
    *   Atualizar o arquivo `blueprint.md` com os detalhes da Fase 5.
2.  **Criação de `UserDetailsServiceImpl` (Backend)**
    *   Implementar a interface `UserDetailsService` para carregar detalhes do usuário (cliente ou gerente) do banco de dados para o Spring Security.
    *   Mapear as roles `CLIENT` e `MANAGER` para `GrantedAuthority`.
3.  **Ajuste de `SecurityConfig` (Backend)**
    *   Configurar `AuthenticationManager` e adicionar filtros JWT (se for usar JWT para autenticação baseada em token). Para esta fase, focaremos em autenticação baseada em sessão/formulário simples com Spring Security.
    *   Definir regras de autorização baseadas em roles para endpoints específicos (e.g., `/api/client/**` para `CLIENT`, `/api/manager/**` para `MANAGER`).
4.  **Ajuste do `AuthController` para Login (Backend)**
    *   Adicionar um endpoint `/api/auth/login` que receba credenciais, autentique o usuário via Spring Security e retorne informações do usuário (ex: role, se autenticado).
5.  **Ajuste do `AuthService` (Backend) para Login**
    *   Adicionar um método `authenticateUser(username, password)` que utilize o `AuthenticationManager` do Spring Security.
6.  **Ajuste do `AuthService` (Frontend) para Login Real**
    *   Modificar o método `login` para fazer uma requisição HTTP POST real para `/api/auth/login` do backend.
    *   Capturar o token e a role da resposta do backend e armazenar no frontend.
7.  **Criação de `ManagerController` (Backend)**
    *   Criar um controlador REST para gerenciar a aprovação/rejeição de cadastros.
    *   Endpoint: `/api/manager/approve-registration/{clientId}` e `/api/manager/reject-registration/{clientId}`.
    *   Estes endpoints serão protegidos por role `MANAGER`.
    *   Chamarão métodos no `AuthService` (backend) para atualizar o status do cliente.
8.  **Ajuste de `ManagerDashboardComponent` (Frontend)**
    *   Implementar a listagem de clientes com status `PENDING`.
    *   Adicionar botões para "Aprovar" e "Rejeitar" ao lado de cada cliente.
    *   Fazer chamadas HTTP para os endpoints do `ManagerController` no backend.
9.  **Verificação e Testes (Geral)**
    *   Compilar e rodar o backend.
    *   Testar o login de cliente e gerente.
    *   Verificar o acesso às rotas protegidas (painel do cliente e painel do gerente).
    *   Testar a aprovação/rejeição de cadastros pelo painel do gerente.

### Fase 6: Plataforma do Cliente - Saldo e Empréstimo (Frontend + Backend)

#### Objetivo da Fase
Implementar a funcionalidade de consulta de saldo e solicitação de empréstimo no painel do cliente, e o gerenciamento de empréstimos no painel do gerente, com a lógica de negócio correspondente no backend.

#### Passos Detalhados

1.  **Atualização do `blueprint.md`**
    *   Atualizar o arquivo `blueprint.md` com os detalhes da Fase 6.
2.  **Criação da Entidade `Account` (Backend)**
    *   Definir a entidade `Account` para armazenar o saldo do cliente. Relacionar com a entidade `Client`.
3.  **Criação do Repositório `AccountRepository` (Backend)**
    *   Criar uma interface de repositório para a entidade `Account`.
4.  **Criação da Entidade `Loan` (Backend)**
    *   Definir a entidade `Loan` com campos como valor, número de parcelas, juros, status (PENDING, APPROVED, REJECTED, PAID), e relacionamento com `Client`.
5.  **Criação do Repositório `LoanRepository` (Backend)**
    *   Criar uma interface de repositório para a entidade `Loan`.
6.  **Ajuste de `ClientService` (Backend) ou Criação de `AccountService` e `LoanService` (Backend)**
    *   Criar `AccountService` para gerenciar contas de clientes (criar conta ao aprovar cliente, atualizar saldo).
    *   Criar `LoanService` para gerenciar empréstimos (solicitar, aprovar, rejeitar).
    *   Injetar os repositórios necessários.
7.  **Ajuste do `RegistrationApprovalListener` (Backend)**
    *   Ao aprovar um cliente, criar uma `Account` para ele com saldo inicial zero.
8.  **Criação de `ClientController` (Backend)**
    *   Criar um controlador REST para endpoints relacionados ao cliente:
        *   `/api/client/account/balance`: Retornar o saldo do cliente logado.
        *   `/api/client/loan/request`: Receber solicitação de empréstimo.
        *   Ambos protegidos por role `CLIENT`.
9.  **Ajuste de `ManagerController` (Backend)**
    *   Adicionar endpoints para listar solicitações de empréstimo pendentes:
        *   `/api/manager/loans/pending`: Listar empréstimos pendentes.
        *   `/api/manager/loan/approve/{loanId}`: Aprovar empréstimo e transferir valor para a conta do cliente.
        *   `/api/manager/loan/reject/{loanId}`: Rejeitar empréstimo.
10. **Ajuste de `ClientDashboardComponent` (Frontend)**
    *   Exibir o saldo do cliente.
    *   Implementar um formulário para solicitação de empréstimo (valor, parcelas).
    *   Exibir o status do empréstimo atual, se houver.
    *   Fazer chamadas HTTP para os endpoints do `ClientController`.
11. **Ajuste de `ManagerDashboardComponent` (Frontend)**
    *   Adicionar uma seção para listar solicitações de empréstimo pendentes.
    *   Adicionar botões "Aprovar" e "Rejeitar" para empréstimos.
    *   Fazer chamadas HTTP para os endpoints do `ManagerController`.
12. **Verificação e Testes (Geral)**
    *   Compilar e rodar o backend.
    *   Testar a consulta de saldo e a solicitação de empréstimo como cliente.
    *   Testar a aprovação/rejeição de empréstimos como gerente.

### Fase 7: Refinamento de Design e Preparação para Testes

#### Objetivo da Fase
Refinar o design da aplicação, especialmente a tela de login, para se alinhar com a imagem de referência (mantendo a originalidade Angular), e fornecer instruções claras para você testar as funcionalidades com as credenciais específicas.

#### Passos Detalhados

1.  **Atualização do `blueprint.md`**
    *   Atualizar o arquivo `blueprint.md` com os detalhes da Fase 7.
2.  **Refinamento do Design do `LoginComponent` (Frontend)**
    *   Ajustar os estilos em `src/app/pages/login/login.css` para um visual mais moderno, com fundo escuro, campos de input e botões inspirados na imagem fornecida, mas adaptando para a estética Angular e as variáveis de tema existentes.
    *   Adicionar um título mais chamativo no HTML.
3.  **Refinamento do Design Geral (Frontend)**
    *   Revisar `src/app/app.css` para garantir que as cores e fontes de tema estejam bem definidas e que o design geral seja consistente e profissional.
4.  **Ajuste do `AuthService` para Credenciais Fixas do Gerente (Temporário para Teste)**
    *   No `AuthService` do frontend, modificar temporariamente o método `login` para que, se o username for `gerentecleiton` e a senha `687-813`, ele simule um login bem-sucedido com a role `MANAGER`. Isso será apenas para fins de teste no frontend antes do backend completo. *No cenário real com o backend, o Spring Security lidará com isso.*
    *   Explicar que isso é um mock para facilitar o teste no frontend e que será removido/ajustado na integração final.
5.  **Preparação de Instruções para Teste (Geral)**
    *   Fornecer um passo a passo claro para você:
        *   Como iniciar o frontend.
        *   Instruções para iniciar o backend (recapitular, com a adição de como criar o usuário gerente no banco de dados).
        *   Credenciais de teste para cliente e gerente.
        *   Cenários de teste para cadastro, login, saldo, solicitação de empréstimo e aprovação/rejeição.
6.  **Verificação e Ajustes (Geral)**
    *   Executar `ng build` para compilar o projeto Angular e verificar erros.
    *   Realizar ajustes necessários com base nos erros do compilador.
    *   Instruções para você testar no navegador.
