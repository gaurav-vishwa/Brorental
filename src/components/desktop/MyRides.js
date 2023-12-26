import Booking from "../../components/desktop/Booking";

import PostLoginNavbar from "../../layouts/desktop/PostLoginNavbar";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";

export default function MyRides() {
  return (
    <>
      <DynamicNavbar />
      <div className="m-10">
        <Booking />
      </div>
      <div style={{ marginTop: "10%" }}></div>
      <DynamicFooter />
    </>
  );
}
