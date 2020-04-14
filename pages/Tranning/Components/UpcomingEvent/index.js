import styles from "./event.module.scss";
import { Fragment } from "react";

const listEvent = [
  {
    title: "Portland Oregon",
    dateTime: "February 3, 2020",
  },
  {
    title: "Seattle Washington",
    dateTime: "March 3, 2020",
  },
  {
    title: "Tolio Ohio",
    dateTime: "April 6, 2020",
  },
  {
    title: "Milwaukee Wisconsin",
    dateTime: "May 5, 2020",
  },
  {
    title: "Denvenr Colorado",
    dateTime: "July 18, 2020",
  },
  {
    title: "Portland Oregon",
    dateTime: "August 9, 2020",
  },

  {
    title: "San Diego California",
    dateTime: "October 18, 2020",
  },
  {
    title: "Seattle Washington",
    dateTime: "November 3, 2020",
  },
];
const renderEvent = () => {
  return listEvent.map((event, index) => {
    return (
      <div className="col-md-3 mb-5" key={index}>
        <div className="mb-4">
          <h6>{event.title}</h6>
          <p>CTI Coach Training Session</p>
          <h6>{event.dateTime}</h6>
          <div>
            <div>9:00 AM - 5:00 PM</div>
            <div>{"<Location Name>"}</div>
            <div>{"<Location Address>"}</div>
          </div>
          <h6>
            Description:{" "}
            <span className="font-weight-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </h6>
          <h6>
            Fee: <span className="font-weight-normal">$375.00 per person</span>
          </h6>
        </div>
        <button
          type="button"
          className={`btn btn-outline-primary w-100 ${styles.button}`}
        >
          Get More Information
        </button>
      </div>
    );
  });
};
const UpcomingEvent = () => {
  return (
    <Fragment>
      <h4 className="my-5 font-weight-normal">Upcoming Training Event</h4>
      <div className="row">{renderEvent()}</div>
    </Fragment>
  );
};
export default UpcomingEvent;
