import os
import shutil
from environment import get_app_working_directory, get_angular_project_path, get_static_path, get_templates_path, \
    get_app_directory

CURRENT_DIRECTORY = get_app_working_directory()
NG_WORKING_DIRECTORY = get_angular_project_path()
STATIC_PATH = get_static_path()
TEMPLATES_PATH = get_templates_path()

if not os.path.exists(STATIC_PATH):
     os.makedirs(os.path.join(get_app_directory(),'static'))
if not os.path.exists(TEMPLATES_PATH):
     os.makedirs(os.path.join(get_app_directory(),'templates'))


try:
    files = os.listdir(NG_WORKING_DIRECTORY)
    for file in files:
        if '.html' in file:
            shutil.move(os.path.join(NG_WORKING_DIRECTORY, file), os.path.join(TEMPLATES_PATH, file))
        else:
            shutil.move(os.path.join(NG_WORKING_DIRECTORY, file), os.path.join(STATIC_PATH, file))
except Exception as e:
    print(repr(e))
