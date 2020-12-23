import os

from app.settings.helpers.cloud_helper import CloudHelper
from environment import DB_FILE_PATH

from ..extentions import db
from app.models.ticker import Ticket


class SettingsService:
    def __init__(self):
        self.cloud = CloudHelper()
        self.db_file_path = DB_FILE_PATH
        self.load()

    def create_db_if_not_exist(self, destination_file_path):
        if os.path.isfile(destination_file_path) and os.stat(destination_file_path).st_size != 0:
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
        print('End loading to db')

    def load(self):
        self._init_settings_file()

    def _init_settings_file(self):
        self.create_db_if_not_exist(self.db_file_path)
