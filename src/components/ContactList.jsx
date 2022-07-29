import { Component } from 'react';
import { ListElement } from './ListElement';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.items
          .filter(item =>
            item.name
              .toLocaleLowerCase()
              .includes(this.props.filter.toLocaleLowerCase())
          )
          .map(contact => (
            <ListElement
              delete={this.props.delete}
              key={contact.id}
              contact={contact}
            />
          ))}
      </ul>
    );
  }
}
