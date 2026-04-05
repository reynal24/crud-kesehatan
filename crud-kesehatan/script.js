let dataPasien = JSON.parse(localStorage.getItem("pasien")) || [];

function tampilkanData() {
    let tabel = document.getElementById("tabelData");
    tabel.innerHTML = "";

    dataPasien.forEach((item, index) => {
        tabel.innerHTML += `
        <tr>
            <td>${item.nama}</td>
            <td>${item.umur}</td>
            <td>${item.diagnosa}</td>
            <td>
                <button onclick="editData(${index})">Edit</button>
                <button onclick="hapusData(${index})">Hapus</button>
            </td>
        </tr>`;
    });
}

document.getElementById("formPasien").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let diagnosa = document.getElementById("diagnosa").value;

    dataPasien.push({ nama, umur, diagnosa });
    localStorage.setItem("pasien", JSON.stringify(dataPasien));

    tampilkanData();
    this.reset();
});

function hapusData(index) {
    dataPasien.splice(index, 1);
    localStorage.setItem("pasien", JSON.stringify(dataPasien));
    tampilkanData();
}

function editData(index) {
    let data = dataPasien[index];

    document.getElementById("nama").value = data.nama;
    document.getElementById("umur").value = data.umur;
    document.getElementById("diagnosa").value = data.diagnosa;

    hapusData(index);
}

tampilkanData();