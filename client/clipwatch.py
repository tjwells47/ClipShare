#!/usr/bin/env python3
from Naked.toolshed.shell import execute_js, muterun_js
import time
import sys
import os
sys.path.append(os.path.abspath("SO_site-packages"))

import pyperclip

recent_value = ""
while True:
    tmp_value = pyperclip.paste()
    if tmp_value != recent_value:
        recent_value = tmp_value
        success = execute_js('./pushclip.js')
    time.sleep(0.1)

