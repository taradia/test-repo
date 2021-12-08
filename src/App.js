import NonPDFPage from './pages/NonPDFPage';
import PDFPage from './pages/PDFPage';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <a href='/pdf'>PDFPage</a>
      <a href='/non-pdf'>NonPDFPage</a>
        <Switch>
          <Route path='/pdf'>
            <PDFPage/>
          </Route>
          <Route path='/non-pdf'>
            <NonPDFPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
