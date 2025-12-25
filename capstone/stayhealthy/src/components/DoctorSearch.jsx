import { useState } from "react";

function DoctorSearch() {
  const doctors = ["Cardiologist", "Dentist", "Psychologist"];
  const [search, setSearch] = useState("");

  return (
    <div>
      <h3>Find Doctor</h3>
      <input
        placeholder="Search doctor"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {doctors
          .filter(d => d.toLowerCase().includes(search.toLowerCase()))
          .map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
      </ul>
    </div>
  );
}
export default DoctorSearch;
