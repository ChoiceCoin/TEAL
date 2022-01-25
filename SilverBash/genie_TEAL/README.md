# Using TEAL - Pyteal to purely express smart contract logic.

##  Utilization of Pyteal Smart Contracting prevents recursive logic to maximize safety and performance.


###     Using 'Atomic Swap' Smart Signature Mode, this allows the transfer of Algos from a buyer to a seller in exchange for a good or service. This is done using a Hashed Time Locked Contract. In this scheme, the buyer and funds a TEAL account with the sale price. The buyer also picks a secret value and encodes a secure hash of this value in the TEAL program. The TEAL program will transfer its balance to the seller if the seller is able to provide the secret value that corresponds to the hash in the program. When the seller renders the good or service to the buyer, the buyer discloses the secret from the program. The seller can immediately verify the secret and withdraw the payment. 