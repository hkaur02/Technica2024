import { useState, useEffect } from 'react';

const TimerPopup = () => {
  const [show, setShow] = useState(false);

  // Function to handle closing the alert
  const handleClose = () => {
    setShow(false);
    window.alert("Alert closed");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true); // Show the alert every 30 seconds
    }, 30000); // 30 seconds in milliseconds

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, []);

  return (
    <div>
      {show && (
        <div className="alert">
          <h5 className="alert-title">Check In</h5>
          <p>Check in with yourself and the presentation!</p>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default TimerPopup;


