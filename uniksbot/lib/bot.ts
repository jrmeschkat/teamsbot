import { TurnContext, ActivityTypes } from 'botbuilder';

export class UniksBot {
  async onTurn(context: TurnContext) {
    if (context.activity.type === ActivityTypes.Message) {
      context.sendActivity(`You said: ${context.activity.text}`);
    }
  }
}
