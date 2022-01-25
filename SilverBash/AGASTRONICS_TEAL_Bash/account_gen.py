from algosdk import (account , encoding)

privateKey , address = account.generate_account()

print( "*** ACCOUNT ADDRESS ***: " , address )
print( "*** PRIVATE KEY ***: " , privateKey )

if( encoding.is_valid_address( address ) ):
  print( f'{address} is a valid account address!' )
else:
  print( f' {address}  is an invalid account!' )