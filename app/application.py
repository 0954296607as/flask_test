from config import Config
from flask import Flask
from app.main.routers import bp as main_bp
from .extentions import db


class WebApplication:

    @staticmethod
    def create_app() -> Flask:
        app = Flask(__name__)
        app.config.from_object(Config)

        db.init_app(app)
        app.app_context().push()

        with app.app_context():
            from . import models
            db.create_all()

        app.register_blueprint(main_bp)

        return app

    @staticmethod
    def run(app: Flask):
        app.run(port=8080)

