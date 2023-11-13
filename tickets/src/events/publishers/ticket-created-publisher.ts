// import {Publisher, Subjects, TicketCreatedEvent } from '@some-zen/common'

// export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
//     subject: Subjects.TicketCreated = Subjects.TicketCreated
// }
import { Publisher, Subjects, TicketCreatedEvent } from '@some-zen/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
