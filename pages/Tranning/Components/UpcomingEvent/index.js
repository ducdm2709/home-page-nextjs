import styles from "./event.module.scss";
import { Fragment } from "react";
import Link from "next/link";
import ContentEvent from "./Components/ContentEvent";
import listEvent from "./listEventData.json";

const renderEvent = () => {
  return listEvent.map((event, index) => {
    return (
      <div className="col-md-3 mb-5" key={index}>
        <div className="mb-4">
          <ContentEvent event={event} />
        </div>
        <Link href="/detail-event/[id]" as={`/detail-event/${index}`}>
          <button
            type="button"
            className={`btn btn-outline-primary w-100 ${styles.button}`}
          >
            Get More Information
          </button>
        </Link>
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
