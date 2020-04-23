import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Readings extends Component {
  constructor(props) {
    super(props);

    this.readings = props.readings;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="readings">
        <div className="w-100">
          <h2 className="mb-5">What I'm up to currently?</h2>
          <ul className="fa-ul mb-0">
          {
            this.readings.map((data, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faAward} color="#ffc107" />
                <span className="ml-2"> {data.bookDetail} </span>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Readings;

