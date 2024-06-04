import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from '../controller/message.controller';
import { MessageService } from '../service/message.service';
import { Message, MessageSchema } from '../schema/message.schema';
import { MessageGateway } from '../gateway/message.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [MessageController],
  providers: [MessageService, MessageGateway],
})
export class MessageModule {}
