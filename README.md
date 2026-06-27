# 🎵 Trybetunes

O **Trybetunes** é uma aplicação completa de streaming e organização de músicas em React. O projeto simula uma plataforma real de reprodução musical, permitindo que a pessoa usuária faça login, pesquise por artistas ou bandas, liste álbuns disponíveis, visualize faixas e ouça prévias de músicas. Além disso, a aplicação conta com recursos para favoritar faixas, acessar uma lista personalizada de favoritos e gerenciar as informações do perfil do usuário.

Toda a arquitetura da aplicação foi projetada focando no gerenciamento de rotas complexas, controle de estados globais e locais, e o consumo assíncrono de APIs simuladas.

---

## 🚀 O que foi desenvolvido

A aplicação engloba desde a camada de autenticação até o gerenciamento de mídias e estados assíncronos. As principais funcionalidades desenvolvidas foram:

*   **Roteamento Dinâmico:** Implementação de rotas protegidas utilizando `BrowserRouter`, `Routes`, `Route` e o componente `Outlet` para estruturar um layout pai (`Layout`) que compartilha o cabeçalho (`Header`) entre as páginas da aplicação (exceto na tela de Login).
*   **Formulário de Identificação e Login:** Criação de uma tela de login com validação de campos em tempo real (mínimo de 3 caracteres). Ao submeter, a aplicação consome a função assíncrona `createUser` da `userAPI` e redireciona o usuário após o sucesso.
*   **Mecanismo de Busca de Álbuns:** Tela de pesquisa integrada à `searchAlbumsAPI`. O botão de busca valida se o termo possui ao menos 2 caracteres e exibe uma lista interativa de cards de álbuns baseados no artista digitado.
*   **Visualização de Mídias e Player Nativo:** Página do álbum selecionado utilizando parâmetros de URL (`/album/:id`) para buscar músicas específicas via `getMusics`. Renderização do componente `MusicCard` contendo um player de áudio HTML5 nativo (`<audio>`) para reprodução de prévias das faixas.
*   **Gerenciamento de Favoritos (Mecanismo Base e Bônus):** Criação de um controle visual com checkboxes estilizados usando imagens de coração (`checked_heart.png` / `empty_heart.png`) para favoritar músicas. Integração com métodos assíncronos `addSong` e `removeSong` da `favoriteSongsAPI` para persistência das faixas escolhidas.
*   **Feedback de Carregamento:** Controle rigoroso de estados assíncronos, exibindo telas ou mensagens de `Carregando...` de forma condicional enquanto as Promises das APIs estão pendentes.

---

## 🛠️ Tecnologias e Habilidades Utilizadas

*   **React (com Vite e TypeScript):** Framework base para a construção de componentes funcionais e tipagem estática.
*   **React Hooks (`useState` & `useEffect`):** Manipulação de estados locais (como o termo de busca, listas de álbuns, estados de carregamento) e controle de efeitos colaterais (chamadas de API ao montar componentes).
*   **React Router Dom (v6):** Navegação entre views sem recarregamento da página através de `Link` e `NavLink`.
*   **React Testing Library (RTL) & Vitest:** Framework e biblioteca utilizados para validação dos requisitos através de testes baseados no comportamento do usuário utilizando atributos `data-testid`.
*   **Linters (ESLint & Stylelint):** Garantia de código limpo, padronizado e livre de erros de formatação.

---

## 🔧 Como Instalar e Rodar o Projeto

1. Clone o repositório localmente:
   ```bash
   git clone git@github.com:tryber/sd-040-project-trybetunes-vite-ts.git
