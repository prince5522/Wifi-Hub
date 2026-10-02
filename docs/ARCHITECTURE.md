# Architecture direction
Frontend: HTML/CSS/JavaScript, mobile-first PWA.
Backend: Firebase Authentication, Firestore, Hosting, Cloud Functions.
Core roles: User, Pro, VVIP, Technician/Shared User, Platform Admin.
Invitation model: server-generated token, scoped permissions, optional expiry, revocation and audit log.
Important operations such as payment confirmation and privileged access must be verified server-side.
Offline: cache app shell; keep important cloud data authoritative; synchronize when connectivity returns.
