import {Component, PropTypes} from 'react';
import Card from 'components/Card';

export default class Container extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  }
  render() {
    let {cards} = this.props;
    return (
      <div>
        <p>Hey I'm here</p>
        {cards.map((v, i) =>
          <Card question={v.question} answer={v.answer} key={i}/>
        )}
      </div>
    );
  }
}
