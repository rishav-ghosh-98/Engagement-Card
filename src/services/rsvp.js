// Lightweight RSVP submission stub — swap the body for a real API call later.
export async function submitRsvp({ optionId, guestName }) {
  // Example future implementation:
  // return fetch('/api/rsvp', { method: 'POST', body: JSON.stringify({ optionId, guestName }) });
  console.info('RSVP received (not yet wired to a backend):', { optionId, guestName });
  return Promise.resolve({ ok: true });
}
