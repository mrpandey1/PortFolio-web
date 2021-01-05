from flask import Flask,render_template,request,url_for
import csv

app=Flask(__name__);

@app.route('/')
def main_view():
    return render_template('index.html')

def write_to_database(data):
    with open('database.csv',mode='a') as database:
        name=data['name']
        email=data['email']
        subject=data['subject']
        message=data['message']
        csv_writer=csv.writer(database,delimiter=',',quotechar='"',quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([name,email,subject,message])

@app.route('/submit_form',methods=['POST','GET'])
def submit_form():
    if request.method=='POST':
        try:
            data=request.form.to_dict()
            write_to_database(data)
            return render_template('thankyou.html')
        except:
            return 'did not save to database'
    else:
        return 'something went wrong please try again'
