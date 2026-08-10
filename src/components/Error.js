import {useRouteError} from "react-router-dom";

export const Error = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div className="error">
        <h1>404 - Page Not Found</h1>
        <p>
            {error?.status} : {error?.statusText}
        </p>   
        <p>
            {error?.data || "An error occurred."}
            Oops! The page you are looking for does not exist. Please check the URL or return to the homepage.
        </p>  
    </div>
  );
}