# sof_guru
Um script nodejs que automatiza buscas no stackoverflow

# Como utilizar?
O programa deve ser rodado via terminal e passando a string de pesquisa como argumento.

Em seu terminal, abra a pasta do projeto e digite:

```bash
$ node src/index.js "Sua pesquisa"
```
**Extra**: Caso você seja um usuário linux, recomendo a criação do diretório bin, em sua home, e copiar o arquivo guru para lá.

```bash
$ mkdir ~/bin
$ cp guru ~/bin
```

Abra o arquivo guru e insira o caminho para a sua pasta do projeto, no local indicado.

*ps: caso você não tenha certeza do caminho, basta digitar o comando **pwd** dentro da pasta do projeto*

Em seguida, informe ao shell que o arquivo transferido trata-se de um executável

```bash
$ chmod +x ~/bin/guru
```

A última etapa do processo é abrir o arquivo .bashrc, localizado na sua home, e inserir a seguinte linha, ao final do arquivo

```bash
$ sudo nano ~/.bashrc
```

```bash
PATH="$PATH:$HOME/bin"
```

salve o arquivo, feche o terminal e, agora, o comando guru estará disponível em qualquer lugar!