# sof_guru
Um script nodejs que automatiza buscas no stackoverflow

# Como utilizar?
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

Isso vai fazer com o que o seu shell saiba onde procurar pelo comando guru, quando inserido

salve o arquivo, feche o terminal e, agora, o novo comando estará disponível em qualquer lugar, via terminal!