from algosdk import account , encoding

pvtKey , addr = account.generate_account()

print( "Account address: " , addr )
print( "Private key: " , pvtKey )

if( encoding.is_valid_address( addr ) ):
  print( "Valid account address!" )
else:
  print( 'Invalid account address!' )