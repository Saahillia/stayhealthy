import { useEffect, useState } from "react";
import { getEquipment, addEquipment, updateEquipment, deleteEquipment } from "./api";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadData = async () => {
    setEquipment(await getEquipment());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (data) => {
    editing ? await updateEquipment(editing.id, data) : await addEquipment(data);
    setEditing(null);
    loadData();
  };

  return (
    <div className="container">
      <h2>Equipment Tracker</h2>
      <EquipmentForm onSave={handleSave} editing={editing} />
      <EquipmentTable
        data={equipment}
        onEdit={setEditing}
        onDelete={async (id) => {
          await deleteEquipment(id);
          loadData();
        }}
      />
    </div>
  );
}

export default App;
