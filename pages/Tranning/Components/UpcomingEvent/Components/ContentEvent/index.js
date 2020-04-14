import { Fragment } from "react";

const ContentEvent = (props) => {
  const event = props.event;
  return (
    <Fragment>
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </h6>
      <h6>
        Fee: <span className="font-weight-normal">$375.00 per person</span>
      </h6>
    </Fragment>
  );
};
export default ContentEvent;
