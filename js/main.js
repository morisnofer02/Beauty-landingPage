// Timer
const endHour = 22; // Jam 10 malam
const startHour = 0; // Jam 12 malam
setInterval(() => {
  const now = new Date();
  let end = new Date();
  // Set waktu end ke jam 10 malam
  end.setHours(endHour, 0, 0, 0);
  // Jika waktu sudah lebih dari jam 10 malam, timer berhenti
  if (now.getHours() >= endHour) {
    // Jika waktu sekarang lebih dari atau sama dengan jam 10 malam, biarkan timer berhenti
    return; // Keluarkan dari setInterval, timer tidak berjalan
  }
  // Set waktu end ke jam 12 malam (00:00) hari berikutnya
  if (now.getHours() < startHour) {
    end.setHours(startHour, 0, 0, 0);
    end.setDate(end.getDate() + 1); // Ke tanggal berikutnya
  }
  let t = end - now,
    h = Math.floor(t / 36e5), // Menghitung jam
    m = Math.floor((t % 36e5) / 6e4), // Menghitung menit
    s = Math.floor((t % 6e4) / 1e3); // Menghitung detik
  // Update timer di halaman
  document.querySelector('.timer-hour').textContent = `${h}`.padStart(2, '0');
  document.querySelector('.timer-minute').textContent = `${m}`.padStart(2, '0');
  document.querySelector('.timer-second').textContent = `${s}`.padStart(2, '0');
}, 1000);
