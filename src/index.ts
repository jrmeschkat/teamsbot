import * as express from 'express';
import { Request, Response } from 'express';
import { BotFrameworkAdapter, TurnContext } from 'botbuilder';
import { EchoBot } from './bot';

const app = express();
const { PORT = 3000, BOT_APP_ID, BOT_APP_PASSWD } = process.env;

const echo = new EchoBot();

const adapter = new BotFrameworkAdapter({
  appId: BOT_APP_ID,
  appPassword: BOT_APP_PASSWD
});

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <html>
  <head>
    <title>Teamsbot - UniKS</title>
  </head>
  <body>
    <h1>Hello from Teamsbot - UniKS</h1>
  </body>
  </html>
  `);
});

app.post('/api/messages', (req: Request, res: Response) => {
  adapter.processActivity(req, res, async (context: TurnContext) => {
    await echo.onTurn(context);
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
