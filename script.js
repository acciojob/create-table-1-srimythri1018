function insert_Row() {
  const table = document.getElementById("sampleTable");

  // Create a new row and cells
  const newRow = table.insertRow(0);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set the cell values
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
}
