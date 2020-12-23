# -*- coding: utf-8 -*-
from abc import abstractmethod


class BaseHelper:

    def __init__(self, settings_service):
        self.settings_service = settings_service