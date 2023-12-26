// // import { useEffect } from "react";
// // import { withRouter } from "react-router-dom";

// // function ScrollToTop({ history }) {
// //   useEffect(() => {
// //     const unlisten = history.listen(() => {
// //       window.scrollTo(0, 0);
// //     });
// //     return () => {
// //       unlisten();
// //     };
// //   }, []);

// //   return null;
// // }

// // export default withRouter(ScrollToTop);

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function GoToTop() {
//   const routePath = useLocation();
//   const onTop = () => {
//     // window.scrollTo(0, 0);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   useEffect(() => {
//     onTop();
//   }, [routePath]);

//   return null;
// }

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function GoToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const body = document.querySelector("#root");
//     body.scrollIntoView(
//       {
//         behavior: "smooth",
//       },
//       500
//     );
//   }, [pathname]);

//   return null;
// }

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
