# Entry point for deployment via Flask
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'MAS system is running!'

if __name__ == '__main__':
    app.run(debug=True)
