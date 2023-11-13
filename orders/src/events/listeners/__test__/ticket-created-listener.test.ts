import { Message } from 'node-nats-streaming'
import mongoose from 'mongoose'
import { TicketCreatedEvent } from "@some-zen/common"
import { natsWrapper } from "../../../nats-wrapper"
import { TicketCreatedListener } from "../ticket-created-listener"
import { Ticket } from '../../../models/ticket'

const setup = async () => {
     // create an instance of the listener
    const listener = new TicketCreatedListener(natsWrapper.client)
    // create a fake data event
    const data: TicketCreatedEvent['data'] = {
        version: 0,
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 10,
        userId: new mongoose.Types.ObjectId().toHexString()
    }
    // crate a fake message object
    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    }

    return { listener, data, msg}
}

it('creates and saves a ticket', async () => {
    const { listener,data,msg } = await setup()
    // call the onMessage function with the data object + message object
    await listener.onMessage(data, msg)
    // write assertions to make sure a ticket was created!
    const ticket = await Ticket.findById(data.id)

    expect(ticket).toBeDefined()
    expect(ticket!.title).toEqual(data.title)
    expect(ticket!.price).toEqual(data.price)
})

it('acks the message', async () => {
    const { data, listener, msg } = await setup()

    // call the onMessage function with the data object + message object
    await listener.onMessage(data,msg)
    // write assertions to make sure a ticket was created!
    expect(msg.ack).toHaveBeenCalled()
})

it('does not call ack if the event has a skipped version number', async () => {
    const { msg, data, listener } = await setup()

    data.version = 10;

    try {
        await listener.onMessage(data, msg)
    } catch (err) {

    }

    expect(msg.ack).not.toHaveBeenCalled()
})