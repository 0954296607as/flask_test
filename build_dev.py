import os
import time
import subprocess
import shutil
from environment import get_app_working_directory, get_angular_project_path, get_static_path, get_templates_path


CURRENT_DIRECTORY = get_app_working_directory()
NG_WORKING_DIRECTORY = get_angular_project_path()
STATIC_PATH = get_static_path()
TEMPLATES_PATH = get_templates_path()

subprocess.call(('cd' + NG_WORKING_DIRECTORY + '&& ng build --base-href /static/ --watch &'), shell=True)

dir_exists = True

while dir_exists:
    try:
        files = os.listdir(NG_WORKING_DIRECTORY)
        for file in files:
            if '.html' in file in file:
                shutil.move(NG_WORKING_DIRECTORY + '/' + file, TEMPLATES_PATH + '/' + file)
            else:
                shutil.move(NG_WORKING_DIRECTORY + '/' + file, STATIC_PATH + '/' + file)
    except Exception:
        dir_exists = False
    time.sleep(10.0)
