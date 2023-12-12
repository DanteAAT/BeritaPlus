export function formatDate(dateString) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Asia/Jakarta', // Menetapkan zona waktu ke WIB (Waktu Indonesia Barat)
      timeZoneName: 'short', // Menampilkan singkatan zona waktu
    };
  
    const formattedDate = new Date(dateString);
    const formattedDateString = new Intl.DateTimeFormat('id-ID', options).format(formattedDate);
    return formattedDateString;
  }
  