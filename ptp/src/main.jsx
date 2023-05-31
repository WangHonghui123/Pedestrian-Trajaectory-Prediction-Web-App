import * as React from "react"
import * as ReactDOM from "react-dom/client"
import  {
	creatBrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import "./index.css"
//import routes
import Intro from "./routes/intro"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Intro />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)