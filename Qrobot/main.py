from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/stopwatch")
def stopwatch():
    return render_template("stopwatch.html")

@app.route("/user_settings")
def user_settings():
    return render_template("user_settings.html")

@app.route("/stats")
def stats():
    return render_template("stats.html")

@app.route("/bloques")
def bloques():
    return render_template("bloques.html")

@app.route("/profilepic")
def profilepic():
    return render_template("profilepic.html")

if __name__ == '__main__':
    app.run(debug=True)
