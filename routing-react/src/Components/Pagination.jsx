import React from 'react'
import { Link } from 'react-router-dom';

class Pagination extends React.Component {
    render() {
      return (
        <React.Fragment>
        <nav className="pt-2" aria-label="...">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link className="page-link" to="/">Home</Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/Species">Species</Link>
            </li>
          <li className="page-item">
            <Link className="page-link" to="/People">People</Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/Films">Films</Link>
          </li>
        </ul>
      </nav>
        </React.Fragment>
      );
    }
  }
  
  export default Pagination;