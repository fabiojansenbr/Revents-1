import React from "react"
import { Segment, Item, Icon, List, Button } from "semantic-ui-react"

import EventListAttendee from "./EventListAttendee"

const EventListItem = ({ event, onViewEvent, onDeleteEvent }) => {
  const {
    title,
    date,
    description,
    venue,
    hostPhotoURL,
    hostedBy,
    attendees
  } = event

  const renderAttendees = () =>
    attendees &&
    attendees.map(attendee => (
      <EventListAttendee key={attendee.id} attendee={attendee} />
    ))

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header as="a">{title}</Item.Header>
              <Item.Description>
                Hosted by <a>{hostedBy}</a>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {date} |
          <Icon name="marker" /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>{renderAttendees()}</List>
      </Segment>
      <Segment clearing>
        <span>{description}</span>
        <Button
          as="a"
          color="red"
          floated="right"
          content="Delete"
          onClick={onDeleteEvent(event.id)}
        />
        <Button
          as="a"
          color="teal"
          floated="right"
          content="View"
          onClick={onViewEvent(event)}
        />
      </Segment>
    </Segment.Group>
  )
}

export default EventListItem
