<div align="center">
  <img src=".github/guru.svg" width=120px>
</div>

<h1 align="center">Guru</h1>
<h4 align="center" id="about">A command-line application that automates searches on Stack Overflow :mag:</h4>

<div align="center">

![](https://img.shields.io/badge/license-MIT-green)
![](https://img.shields.io/badge/language-Portuguese-yellow)
[![GitHub Repo stars](https://img.shields.io/github/stars/lucascprazeres/sof_guru?style=social)](https://github.com/lucascprazeres/sof_guru/stargazers)

</div>

<h2 align="center">  <img width="700" alt="Project Video" title="#Project" src=".github/video.gif" />  </h2>

### Features 
- [x] Search by the term passed as a command-line argument
- [x] Quickly show the most upvoted solution in the console

 
 <!-- Update prerequisites -->

### 🛒 Prerequisites<a id="prerequisites"></a>

Before you begin, you'll need to have the following tools installed on your machine:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
 
 Additionally, it’s recommended to use an editor to work with the code, such as [VSCode](https://code.visualstudio.com/)
 
### 📀 Running the Application<a id="running"></a>
   
```bash 
 # Clone this repository
 git clone https://github.com/lucascprazeres/sof_guru
 
 # Access the project folder in the terminal
 cd sof_guru
 
 # Install the dependencies
 $ yarn install or
 $ npm i 
 
 # Run the application
 $ node src/index.js "your search term" or
 $ yarn/npm start "your search term"
 ```

 Besides the standard search, you can also pass the following options:

 - **--limit=valor**: specifies the number of results you want to see
 - **-u**: makes the text uppercase
 - **-l**: makes the text lowercase

#### For Linux users
To run the program as shown in the video with the "guru" command, follow these steps:

Create a "bin" folder in your home directory to store your custom commands.

```bash
mkdir ~/bin
```

Update the "guru" file with the path to your project folder and move it there. Then, you need to "tell" your command interpreter to treat the new file as executable.

```bash
# example from within the project
mv guru ~/bin
chmod +x ~/bin/guru
```

Finally, add the path to the newly created folder to your PATH, so that the interpreter knows where to look for the command code.

```bash
echo "PATH="$PATH:$HOME/bin"" >> ~/.bashrc # or .zshrc, if that's your case
```

*Remember to use two "greater than" symbols ">>" in the command above, or it might cause an issue.*

That's it! Now, just restart your terminal and your new command will be available!

<!-- Update Technologies -->
### 🛠 Tecnologies<a id="tech"></a>
The following tools were used in the development of the project:
 
  - [Puppeteer](https://pptr.dev/)
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

### 👨‍💻Author <a id="author"> </a>

## How to contribute?

With the project on your machine, just create a branch for your feature/fix

```bash
$ git checkout -b your_branch
```

Make the changes, then save and push them to this repository with:


```bash
$ git add .
$ git commit -m 'describe what you did'
$ git push origin your_branch
```

When you access this repository on GitHub, the option to create a pull request will be available.

## License
This project is licensed under the **MIT** license. For more information, see the **LICENSE** file.

---

<div align="center"> Made with ❤️ by <a href="https://www.linkedin.com/in/lucas-prazeres/">Lucas Prazeres</a> 👋 Get in touch! </div>
