import { useOnlineStatus } from "../utils/useOnlineStatus";
export const ContactUs = () => {
  // Custom Hook
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!!! Please check your Internet Connection.
      </h1>
    );
  }
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! If you have any questions or feedback,
        please don't hesitate to reach out. You can contact us via email at
        info@ourrestaurant.com or by phone at (123) 456-7890. Our team is always
        here to help and ensure you have the best dining experience possible.
      </p>
    </div>
  );
};
