from datetime import datetime

from sqlalchemy import Column, Integer, String, Boolean, Date
from ..extentions import db


class Ticket(db.Model):
    __tablename__ = 'ticket'

    id = Column(Integer, primary_key=True)
    symbol = Column(String)
    exchange = Column(String)
    exchangeSuffix = Column(String)
    exchangeName = Column(String)
    name = Column(String)
    date = Column(Date)
    type = Column(String)
    iexId = Column(String)
    region = Column(String)
    currency = Column(String)
    isEnabled = Column(Boolean)
    figi = Column(String)
    cik = Column(String)
    lei = Column(String)

    @staticmethod
    def create_from_array(array):
        if not isinstance(array, list):
            return []
        return [Ticket.create_from_any(item) for item in array if item]

    @staticmethod
    def create_from_any(obj):
        if not object:
            return
        new_ticker = Ticket()
        new_ticker.symbol = obj.get('symbol', None)
        new_ticker.exchange = obj.get('exchange', None)
        new_ticker.exchangeSuffix = obj.get('exchangeSuffix', None)
        new_ticker.exchangeName = obj.get('exchangeName', None)
        new_ticker.name = obj.get('name', None)
        date = obj.get('date', None)
        new_ticker.date = datetime.strptime(date, '%Y-%m-%d') if date else date
        new_ticker.type = obj.get('type', None)
        new_ticker.iexId = obj.get('iexId', None)
        new_ticker.region = obj.get('region', None)
        new_ticker.currency = obj.get('currency', None)
        new_ticker.isEnabled = obj.get('isEnabled', None)
        new_ticker.figi = obj.get('figi', None)
        new_ticker.cik = obj.get('cik', None)
        new_ticker.lei = obj.get('lei', None)
        return new_ticker
