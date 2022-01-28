from algosdk import account , encoding

privatekey , address = account.generate_account()

print( "Account address: " , address )
