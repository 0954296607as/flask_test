import os

from environment import get_database_file_path

KEY = "123456789"


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or KEY
    SQLALCHEMY_DATABASE_URI = get_database_file_path()
    SQLALCHEMY_TRACK_MODIFICATIONS = True
