@echo off
powershell -ExecutionPolicy Bypass -Command "cd /d \"%~dp0\" && npm run build && wrangler pages deploy out --project-name fab-interiors --branch main"
pause
