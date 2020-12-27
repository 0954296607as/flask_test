import os
import json

from app.settings.helpers.cloud_helper import CloudHelper
from environment import DB_FILE_PATH, get_app_directory

from ..extentions import db
from app.models.ticker import Ticket


class SettingsService:
    def __init__(self):
        self.cloud = CloudHelper()
        self.db_file_path = DB_FILE_PATH
        self.load()

    def create_db_if_not_exist(self):
        if self._isDBExists():
            return
        print('Start to load to db. Please wait a few minutes')
        tickers = self.cloud.get_symbols()
        if not tickers:
            print('No connection')
            return
        if not db.session:
            print('No db session')
        for ticker in tickers:
            ticket_model = Ticket.create_from_any(ticker)
            if not ticket_model:
                continue
            db.session.add(ticket_model)
            db.session.commit()
        self._dbUpdateSuccessfull()
        print('End loading to db')

    def load(self):
        self._init_settings_file()

    def _init_settings_file(self):
        self.create_db_if_not_exist()

    def _dbUpdateSuccessfull(self):
        if not self._isDBExists():
            os.makedirs('db_setting')

    def _isDBExists(self):
        return os.path.exists('db_setting')
