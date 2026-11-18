# 🎮 Playora

**Mini jogos para a família competir num ranking ao vivo.**

🔗 **Jogar:** https://playora-game.web.app

Jogue sozinho ou desafie a família: cada recorde vai para um placar compartilhado, ganha moedas, XP e conquistas, e todo mundo vê a posição dos adversários em tempo real.

---

## ✨ O que tem

- **Dezenas de jogos rápidos** (cobra, corrida, prateleira, memória, torre, nave, contas e muito mais)
- **Ranking ao vivo** por jogo, com os recordes de todos os jogadores
- **Perfil** com avatar, apelido único, nível e XP
- **Conquistas** e moedas por jogar
- **Funciona no celular**, com toque e arrastar
- **Sem instalar nada**: abre direto no navegador

## 🧱 Como é feito

| Parte | Tecnologia |
|---|---|
| Site | HTML, CSS e JavaScript puro (sem framework) |
| Login | Firebase Authentication (anônimo) |
| Banco de dados | Cloud Firestore (tempo real) |
| Hospedagem | Firebase Hosting |
| Publicação | GitHub Actions (automática a cada envio para `main`) |

## 📁 Arquivos

```
index.html            página principal
style.css             visual (tema neon escuro)
app.js                jogos, ranking, perfil e conexão com o banco
assets.js             imagens e ícones embutidos
firebase-config.js    configuração do projeto Firebase (não é segredo)
firestore.rules       regras de segurança do banco
firebase.json         hospedagem e cabeçalhos de segurança
.github/workflows/    publicação automática
```

## 🔒 Segurança

- **Código da família:** só entra quem digitar o código certo. O banco confere com um documento secreto (`config/familia`) que ninguém lê pelo site.
- **Apelido único:** não existem dois jogadores com o mesmo apelido. Maiúsculas, acentos e espaços extras não contam.
- **Cada um mexe só no que é seu:** o jogador grava apenas o próprio perfil e os próprios recordes.
- **Recorde nunca diminui:** uma pontuação menor não substitui a melhor.
- **Limites:** pontuação máxima de 1.000.000 e só os jogos da lista são aceitos.
- **Cabeçalhos de segurança:** política de conteúdo restrita, sem iframes de terceiros e sem vazamento de referência.
- **Textos digitados** (apelidos) são escapados, contra injeção de código.

## 🚀 Publicar

A cada envio para a branch `main`, o GitHub Actions publica o site no Firebase Hosting.

Segredos necessários em **Settings → Secrets and variables → Actions**:

| Nome | Valor |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | conteúdo do arquivo `.json` da conta de serviço |
| `FIREBASE_PROJECT_ID` | ID do projeto Firebase |

> ⚠️ Nunca coloque o arquivo `.json` da conta de serviço no repositório.

## 🛠️ Configurar do zero

1. **Firebase:** crie o projeto em console.firebase.google.com (plano Spark, grátis).
2. **Authentication:** ative o login **Anônimo**.
3. **Firestore:** crie o banco em modo produção e cole o conteúdo de `firestore.rules` na aba **Regras**.
4. **Código da família:** no Firestore, crie a coleção `config`, documento `familia`, campo `codigo` (string) com a palavra secreta.
5. **Configuração do site:** copie o `firebaseConfig` do app web para `firebase-config.js`.
6. **Hosting:** ative o Hosting e crie o site; ajuste o nome em `firebase.json` (`"site"`).
7. **Chave de publicação:** gere a chave da conta de serviço e guarde nos segredos do GitHub.

Sem a configuração do Firebase, o Playora funciona, mas guarda o placar só no aparelho.

## ➕ Adicionar um jogo novo

Acrescente o nome do jogo na lista `jogoOk` do arquivo `firestore.rules` e publique as regras de novo, senão o banco recusa as pontuações.

## 🔑 Trocar o código da família

Edite o campo `codigo` do documento `config/familia`. Quem já entrou continua dentro. Para expulsar alguém, apague o documento dessa pessoa em `membros`.

---

Feito com carinho para a família. 💜
