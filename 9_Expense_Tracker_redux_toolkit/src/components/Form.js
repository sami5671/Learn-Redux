import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTransaction,
  createTransaction,
} from "../features/TransactionSlice";

export default function Form() {
  // =================================================================
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { editing } = useSelector((state) => state.transactions);

  useEffect(() => {
    const { id, type, name, amount } = editing;
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);

  const dispatch = useDispatch();

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleCreate = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      type: type,
      amount: parseFloat(amount),
    };
    dispatch(createTransaction(data));
    reset();
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const id = editing?.id;
    const data = {
      name: name,
      type: type,
      amount: parseFloat(amount),
    };
    dispatch(changeTransaction({ id, data }));
    setEditMode(false);
    reset();
  };

  const cancelEditMode = () => {
    setEditMode(false);
    reset();
  };

  // =================================================================
  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form onSubmit={editMode ? handleUpdate : handleCreate}>
        <div className="form-group">
          <label for="transaction_name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="My Salary"
            required
          />
        </div>

        <div className="form-group radio">
          <label for="transaction_type">Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              checked={type === "income"}
              onChange={(e) => setType("income")}
              required
            />
            <label for="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              checked={type === "expense"}
              onChange={(e) => setType("expense")}
              required
            />
            <label for="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label for="transaction_amount">Amount</label>
          <input
            type="number"
            placeholder="300"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>
      {editMode && (
        <button className="btn cancel_edit" onClick={cancelEditMode}>
          Cancel Edit
        </button>
      )}
    </div>
  );
}
