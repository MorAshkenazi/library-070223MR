import { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import UpdateBook from "./UpdateBook";

interface UpdateModalProps {
  show: boolean;
  onHide: Function;
  render: Function;
  bookId: number;
}

const UpdateModal: FunctionComponent<UpdateModalProps> = ({
  show,
  onHide,
  render,
  bookId,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => onHide()}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateBook bookId={bookId} render={render} onHide={onHide} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateModal;
