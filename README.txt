KCYF OFFICIAL WEBSITE LAUNCH EVENT
===================================

FILES
-----
index.html
style.css
script.js

HOW TO USE
----------
1. Extract this ZIP file.
2. Open index.html in a web browser.
3. Click "LAUNCH WEBSITE".
4. A 30-second countdown begins.
5. During the countdown, switch your Nginx website from Coming Soon to Live.
6. After the countdown, a welcome screen appears.
7. The page redirects automatically to:
   https://catholic-youth-kurunegala.com

IMPORTANT
---------
Change these values in script.js if needed:

const COUNTDOWN_TIME = 30;

const WEBSITE_URL = "https://catholic-youth-kurunegala.com";

For the launch event, keep your SSH connection ready before the Bishop
clicks the launch button.

Switch command:

sudo nginx -t && sudo systemctl reload nginx
