console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH");
console.log('_'.repeat(50));

// Fungsi untuk menghitung umur dari tanggal lahir
function hitungUmur(tanggalLahir) {
    const today = new Date();
    const birthDate = new Date(tanggalLahir);
    let umur = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        umur--;
    }
    return umur;
}

// Fungsi untuk memvalidasi data mahasiswa
async function validateData(studentData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!studentData.nama || !studentData.tanggal || !studentData.ktp) {
                resolve("Invalid data");
            } else if (hitungUmur(studentData.tanggal) < 17) {
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
    await processData({ nama: "", tanggal: "2002-12-15", ktp: "1234567890123456" });
    await processData({ nama: "Fahmy", tanggal: "2010-05-20", ktp: "1234567890123456" });
    await processData({ nama: "Kevin", tanggal: "2003-10-10", ktp: "12345" });
    await processData({ nama: "Yosia", tanggal: "2005-09-25", ktp: "2317126161234567" });
    await processData({ nama: "Kay", tanggal: "2001-03-22", ktp: "1122334455667788" });
}

main();
