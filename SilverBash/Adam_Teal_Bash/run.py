#!/usr/bin/env python3
import json
from flask import Flask, render_template, jsonify, request, flash

from util import random_account, get_private_key_from_mnemonic
from algod_app import run_algod

app =Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'secretkey'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/private_key', methods=['POST'])
def connect():
    data = json.loads(request.data)
    account = data['account']
    keywords = data['keywords']
    try:
        private_key = get_private_key_from_mnemonic(keywords)
        print(private_key)
        return jsonify({'success': private_key})
    except Exception as e:
        print('An error occured: ' + str(e))
        return jsonify({'error':'Error occured'})

@app.route('/random_account')
def random():
    privateKey, address = random_account()
    return jsonify([{
        'address': address,
        'private_key': privateKey
    }])

@app.route('/deploy')
def deploy():
    return jsonify('deployed')

@app.route('/create', methods=['POST'])
def create():
    data = json.loads(request.data)
    amount = data['amount']
    rounds = data['rounds']
    time = data['time']
    account = data['account'][0]
    print(account)
    if account.get('private_key') == None:
        return jsonify('private-key needed')
    run_algod(amount, rounds, time, account)
    flash('Successful')
    return jsonify('success')

app.run()