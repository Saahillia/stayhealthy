import { useEffect, useState } from "react";

function Notification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? <p>New Appointment Available!</p> : null;
}
export default Notification;
