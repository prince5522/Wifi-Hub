# Wi-Fi Hub Foundation v1
This is the clean application shell.

Principles:
- Offline-first PWA shell
- Graceful failure instead of raw error screens
- Independent feature modules
- Persistent cloud authentication later through Firebase
- Cloud-authoritative permissions and payments
- Local cached app shell for fast startup
- Duplicate action protection
- Mobile-first Liquid Glass + Glassmorphism + Soft Neumorphism

No software can honestly promise zero failures. The target is graceful degradation: a failed service must not unnecessarily crash the whole app.
