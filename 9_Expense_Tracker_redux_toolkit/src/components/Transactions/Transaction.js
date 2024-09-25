import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { editActive, removeTransaction } from "../../features/TransactionSlice";

export default function Transaction({ transaction }) {
  const { id, amount, name } = transaction || {};

  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editActive(transaction));
  };
  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <li className="transaction income">
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button onClick={handleEdit} className="link">
          <img alt="Edit" className="icon" src={editImage} />
        </button>
        <button onClick={handleDelete} className="link">
          <img alt="Delete" className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
}
