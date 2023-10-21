
import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function TimerPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveChanges = () => {
    // Handle save action here
    handleClose();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleShow(); // Open the popup every 30 seconds
    }, 30000); // 30 seconds in milliseconds

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, []);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Check In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add the content for your popup here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TimerPopup;
