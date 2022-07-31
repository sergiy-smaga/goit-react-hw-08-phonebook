import { Component } from 'react';
import PropTypes from 'prop-types';
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

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired,
};
