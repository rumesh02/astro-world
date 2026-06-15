/* Line icons specific to the Tournaments page.
   All icons inherit color via `currentColor` and size via the className. */

export function MedalIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7.5 2h9l-3 6h-3z" />
      <circle cx="12" cy="15" r="6" />
      <path d="M12 12.5 13 14.5l2 .3-1.5 1.5.4 2-1.9-1-1.9 1 .4-2L9 14.8l2-.3z" />
    </svg>
  );
}

export function WhistleIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 8h9a1 1 0 0 1 1 1v1a6 6 0 1 1-9.5-4.9" />
      <path d="M12 5V3M9 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

export function FireIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1 .3-1.8.7-2.5C9.5 9 10 7 12 2z" />
      <path d="M8.5 12.5A5.5 5.5 0 1 0 17 17c0-3-2-5-3-7-.5 2-2 2.5-3.5 3.5z" />
    </svg>
  );
}

export function CoinIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9a2.5 2.5 0 0 0-5 .2c0 2.8 5 1.5 5 4.6A2.5 2.5 0 0 1 9.5 14M12 6.5v1.5M12 16v1.5" />
    </svg>
  );
}

export function TicketIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4z" />
      <path d="M9 6v2M9 11v2M9 16v0" strokeDasharray="0.1 3" />
    </svg>
  );
}

export function BatIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.5 3.5a2.1 2.1 0 0 1 3 3L9 15l-3 .9.9-3z" />
      <path d="m6 15-3 3M16 7l1 1" />
    </svg>
  );
}

export function UsersIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
