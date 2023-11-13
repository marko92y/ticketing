import { Publisher , OrderCreatedEvent, Subjects } from '@some-zen/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}