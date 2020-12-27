from app.application import WebApplication


from app.settings.setting_service import SettingsService


if __name__ == "__main__":
    # import build_dev
    app = WebApplication.create_app()
    setting = SettingsService()
    WebApplication.run(app)
