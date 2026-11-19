const formatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// Formats an ISO date string in English, e.g. "10 February 2027".
export function formatEventDate(dateString) {
  try {
    return formatter.format(new Date(`${dateString}T00:00:00`));
  } catch {
    return dateString;
  }
}

// Converts a 24-hour "HH:mm" string into a 12-hour English time, e.g. "7:30 PM".
export function formatEventTime(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, '0')} ${period}`;
}
