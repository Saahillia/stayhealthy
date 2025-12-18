import { useEffect, useState } from "react";

const initialState = {
  name: "",
  type: "",
  status: "",
  lastCleaned: "",
};

export default function EquipmentForm({ onSave, editing }) {
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        editing ? setForm(editing) : setForm(initialState);
    }, [editing]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.type || !form.status) return alert("All fields required");
        onSave(form);
        setForm(initialState);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
            <option value="">Type</option>
            <option>Machine</option>
            <option>Vessel</option>
            <option>Tank</option>
            <option>Mixer</option>
        </select>
        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
            <option value="">Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Under Maintenance</option>
        </select>
        <input type="date" value={form.lastCleaned} onChange={e => setForm({ ...form, lastCleaned: e.target.value })} />
        <button type="submit">{editing ? "Update" : "Add"}</button>
        </form>
    );
}
