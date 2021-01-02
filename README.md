<div align="center">
  <img src=".github/guru.svg" width=120px>
</div>

<h1 align="center">Guru</h1>
<h4 align="center" id="sobre">Uma aplicação de linha de comando que automatiza buscas no stackoverflow :mag:</h4>

<div align="center">

![](https://img.shields.io/badge/license-MIT-green)
![](https://img.shields.io/badge/languege-Portuguese-yellow)
[![GitHub Repo stars](https://img.shields.io/github/stars/lucascprazeres/sof_guru?style=social)](https://github.com/lucascprazeres/sof_guru/stargazers)

</div>

<h2 align="center">  <img width="700" alt="Vídeo do Projeto" title="#Projeto" src=".github/video.gif" />  </h2>

### Features 
- [x] Buscar pelo termo passado como argumento de linha de comando
- [x] Mostrar Rapidamente no console a solução mais votada

 
 <!-- Altere os Pré-requisitos -->

### 🛒 Pré-requisitos<a id="pre-requisitos"></a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/pt-br/)
 
 Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
 
### 📀Executando a Aplicação<a id="rodando"></a>
   
````bash 
 # Clone este repositório
 git clone https://github.com/lucascprazeres/sof_guru
 
 # Acesse a pasta do projeto no terminal
 cd sof_guru
 
 # Instale as dependências
 $ yarn install ou
 $ npm i 
 
 # Execute a aplicação
 $ node src/index.js "sua pesquisa" ou
 $ yarn/npm start "sua pesquisa"
 ````

 Além da pesquisa padrão, você também pode passar as seguintes opções:

 - **--limit=valor**: indica o número de resultados que você deseja ver
 - **-u**: deixa o texto em caixa alta
 - **-l**: deixa o texto em caixa baixa

#### Para usuários linux
Para executar o programa como no vídeo mostrado, através do comando "guru", basta seguir o seguinte passo a passo:

Crie, em sua home, a pasta bin, que conterá os seus próprios comandos.

```bash
mkdir ~/bin
```

Atualize o arquivo "guru" com o caminho para a pasta do seu projeto e mova-o para lá. Em seguida, você precisa "dizer" ao seu interpretador de comandos para tratar o novo arquivo com executável.

```bash
# exemplo de dentro do projeto
mv guru ~/bin
chmod +x ~/bin/guru
```

Finalmente, é preciso adicionar o caminho para a pasta recém criada ao seu PATH, para que o interpretador saiba onde procurar pelo código do comando.

```bash
echo "PATH="$PATH:$HOME/bin"" >> ~/.bashrc # ou .zshrc, se for o seu caso
```

*não se esqueça que são dois símbolos de maior que ">>" no comando acima, ou isso pode te causar um problemão*

Pronto! Agora é só reiniciar o seu terminal e o seu novo comando já estará disponível!

 <!-- Altere as Tecnologias -->
### 🛠 Tecnologias<a id="tecnologias"></a>
 As seguintes ferramentas foram usadas na construção do projeto:
 
  - [Puppeteer](https://pptr.dev/)
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

### 👨‍💻Autor <a id="autor"> </a>

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

---

<div align="center"> Feito com ❤️ por <a href="https://www.linkedin.com/in/lucas-prazeres/">Lucas Prazeres</a> 👋 Entre em contato! </div>  
