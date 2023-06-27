import { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteBook } from "../services/booksService";
import { successMsg } from "../services/feedbacksService";

interface DeleteModalProps {
  show: boolean;
  onHide: Function;
  render: Function;
  bookId: number;
}

const DeleteModal: FunctionComponent<DeleteModalProps> = ({
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
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() =>
              deleteBook(bookId)
                .then((res) => {
                  render();
                  onHide();
                  successMsg("Book was deleted!");
                })
                .catch((err) => console.log(err))
            }
          >
            Yes
          </Button>
          <Button variant="danger" onClick={() => onHide()}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
