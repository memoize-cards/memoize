[![DeepSource](https://app.deepsource.com/gh/memoize-cards/memoize.svg/?label=active+issues&show_trend=true&token=evWWUbzWfQCPjI9yCA1KeHxk)](https://app.deepsource.com/gh/memoize-cards/memoize/?ref=repository-badge)<br />
[![DeepSource](https://app.deepsource.com/gh/memoize-cards/memoize.svg/?label=resolved+issues&show_trend=true&token=evWWUbzWfQCPjI9yCA1KeHxk)](https://app.deepsource.com/gh/memoize-cards/memoize/?ref=repository-badge)<br />
[![Maintainability](https://api.codeclimate.com/v1/badges/a70488e2fdca047de298/maintainability)](https://codeclimate.com/github/memoize-cards/memoize/maintainability)<br />
[![Test Coverage](https://api.codeclimate.com/v1/badges/a70488e2fdca047de298/test_coverage)](https://codeclimate.com/github/memoize-cards/memoize/test_coverage)<br />
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f2d4e015f8984454a45ae9b0b68a1e1d)](https://app.codacy.com/gh/memoize-cards/memoize/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)<br />
[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# Memoize

[https://memoize.cards](https://memoize.cards)

Bem-vindo ao Memoize, um aplicativo avançado de flashcards projetado para otimizar o processo de aprendizado e memorização. Nossa plataforma oferece aos estudantes, profissionais em constante aprendizado e educadores uma abordagem inovadora e personalizada para aprimorar suas habilidades de estudo e retenção de informações essenciais.

- [Introdução](https://www.notion.so/demgoncalves/Introdu-o-d8e79a6779db49088bfc418d63d41f91)
- [Valores](https://www.notion.so/demgoncalves/Valores-33425cfac5064e618dc566e9e7eaa144)
- [Arquitetura](https://www.notion.so/demgoncalves/Arquitetura-200cfcf567de4702bebeabc183b213f3)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Variáveis de ambiente

O Memoize utiliza algumas variáveis de ambiente para configurar o comportamento da aplicação. Elas podem ser definidas no sistema operacional ou em um arquivo `.env` na raiz do projeto.

Aqui estão as variáveis de ambiente utilizadas pelo Memoize:

| ANALYZER_MODE | Define o modo de análise para o webpack-bundle-analyzer. |  |
| --- | --- | --- |
| COOKIE_DOMAIN | Define o domínio no qual os valores do cookie são acessíveis. | localhost |
| HINTS | Define o nível de detalhe dos avisos na compilação. | warning |
| MAX_ASSET_SIZE | Define o tamanho máximo (em bytes) para um arquivo estático. | 2000000 |
| MAX_ENTRYPOINT_SIZE | Define o tamanho máximo (em bytes) para um ponto de entrada. | 2000000 |
| PORT | Define a porta na qual o servidor da aplicação será executado. | 6001 |
| PUBLIC_PATH | Define o caminho público para os arquivos da aplicação. | / |
| BUNDLE_STATS_BASELINE | Define se o baseline das estatísticas do pacote será usado. | true |
| SUPABASE_KEY | Chave de autenticação para o Supabase. |  |
| SUPABASE_URL | URL do servidor do Supabase. |  |

```
ANALYZER_MODE=
BUNDLE_STATS_BASELINE=true
COOKIE_DOMAIN=localhost
HINTS=warning
MAX_ASSET_SIZE=2000000
MAX_ENTRYPOINT_SIZE=2000000
PORT=6001
PUBLIC_PATH=/
SUPABASE_KEY=
SUPABASE_URL=
```

> Lembre-se de adicionar o arquivo .`env` no seu `.gitignore` para que as informações confidenciais não sejam versionadas.

## Comece aqui

Para começar a usar o Memoize, siga os seguintes passos:

1. Clone o repositório do Memoize em seu computador, usando o seguinte comando no terminal:

```bash
git clone https://github.com/memoize-cards/memoize.git
```

1. Acesse o diretório do projeto usando o seguinte comando:

```bash
cd memoize
```

1. Instale as dependências do projeto usando o seguinte comando:

```bash
yarn install
```

1. Inicie o servidor de desenvolvimento usando o seguinte comando:

```bash
yarn start
```

1. Agora, você pode acessar a aplicação em seu navegador, acessando a URL [http://localhost:6001](http://localhost:3000/).

## Licença

O Memoize é um projeto de código aberto licenciado sob a licença MIT. Isso significa que você **pode utilizá-lo livremente em seus projetos pessoais ou comerciais**, desde que mantenha a atribuição do autor original.

## Contato

Caso você tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato com **deMGoncalves** através do email [cleber.engineer@gmail.com](mailto:cleber.engineer@gmail.com).
