[![DeepSource](https://app.deepsource.com/gh/memoize-cards/memoize.svg/?label=active+issues&show_trend=true&token=evWWUbzWfQCPjI9yCA1KeHxk)](https://app.deepsource.com/gh/memoize-cards/memoize/?ref=repository-badge)<br />
[![DeepSource](https://app.deepsource.com/gh/memoize-cards/memoize.svg/?label=resolved+issues&show_trend=true&token=evWWUbzWfQCPjI9yCA1KeHxk)](https://app.deepsource.com/gh/memoize-cards/memoize/?ref=repository-badge)<br />
[![Maintainability](https://api.codeclimate.com/v1/badges/a70488e2fdca047de298/maintainability)](https://codeclimate.com/github/memoize-cards/memoize/maintainability)<br />
[![Test Coverage](https://api.codeclimate.com/v1/badges/a70488e2fdca047de298/test_coverage)](https://codeclimate.com/github/memoize-cards/memoize/test_coverage)<br />
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f2d4e015f8984454a45ae9b0b68a1e1d)](https://app.codacy.com/gh/memoize-cards/memoize/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)<br />
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/f2d4e015f8984454a45ae9b0b68a1e1d)](https://app.codacy.com/gh/memoize-cards/memoize/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)<br />
[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# Memoize

[https://memoize.cards](https://memoize.cards)

[![](https://github-production-user-asset-6210df.s3.amazonaws.com/35740192/272021519-a7a90948-d276-47b4-be5b-1625a149148f.png)](https://youtu.be/SgztGwymZ6o)


Bem-vindo ao Memoize, um aplicativo avançado de flashcards projetado para otimizar o processo de aprendizado e memorização. Nossa plataforma oferece aos estudantes, profissionais em constante aprendizado e educadores uma abordagem inovadora e personalizada para aprimorar suas habilidades de estudo e retenção de informações essenciais.

- [Análise de Contexto](https://www.notion.so/An-lise-de-Contexto-da6b4e1aa0eb4ad9bc7ea5170b59f859?pvs=21)
- [Personas](https://www.notion.so/Personas-3106d35206ab4e718d6bba6151047fc8?pvs=21)
- [Benefícios e Justificativas](https://www.notion.so/Benef-cios-e-Justificativas-ee1c7ef669ac40c59ffce5682b8a7353?pvs=21)
- [Hipóteses](https://www.notion.so/Hip-teses-e826e9bcbfda41c9b10755c32a190656?pvs=21)
- [Premissas e Restrições](https://www.notion.so/Premissas-e-Restri-es-256375cd2b8a4802897134d31f043478?pvs=21)
- [Objetivos S.M.A.R.T](https://www.notion.so/Objetivos-S-M-A-R-T-d2c5fb52ec6e4840b81218ff1b3dbab2?pvs=21)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Variáveis de ambiente

O Memoize utiliza algumas variáveis de ambiente para configurar o comportamento da aplicação. Elas podem ser definidas no sistema operacional ou em um arquivo `.env` na raiz do projeto.

Aqui estão as variáveis de ambiente utilizadas pelo Memoize:

| Key | Description | Value |
| --- | --- | --- |
| ANALYZER_MODE | Define o modo de análise para o webpack-bundle-analyzer. |  |
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

2. Acesse o diretório do projeto usando o seguinte comando:

```bash
cd memoize
```

3. Instale as dependências do projeto usando o seguinte comando:

```bash
yarn install
```

4. Inicie o servidor de desenvolvimento usando o seguinte comando:

```bash
yarn start
```

5. Agora, você pode acessar a aplicação em seu navegador, acessando a URL [http://localhost:6001](http://localhost:3000/).

## Histórico de Lançamentos

Aqui estão os detalhes dos lançamentos do Memoize, incluindo as principais mudanças e atualizações em cada versão.

- [Releases](https://www.notion.so/demgoncalves/releases-702fd38a5b044f77a10f92e9c7e77ae8?pvs=21)

## Evolução do UX do Projeto

Visite nossa página de Evolução do UX para obter mais detalhes sobre como o Memoize evoluiu ao longo do tempo. Explore capturas de tela, relatórios de pesquisa e testes de usabilidade que destacam nosso compromisso com aprimorar a experiência do usuário.


- [UX Timeline](https://www.notion.so/demgoncalves/UX-Timeline-c1d250cc91ef437d91adb362f0831452?pvs=21)

## Licença

O Memoize é um projeto de código aberto licenciado sob a Licença CC BY-NC 4.0. **Isso significa que você pode utilizá-lo livremente em seus projetos pessoais, desde que não busque lucro com o uso e mantenha a atribuição ao autor original**. O uso em projetos comerciais não é permitido sob esta licença.

[![CC BY-NC 4.0](https://i.creativecommons.org/l/by-nc/4.0/80x15.png)](http://creativecommons.org/licenses/by-nc/4.0)

## Contato

Caso você tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato com **deMGoncalves** através do email [cleber.engineer@gmail.com](mailto:cleber.engineer@gmail.com).
