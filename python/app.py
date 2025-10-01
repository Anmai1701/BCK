# app.py

from flask import Flask, render_template

app = Flask(__name__)

# Định nghĩa route mới để render template
@app.route('/')
def home():
    # Trả về tệp HTML
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)