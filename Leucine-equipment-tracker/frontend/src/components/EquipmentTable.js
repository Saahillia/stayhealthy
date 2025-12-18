export default function EquipmentTable({ data, onEdit, onDelete }) {
    return (
        <table>
        <thead>
            <tr>
            <th>Name</th><th>Type</th><th>Status</th><th>Last Cleaned</th><th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map(e => (
            <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.type}</td>
                <td>{e.status}</td>
                <td>{e.lastCleaned}</td>
                <td>
                <button onClick={() => onEdit(e)}>Edit</button>
                <button onClick={() => onDelete(e.id)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}
