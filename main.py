from app.application import WebApplication


from app.settings.setting_service import SettingsService


if __name__ == "__main__":
    app = WebApplication.create_app()
    setting = SettingsService()
    WebApplication.run(app)
