function createTable() {
    const table = document.createElement('table');

    let count = 1;
    for (let i = 0; i < 10; i++) {
        const row = table.insertRow(i);

        for (let j = 0; j < 10; j++) {
            const cell = row.insertCell(j);
            cell.textContent = count++;
        }
    }

    document.body.appendChild(table);
}

createTable();