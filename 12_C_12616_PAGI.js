console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH");
console.log('_'.repeat(50));

// Fungsi untuk memvalidasi data mahasiswa
async function validateData(studentData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!studentData.nama || !studentData.umur || !studentData.ktp) {
                resolve("Invalid data");
            } else if (studentData.umur < 17) {
                resolve("Student is too young");
            } else if (!/^\d{16}$/.test(studentData.ktp)) {
                resolve("Invalid KTP number");
            } else {
                resolve(null); // Data valid
            }
        }, 5000); // Simulasi delay 5 detik
    });
}

// Fungsi untuk memproses data pendaftaran mahasiswa
async function processData(studentData) {
    const error = await validateData(studentData);

    if (error) {
        console.log(`An error occurred: ${error}`);
    } else {
        console.log(`Student ${studentData.nama} has been successfully registered`);
    }
}

// Pemanggilan fungsi processData
async function main() {
    await processData({ nama: "", umur: 22, ktp: "1234567890123456" });
    await processData({ nama: "Fahmy", umur: 16, ktp: "1234567890123456" });
    await processData({ nama: "Kevin", umur: 20, ktp: "12345" });
    await processData({ nama: "Yosia", umur: 19, ktp: "2317126161234567" });
    await processData({ nama: "Kay", umur: 22, ktp: "1122334455667788" });
}

main();
