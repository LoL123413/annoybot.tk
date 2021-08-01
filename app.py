from flask import Flask, render_template, request, session
from oauth import Oauth


app = Flask(__name__)
app.config["SECRET_KEY"] = "test123"

@app.route("/")
def home():
	return render_template("index.html",discord_url="https://www.annoybot.tk")


if __name__ == "__main__":
	app.run(debug=True)
