from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Import CORS

<<<<<<< HEAD
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///submissions.db'
db = SQLAlchemy(app)

# Rest of your code...

=======
# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///submissions.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking
db = SQLAlchemy(app)

# Define the Submission model
>>>>>>> laptop
class Submission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)

<<<<<<< HEAD
=======
# Home route
>>>>>>> laptop
@app.route('/')
def home():
    return "Welcome to the Python Backend!"

<<<<<<< HEAD
@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Save to database
    new_submission = Submission(name=name, email=email, message=message)
    db.session.add(new_submission)
    db.session.commit()

    return jsonify({"status": "success", "message": "Form submitted successfully!"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create the database tables
    app.run(debug=True)
=======
# Submit form route
@app.route('/submit-form', methods=['POST'])
def submit_form():
    try:
        # Get JSON data from the request
        data = request.json

        # Validate that data is present
        if not data:
            return jsonify({"status": "error", "message": "No data provided"}), 400

        # Extract and validate fields
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()

        # Check if any field is empty
        if not name or not email or not message:
            return jsonify({"status": "error", "message": "All fields are required"}), 400

        # Validate email format (basic validation)
        if '@' not in email or '.' not in email:
            return jsonify({"status": "error", "message": "Invalid email format"}), 400

        # Create a new submission
        new_submission = Submission(name=name, email=email, message=message)

        # Add to the database
        db.session.add(new_submission)
        db.session.commit()

        # Return success response
        return jsonify({"status": "success", "message": "Form submitted successfully!"}), 200

    except Exception as e:
        # Handle any unexpected errors
        db.session.rollback()  # Rollback the transaction in case of an error
        return jsonify({"status": "error", "message": str(e)}), 500

# Run the application
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create the database tables
    app.run(debug=True)
>>>>>>> laptop
