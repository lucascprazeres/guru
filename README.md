<div align="center">
  <img src=".github/guru.svg" width=120px>
</div>

<h1 align="center">Guru</h1>
<h4 align="center">Uma aplicação de linha de comando que automatiza buscas no stackoverflow :mag:</h4>

## Como utilizar?
Se você tiver uma pasta especial para seus projetos, entre nela via terminal e clone o repositório

```
$ cd sua/pasta/especial
$ git clone https://github.com/lucascprazeres/sof_guru
$ cd sof_guru
```

O programa deve ser rodado via terminal e passando a string de pesquisa como argumento. Por isso, abra-o e digite o comando

```bash
$ node src/index.js "Sua pesquisa"
```
**Extra**: Caso você seja um usuário linux, recomendo a criação do diretório **bin**, em sua home, e copiar o arquivo **guru** para lá.

```bash
$ mkdir ~/bin
$ cp guru ~/bin
```

*Esse é o arquivo que será executado quando o comando guru for inserido*

Abra o arquivo guru e insira o caminho para a sua pasta do projeto, no local indicado.

*ps: caso você não tenha certeza do caminho, basta digitar o comando **pwd** dentro da pasta do projeto*

Em seguida, informe ao shell que o arquivo transferido trata-se de um executável

```bash
$ chmod +x ~/bin/guru
```

A última etapa do processo é abrir o arquivo .bashrc, localizado na sua home, e inserir a seguinte linha, ao final do arquivo

```bash
$ sudo nano ~/.bashrc # ou ~/.zshrc. caso você seja usuário do zshell
```

```bash
PATH="$PATH:$HOME/bin"
```

Isso vai fazer com o que o seu shell saiba onde procurar pelo comando guru, quando inserido.

Salve o arquivo, feche o terminal e, agora, o novo comando estará disponível em qualquer lugar!

## Como contribuir?

Com o projeto na sua máquina, basta criar uma branch para a sua feature/correção

```bash
$ git checkout -b sua_branch
```

Realize as mudanças, e, depois disso, salve-as e envie para este repositório, com


```bash
$ git add .
$ git commit -m 'conte o que você fez'
$ git push origin sua-branch
```

Ao acessar esse repositório via github, a opção de criar um **pull request** estará disponível.

## Licença
Esse projeto se encontra sob a licença **MIT**. Para mais informações, acesse o arquivo **LICENSE**.

***

Feito com :sweat_drops: e com :purple_heart: por [Lucas dos Prazeres](https://www.linkedin.com/in/lucas-prazeres-781772182/)