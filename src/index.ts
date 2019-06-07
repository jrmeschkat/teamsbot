import * as express from 'express';
import { Request, Response } from 'express';
import { BotFrameworkAdapter, TurnContext } from 'botbuilder';
import { EchoBot } from './bot';

const app = express();
const { PORT = 3000 } = process.env;

const echo = new EchoBot();

const adapter = new BotFrameworkAdapter({
  // appId: process.env.MICROSOFT_APP_ID,
  // appPassword: process.env.MICROSOFT_APP_PASSWORD
  appId: '20ad4a1c-0c4f-4a01-89f5-7021fad52bf7',
  appPassword: 'bcS2TjUWKQE2LF[sA1B7TRq+JRzjaA:['
});

app.post('/api/messages', (req: Request, res: Response) => {
  adapter.processActivity(req, res, async (context: TurnContext) => {
    await echo.onTurn(context);
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
