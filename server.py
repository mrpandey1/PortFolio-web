from flask import Flask,render_template,request,url_for

app=Flask(__name__);

@app.route('/')
def main_view():
    return render_template('index.html')

@app.route('/submit_form',methods=['POST','GET'])
def submit_form():
    if request.method=='POST':
        data=request.form.to_dict()
        print(data)
        return 'form submitted'
    else:
        return 'something went wrong please try again'
