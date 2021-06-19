import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { BookDetail } from './BookDetail'
import { Books } from './Books'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/:id" children={<BookDetail />}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
