import { Subjects, Publisher, PaymentCreatedEvent } from '@some-zen/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}