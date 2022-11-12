
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

# Boas-vindas ao repositório do projeto MongoDB Commerce!

Nesse projeto, trabalhei com o banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas.

<details>
  <summary>
    <strong>🐳 Como usar o Docker para este projeto</strong>
  </summary><br>

  - Para quem não possui o MongoDB instalado e está utilizando o docker, é necessário executar os testes localmente usando os seguintes passos:

  1. Acesse o terminal na raiz da pasta do projeto;
  2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`;
  3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
  4. No terminal do container, acesse o diretório `/app` mapeado no volume conforme o passo 2;
  > Para restaurar o banco de dados é necessário que você esteja dentro do diretório `/app`. Para mais detalhes, veja o tópico: "♻️ Restaurando o banco de dados `commerce`".
  5. Por fim, execute o script de testes do projeto: `./scripts/evaluate.sh`.
  Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

</details>

<details>
  <summary>
    <strong>♻️ Restaurando o banco de dados `commerce`</strong>
  </summary><br>

  > ⚠️ **Aviso:** Caso esteja utilizando Docker, certifique-se que tenha seguido os passos do tópico: "🐳 Como usar o Docker para este projeto", pois eles são determinantes para que siga as orientações abaixo.

  1. Abra o terminal e conecte-se à sua instância local do **MongoDB**.

  2. Quando sua instância estiver no ar e você estiver conectado a ela, digite `exit`. Com isso, você voltará ao terminal para iniciar a importação dos dados.

  3. Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados `commerce`:

  ```sh
  DBNAME=commerce ./scripts/resetdb.sh assets/produtos
  ```

  - A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

  ⚠️ **Importante**: tanto o script executado anteriormente quanto o script de execução local dos testes, restauram a base de dados `commerce`.
</details>

> **Caso você opte por não utilizar Docker para realizar os testes na sua máquina local**, é necessário que o clone do projeto seja realizado fora do diretório com nome `Área de Trabalho`. Isso quer dizer que, `Área de Trabalho` não pode estar no caminho do diretório onde o projeto foi clonado, pois o script que realiza os testes não consegue "encontrar" pastas que contenham espaços em seus nomes. Para checar se o projeto está seguindo esse passo corretamente, utilize o comando `pwd` no terminal.

## Como foi desenvolvido

Toda a configuração do projeto e do banco de dados foi desenvolvido pela TRYBE.

### Foi desenvolvido por mim todas as queries do mongodb que estão localizadas na pasta `challenges`
