<h1>
Tecnologias Utilizadas:
</h1>

<h2>Front-end:</h2>

• Next.js 13 + App Router

• React 18

• TailwindCSS 3

• Server Components / Client Components

<h2>Backend</h2>

• Next.js API Routes

• Node.js

• jsonwebtoken (JWT)

• mongoose - ODM

<h2>Funcionalidades</h2> 

• Login seguro com Cookies HttpOnly
• Proteção de rotas administrativas
• Sessões persistentes (tempo: 1d)
• Renderização híbrida (Server/Client)
• API integrada no mesmo repositório


<h1>Estrutura Geral do Projeto</h1>

reduto<br/>
 ├─ app<br/>
 │   ├─ login<br/>
 │   ├─ admin<br/>
 │   └─ api<br/>
 ├─ components<br/>
 ├─ lib<br/>
 ├─ prisma (planejado)<br/>
 ├─ public<br/>
 ├─ package.json<br/>
 ├─ .env<br/>
 └─ README.md<br/>

<h2>Autenticação</h2>

O login é validado no server side com credenciais armazenadas no .env.local.
Se correto → é gerado um JWT com payload de role admin e enviado via cookie HTTPOnly.

<h1>Fluxo:</h1>

• Usuário envia POST /api/login

• Backend valida ADMIN_USER e ADMIN_PASS

• Geração de token com payload { role: "admin" }

• Cookie é persistido por 1 dia com httpOnly: true

• Usuário é redirecionado para /players

<h2>Exemplo — API Login</h2>
<pre>
<code>
Local: app/api/login/route.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  if (
    username !== process.env.ADMIN_USER ||
    password !== process.env.ADMIN_PASS
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const res = NextResponse.json({ ok: true });

  res.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
</code>
</pre>

<h1>Setup do Ambiente</h1>
1. Clone o repositório
git clone https://github.com/juniorferreira22/reduto.git
cd reduto

2. Instale as dependências
   
npm i
ou
yarn i

4. Configure variáveis de ambiente

Crie um arquivo .env.local na raiz:

ADMIN_USER=seu_usuario
ADMIN_PASS=sua_senha
JWT_SECRET=um_t0k3n_s3cr3t0


⚠️ Não faça commit do arquivo .env.local.

4. Executar localmente
npm run dev ou yarn dev

<h2>Build de Produção</h2>
Build
npm run build

Executar <br/>
npm start ou npm run dev ou yarn dev

<h1>Deploy</h1>

O projeto foi pensado para rodar na Vercel.

Cuidados no deploy:

Cookies devem ter secure: true

Variáveis precisam ser configuradas no painel

JWT_SECRET obrigatório

<h2>Segurança</h2>

Cookies HttpOnly evitam acesso via JS (protege contra XSS)

Token não fica exposto em localStorage/sessionStorage

Sem autenticação client-side

Rotas protegidas no servidor

<h1>Planejamento Futuro</h1>

Integração com APIs externas:

Steam Web API

Migração para banco real:

- Prisma ORM

- PostgreSQL/MySQL

<h2>Admin features:</h2>

CRUD de jogadores

Coleta de estatísticas

Logs de atividade
