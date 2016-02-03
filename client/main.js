import ReactDOM from 'react-dom';
import Container from 'components/Container';
// Set import for flashcards array
import Flashcards from '../CARDS';

ReactDOM.render(
  <Container cards={Flashcards} />, document.getElementById('App')
);
