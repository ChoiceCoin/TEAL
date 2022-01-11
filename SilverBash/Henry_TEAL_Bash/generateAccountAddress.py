from algosdk import account , encoding

pvtKey , addr = account.generate_account()

print( "Account address: " , addr )


if( encoding.is_valid_address( addr ) ):
  print( "This is a Valid Account Address!" )
else:
  print( 'This is not a Valid Account Address' )