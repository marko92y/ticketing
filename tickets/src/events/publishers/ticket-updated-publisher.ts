// import {Publisher, Subjects, TicketUpdatedEvent } from '@some-zen/common'

// export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
//     subject: Subjects.TicketUpdated = Subjects.TicketUpdated
// }

import { Publisher, Subjects, TicketUpdatedEvent } from '@some-zen/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
