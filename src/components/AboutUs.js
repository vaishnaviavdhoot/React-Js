import { User } from "./User.js";
import { UserClass } from "./UserClass.js";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const AboutUs = () => {
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
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to our restaurant! We are passionate about serving delicious
        food and providing a memorable dining experience. Our team of talented
        chefs uses the finest ingredients to create a diverse menu that caters
        to all tastes. Whether you're looking for a quick bite or a leisurely
        meal, we have something for everyone. Join us and indulge in the flavors
        that will leave you coming back for more!
      </p>
      <User
        name="Vaishnavi"
        location="Jalna"
        contact="vaishnaviavadhoot06@gmail.com"
      />
      <UserClass
        name="Vaishnavi"
        location="Jalna"
        contact="vaishnaviavadhoot06@gmail.com"
      />
    </div>
  );
};
