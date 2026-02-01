Middleware layer for SoluGrow Engine.

This folder enforces:
- Authentication (JWT)
- Role-based access control
- Recovery Mode locks
- Payment and salary restrictions

Middleware acts as an iron wall.
If a rule is broken, the request never reaches the controller.
