import os

DB_FILE_NAME = 'test.db'
# if not os.path.exists('db'):
#     os.makedirs('db')

SETTING_JSON_FILE_NAME = 'settings.json'
BASEDIR = os.path.abspath(os.path.dirname(__file__))


def get_app_working_directory() -> str:
    return os.path.dirname(__file__)


def get_angular_project_path() -> str:
    return os.path.join(get_app_working_directory(), 'app', 'website-app', 'dist', 'website-app')


def get_static_path() -> str:
    return os.path.join(get_app_working_directory(), 'app', 'static')


def get_templates_path() -> str:
    return os.path.join(get_app_working_directory(), 'app', 'templates')


def get_database_file_path() -> str:
    base_uri = 'sqlite:////' if os.name == 'posix' else 'sqlite:///'
    return base_uri + DB_FILE_NAME


def get_app_directory() -> str:
    return os.path.join(get_app_working_directory(), 'app')


DB_FILE_PATH = os.path.join(get_app_directory(), DB_FILE_NAME)
