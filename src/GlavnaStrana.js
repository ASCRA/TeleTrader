import {Navbar} from "./Komponente/Navbar";
import {Home} from "./Komponente/Home";
import {Profile} from "./Komponente/Profile";
import {useEffect, useState, useMemo} from "react"
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import LogInContext from "./Komponente/LogInContext"
function GlavnaStrana() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('log-in')?localStorage.getItem('log-in'):'false')

  useEffect(() => {
      switch (localStorage.getItem('log-in')) {
        case 'true':
          setLoggedIn(true)
          break;
        case 'false':
          setLoggedIn(false) 
          break;
        default:
          {
            localStorage.setItem('log-in', false)
            setLoggedIn(false)
          }
        break;
      }
  }, [])

  const logIn = () => {
    setLoggedIn(true);
    localStorage.setItem('log-in', true);
  }

  const isLoggedIn = useMemo(() => ({
    loggedIn,
    logIn
  }), [loggedIn])

  return (
    <div>
      <BrowserRouter>
        <LogInContext.Provider value = {isLoggedIn}>
          <Navbar/>
        </LogInContext.Provider>
          <Switch>
            <Route path = "/" exact component={Home} />
            {loggedIn? <Route path = "/profile" exact component={Profile} />:<Redirect from='/profile' to="/" />}
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default GlavnaStrana;
