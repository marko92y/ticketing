import { Publisher , OrderCancelledEvent, Subjects } from '@some-zen/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}