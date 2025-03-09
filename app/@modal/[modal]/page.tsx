import Modal from "@/components/Modal";
import AddTaskModal from "@/views/modals/AddTaskModal";
import { JSX } from "react";

export default function ModalPage({ params }: { params: { modal: string } }) {
  console.log(params);
  const modalContent: { [key: string]: JSX.Element } = {
    addTask: <AddTaskModal />,
  };

  return (
    <Modal title={params.modal.charAt(0).toUpperCase() + params.modal.slice(1)}>
      {modalContent[params.modal] || <p>Unknown Modal</p>}
    </Modal>
  );
}
