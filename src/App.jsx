import { RouterProvider } from "react-router";
import { router } from "./Routes/route";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
