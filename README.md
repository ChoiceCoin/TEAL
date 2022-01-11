# TEAL
Repository for TEAL Code.

#Periodic payment

Periodic Payment allows some account to execute periodic withdrawal of funds.
This PyTeal program creates a contract account that allows rcv_addr to withdraw pay_amt every pay_period rounds for pay_dur after every multiple of pay_period.

After pay_timeout, all remaining funds in the escrow are available to rcv_addr.