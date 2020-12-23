# -*- coding: utf-8 -*-
import pyEX

from app.settings.helpers.base_helper import BaseHelper

TOKEN = 'Tpk_1e8fef17ee254009a45873d2c1b76828'


class CloudHelper(BaseHelper):

    def __init__(self):
        pass
        self.iexCloud = pyEX.Client(api_token=TOKEN, version='sandbox')

    def get_symbols(self):
        # return [
        #     {
        #         'symbol': 'A',
        #         'exchange': 'SNY',
        #         'exchangeSuffix': 'NU',
        #         'exchangeName': 'SCENHYCN.NIX , GE CKTEWOOR KA',
        #         'name': 'eAhIo g .elnnsgiTniletocc',
        #         'date': '2020-12-23',
        #         'type': 'cs',
        #         'iexId': 'IEX_46574843354B2D52',
        #         'region': 'US',
        #         'currency': 'USD',
        #         'isEnabled': True,
        #         'figi': 'DV2BBC06G030',
        #         'cik': '1131884',
        #         'lei': 'UGR70QMX2WX92Y78WAPI'
        #     }]
        return self.iexCloud.symbols()
