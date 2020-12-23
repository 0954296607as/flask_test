import os

DB_FILE_NAME = 'test.db'
# if not os.path.exists('db'):
#     os.makedirs('db')

BASEDIR = os.path.abspath(os.path.dirname(__file__))


def get_app_working_directory() -> str:
    return os.path.dirname(__file__)


def get_app_template_folder() -> str:
    return os.path.join(get_app_working_directory(), 'app', 'website-app', 'dist')


def get_angular_project_path() -> str:
    return os.path.join(get_app_working_directory(), 'app', 'website-app', 'dist')


def get_static_path() -> str:
    return os.path.join(get_app_working_directory(), 'static')


def get_templates_path() -> str:
    return os.path.join(get_app_working_directory(), 'templates')


def get_database_file_path() -> str:
    base_uri = 'sqlite:////' if os.name == 'posix' else 'sqlite:///'
    return base_uri + DB_FILE_NAME


def get_app_directory() -> str:
    return os.path.join(get_app_working_directory(), 'app')


DB_FILE_PATH = os.path.join(get_app_directory(), DB_FILE_NAME)
