# Summary

Sample code for an Algorand Alexa skill that allows users to ask Alexa:

1. For the latest block on {MainNet|TestNet|BetaNet}.
2. To predict a future round at a given clock time (provided by the user).
3. To predict a future clock time for a given round (provided by the user).
4. Information about a particular asset (user provides the asset ID). 

# Code Components

- `lambda.py` - The main Python module that handles the processing of intents and slots received by Alexa.
- `algorand.py` - Helper functions related to the Algorand SDK.
- `config.py` - Default values for when the user underspecifies certain requests.
- `util.py` - Various utility functions. A number of functions to help process datetime objects for predict round and time intents.
- `prompts.py` - The natural language prompts that Alexa will use to deliver the retrieved information. Includes some prompt formatting functions.
- `interaction_model.json` - The intent/slot/dialog schema and sample utterances that Alexa uses to build the skill's interaction model. Drop this into the JSON editor in the Alexa Developer Console.

## Clone Sample Code
Copy or clone the contents of this folder onto your computer. You can clone the whole repository (which includes other unrelated sample apps)

## Modify `algorand.py`

Modify the `pick_client` function in [`algorand.py`](./algorand.py) for your node credentials. If are using the [Purestake API](https://developer.purestake.io/), you just need to add your API Token to this line of code:

```python
def pick_client(network):
    """
    Return a client connected to the supplied network.
    """

    algod_token = ""
    headers = {
    "X-API-Key": "" # Add your API token here
    }
    ...
```

## Deploy Lambda Code

Zip all the `.py` files, including dependencies into a single .zip deployment package. Note that all `import` modules must be in the root directory of the zip file. 

### How to Create the Lambda Deployment Package

Navigate to your copied or cloned directory, create and activate a Python virtual environment and install the dependencies. Make sure you are using a Linux-based operating system when installing the requirements to match Lambda's runtime environment. Certain cryptography modules in the Algorand SDK will not work if built on other operating systems like Mac and then transferred to Lambda. 

```bash
$ cd {PATH_TO_DIR}/algorand-alexa-skill-python
$ python3 -m venv {ENV_NAME}
$ source {ENV_NAME}/bin/activate
$ pip3 install -r requirements.txt
```

Create a `.zip` deployment package with all Python modules placed at the root directory. If you are using the provided `lambda-deploy.zip` make sure to skip the first set of commands that adds the site packages to the .zip file.

```bash
# Add dependencies
$ cd {ENV_NAME}/lib/python3.{VERSION}/site-packages/
$ zip -r9 {PATH_TO_DIR}/algorand-alexa-skill-python/lambda-deploy.zip .

# Add main lambda code and related .py files.
$ cd {PATH_TO_DIR}/algorand-alexa-skill-python
$ zip -r9 lambda-deploy.zip *.py
```

If you use this starter .zip file, you can skip the first command shown above just add the root directory's .py files.

```bash
$ zip -r9 lambda-deploy.zip *.py
```

Finally, upload the complete `lambda-deploy.zip` file to your Lambda function in AWS.

