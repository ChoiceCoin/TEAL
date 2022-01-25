# Periodic_payment

## Periodic Payment allows some account to execute periodic release of funds after a period and number of rounds

This allows TMPL_RCV to withdraw TMPL_AMT every

TMPL_PERIOD rounds for TMPL_DUR after every multiple
of TMPL_PERIOD.

After TMPL_TIMEOUT, all remaining funds in the escrow
are available to TMPL_RCV.

### Install

- PyTeal requires Python version >= 3.6.
- cd to the directory where requirements.txt is located.
- activate your virtualenv.
- run: pip install -r requirements.txt in your shell.

### Run

- Run the periodic_transfer contract in your shell
