# Playora

Mini jogos para a família competir num ranking ao vivo. Site estático (HTML, CSS e JS) + Firebase (login anônimo e Firestore) + Firebase Hosting.

## Estrutura
- `public/index.html`, `public/css/style.css`, `public/js/app.js` – o site
- `public/js/assets.js` – imagens e ícones embutidos
- `public/js/firebase-config.js` – **aqui entra a configuração do Firebase**
- `firestore.rules` – regras de segurança do banco
- `.github/workflows/deploy.yml` – publica no Firebase Hosting a cada envio para `main`

## Configurar o Firebase (tudo pelo navegador, dá para fazer no celular)
1. console.firebase.google.com → **Adicionar projeto** → nome `playora` (pode desligar o Google Analytics).
2. **Build → Authentication → Vamos começar → Método de login → Anônimo → Ativar.** (obrigatório)
3. **Build → Firestore Database → Criar banco de dados** → modo **produção** → região `southamerica-east1` (São Paulo).
4. Na aba **Regras** do Firestore, apague tudo, cole o conteúdo de `firestore.rules` e toque em **Publicar**.
5. **Configurações do projeto (engrenagem) → Seus apps → ícone `</>` (Web)** → registre o app → copie o objeto `firebaseConfig` e cole em `public/js/firebase-config.js` (substituindo o `null`). Não é segredo.
6. **Código da família:** no Firestore, toque em **Iniciar coleção** → ID da coleção `config` → ID do documento `familia` → campo `codigo` (tipo string) com a palavra-chave que só a família sabe → Salvar. Sem esse documento ninguém consegue entrar.
7. **Restringir a chave da API** (recomendado): console.cloud.google.com → APIs e serviços → Credenciais → chave "Browser key" → Restrições de aplicativo: Referenciadores HTTP → adicione `https://SEU-PROJETO.web.app/*` e `https://SEU-PROJETO.firebaseapp.com/*`.
8. **Build → Hosting → Vamos começar** (só para criar o site; pode pular as etapas de linha de comando).

## Publicar pelo GitHub (sem instalar nada)
1. Console do Firebase → **Configurações do projeto → Contas de serviço → Gerar nova chave privada** (baixa um arquivo `.json`).
2. No GitHub: repositório → **Settings → Secrets and variables → Actions → New repository secret**:
   - `FIREBASE_SERVICE_ACCOUNT` = todo o conteúdo do arquivo `.json`
   - `FIREBASE_PROJECT_ID` = o ID do projeto (ex.: `playora-1a2b3`)
3. Faça commit na branch `main`. O GitHub Actions publica e o site fica em `https://SEU-PROJETO.web.app`.
4. Nunca coloque o arquivo `.json` no repositório.

## Segurança
- **Código da família:** o aparelho só vira "membro" se mandar o código certo; as regras do banco conferem com `config/familia`, que ninguém lê pelo site. Quem não é membro não lê nem grava nada. Para trocar o código, edite o documento `config/familia` (quem já entrou continua; para expulsar alguém apague o documento dele em `membros`).
- **Apelido único:** o banco guarda `nomes/{apelido}`; maiúsculas, acentos e espaços extras não contam ("Ayla", "ayla" e "Áyla " são o mesmo apelido). Quem tenta um apelido já usado recebe o aviso na hora.
- **Cabeçalhos de segurança** (`firebase.json`): CSP restrita (só o próprio site, Google/Firebase e fontes do Google), sem iframe de terceiros, `nosniff`, sem referrer.
- Textos digitados (apelido) são escapados antes de aparecer na tela, contra injeção de código (XSS).
- Login anônimo automático: cada aparelho ganha um ID.
- Regras: todos leem o ranking; cada pessoa só grava os próprios dados; o recorde nunca diminui; pontuação limitada a 1.000.000; só os jogos da lista são aceitos.
- Ao incluir um jogo novo, acrescente o nome dele na lista `jogoOk` do `firestore.rules`.
- Sem configuração do Firebase, o site funciona, mas guarda o placar só no aparelho.
