import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Component />} />
              <Route path=":name" element={<Detail />} />
              <Route path=":name/:id" element={<IDPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <>
      <ul className="nav-style">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>This is Home Page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>This is About Page</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}

function Detail() {
  const { name } = useParams();
  return (
    <div>
      <p>{name} details</p>
      <Link to={`/dashboard/${name}/${Math.floor(Math.random() * 100)}`}>
        Go to random number page
      </Link>
      <br />
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

function IDPage() {
  const { id } = useParams();
  return (
    <div>
      <p>ID: {id}</p>
    </div>
  );
}

function Component() {
  const [item, setItem] = useState([
    { id: 1, name: "kitchen" },
    { id: 2, name: "book" },
    { id: 3, name: "game" },
  ]);

  return (
    <div>
      {item.map((item) => (
        <p key={item.id}>
          <Link to={`/dashboard/${item.name}`}>Go to {item.name} Channel</Link>
        </p>
      ))}
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
export default App;
