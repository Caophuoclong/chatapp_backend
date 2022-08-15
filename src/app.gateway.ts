import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'dgram';

@WebSocketGateway(3030)
export class AppGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log(typeof client);
    return 'Hello world!';
  }
  async handleConnection(client: any) {
    console.log(client.id);
  }
}
