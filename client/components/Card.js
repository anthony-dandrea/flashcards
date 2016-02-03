import {Component, PropTypes} from 'react';

export default class Card extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }
  render() {
    let {question, answer} = this.props;
    return (
      <div>
        <p>{question}</p>
        <p>{answer}</p>
      </div>
    );
  }
}
