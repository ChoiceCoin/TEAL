from algosdk import account, encoding, mnemonic


def get_private_key_from_mnemonic(mn):
    private_key = mnemonic.to_private_key(mn)
    return private_key


def random_account():
    privatekey, address = account.generate_account()
    return privatekey, address