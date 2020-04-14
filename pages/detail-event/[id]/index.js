import Layout from "../../../Components/Layout";
import { useRouter } from "next/router";
import { listEvent } from "../../tranning/Components/UpcomingEvent/listEventData";
import ContentEvent from "../../tranning/Components/UpcomingEvent/Components/ContentEvent";
import FormGetInfomation from "../FormGetInfomation";
import TitlePage from "./../../../Components/TitlePage";
import styles from "./detail-event.module.scss";

const DetailEvent = () => {
  const router = useRouter();
  const event = listEvent[router.query.id];

  const renderContent = () => {
    if (event) {
      return (
        <div className="row">
          <div className={`col-md-3 ${styles.contentEvent}`}>
            <ContentEvent event={event} />
          </div>
          <div className={`col-md-6 ml-4 ${styles.formContent}`}>
            <div className={`rounded-lg ${styles.formEvent}`}>
              <FormGetInfomation />
            </div>
            <div className="text-right">
              <button className={`btn ${styles.btnSubmit} my-4 `}>
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <Layout>
      <TitlePage title="Get More Infomation on Trainning" />
      {renderContent()}
    </Layout>
  );
};
export default DetailEvent;
