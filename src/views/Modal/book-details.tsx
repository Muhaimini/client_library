import { Modal } from "@mantine/core";
import getDetailsBook from "^hooks/queries/use-get-details-book";

interface BookDatilsProps {
  id: string;
  isOpened: boolean;
  onClose: () => void;
}

const BookDatils = ({ id, isOpened = false, onClose }: BookDatilsProps) => {
  const { data } = getDetailsBook({ id });

  return (
    <Modal opened={isOpened} onClose={onClose}>
      <Modal.Title>Detail buku</Modal.Title>
      <Modal.Body>
        <div>{data?.data?.data?.title}</div>
        <div>{data?.data?.data?.genre?.label}</div>
      </Modal.Body>
    </Modal>
  );
};

export default BookDatils;
