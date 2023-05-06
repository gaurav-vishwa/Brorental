import Booking from "../../components/desktop/Booking";

import PostLoginNavbar from "../../layouts/desktop/PostLoginNavbar";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";

export default function MyRides() {
  return (
    <>
      <PostLoginNavbar />
      <div className="m-10">
        <Booking />
      </div>
      <div style={{ marginTop: "10%" }}></div>
      <PostLoginFooter />
    </>
  );
}
