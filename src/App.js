import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CommentsLayout from './components/Comments/CommentsLayout';

function App() {
  return (
    <div className="container">
      <div className="row">
        <CommentsLayout></CommentsLayout>
      </div>
    </div>
  );
}

export default App;
