import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      pageid: "0"
    };
};

setdata() {
  console.log(this.props.id)
  let theid = +this.props.id
  if(theid !== this.state.pageid) {
  this.gogetdata(theid)           
  } 
}

  gogetdata(id) {
    fetch('/api/blogs')
    .then(res => res.json())
    .then(data => {
      let theids = data.map(element => {
        console.log(element)
        return element.id;
      });
      console.log(theids)
      let arraylist = [];
      arraylist.push((theids[(theids.indexOf(+id)-1)]));
      arraylist.push((theids[(theids.indexOf(+id)-2)]));
      arraylist.push((theids[(theids.indexOf(+id)-1)]));
      arraylist.push((theids[(theids.indexOf(+id))]));
      arraylist.push((theids[(theids.indexOf(+id)+1)]));
      arraylist.push((theids[(theids.indexOf(+id)+2)]));
      arraylist.push((theids[(theids.indexOf(+id)+1)]));
      console.log(arraylist)
        this.setState({
            ids:  arraylist,
            pageid: id
        });           
    });      
  };


  render() {
    this.setdata()
    return (
      <React.Fragment>
                <div
            className="position-absolute"
            style={{
              top: "90%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}>
        <nav aria-label="...">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link" href="#">
                Previous
              </button>
            </li>
            <li className="page-item">
              <button className="page-link">
                Next
              </button>
            </li>
          </ul>
        </nav>            
          </div>

      </React.Fragment>
    );
  };
};

export default Pagination;
