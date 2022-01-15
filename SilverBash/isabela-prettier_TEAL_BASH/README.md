# Unique Numbers Game


This is a game developed as part of Sliver TEAL Bash. The requirement of the game was this: <b>Players submit a number within a predetermined range. Players who submit a unique number get a percentage of the pot. </b>

## Prerequisites
1. A basic understanding of the Reach Language
2. A basic undestanding of Javascript Programming Language
3. Must complete at least the basic Reach Language tutorial found at [Reach Docs](https://docs.reach.sh)
4. A Linux Computer preferably Ubuntu or a Windows Computer capable of running WSL2

## Software Requirements
1. Docker
2. Docker Compose
3. (Optional) Docker Desktop - Windows Only
4. Make

## Why use Reach
It a Programming Language which compiles it code to Teal Language, hence simplifing smart contract code.The TEAL code can be found in the 
./build/index.main 

## Getting Started

In order to make things easier, we will not go through how to install the softwares required above since this will depending solely on the kind of system you have. If you require any help, the reach documentation website will help you.

Verify all the tools are working correctly by issuing the following commands. You should get no errors in all these commands:

```bash
$ make --version
```

```bash
$ docker --version
```

```bash
$ docker-compose --version
```

Now, to get the game working, first create a working directory as follows:



```bash
$ mkdir -p ~/reach/unique-numbers-game
```

Next, get into the working directory as follows:

```bash
$ cd ~/reach/unique-numbers-game
```
All the next command will assume that we will be wokring in the directory `~/reach/unique-numbers-game`.


Now download the latest version of Reach as follows:

```bash
$ curl https://docs.reach.sh/reach -o ../reach ; chmod +x ../reach
```

You’ll know that the download worked if you can run without any error:
```bash
  $ ../reach version
```

Even though, we will walk you through the working of the game below, we need to give you a taste of how the game works by cloning the git repository as follows:

Since Reach is Dockerized, when you first use it, you’ll need to download the images it uses. This will happen automatically when you first use it, but you can do it manually now by running

```bash
  $ ../reach update
```
You’ll know that everything is in order if you can run

```bash
  $ ../reach compile --help
```

## Running the Game

To run the game, first clone the repository using the command below:

```bash
  $ git clone https://github.com/sundayglee/unique-numbers-game.git .
```

Then run the game using the following command:
```bash
  $ ../reach run
```

```bash
  $ REACH_CONNECTOR_MODE=ALGO ../reach run
```

If everything was set up correctly, you will see messages such as the following in your terminal:

```
xxx@xxx-xxx:~/reach/unique-number-game$ REACH_CONNECTOR_MODE=ALGO ../reach run
Verifying knowledge assertions
Verifying for generic connector
  Verifying when ALL participants are honest
  Verifying when NO participants are honest
  Verifying when ONLY "House" is honest
  Verifying when ONLY "Player" is honest
Checked 130 theorems; No failures!
[+] Building 0.3s (7/7) FINISHED                                                 
 => [internal] load build definition from Dockerfile                        0.0s
 => => transferring dockerfile: 38B                                         0.0s
 => [internal] load .dockerignore                                           0.0s
 => => transferring context: 34B                                            0.0s
 => [internal] load metadata for docker.io/reachsh/runner:0.1.7             0.0s
 => [internal] load build context                                           0.0s
 => => transferring context: 81.66kB                                        0.0s
 => CACHED [1/2] FROM docker.io/reachsh/runner:0.1.7                        0.0s
 => [2/2] COPY . /app                                                       0.1s
 => exporting to image                                                      0.1s
 => => exporting layers                                                     0.1s
 => => writing image sha256:eb57f2dd3017f1269a08a5114d5380fdf33bee13364cb2  0.0s
 => => naming to docker.io/reachsh/reach-app-unique-number-game:0.1.7       0.0s

> @reach-sh/unique-number-game@ index /app
> node --experimental-modules --unhandled-rejections=strict index.mjs

Are you House?
 
```

Since the game has two modes: A House and Players(Hardcoded to 2 in this game), then you will need to run the game in 3 separate terminals, one as a house, and 2 terminals as a Player.

Follow the prompt one by one to play the game!

Example, the answers for <b>House</b> terminal will be the following:
```
Are you House?
y
Starting Unique Numbers Game! as House
Would you like to create an account? (only possible on devnet)
y
Your balance is 1000
The wager amount is: 50
[ 52, 94, 17, 50, 77 ]
The contract is deployed as = 670
```

At this point, open another terminal and run the following commands as a Player number 1:
```
Are you House?
n
Starting Unique Number Game! as Player
Would you like to create an account? (only possible on devnet)
y
Please paste the contract information:
670
Your balance is 1000
What unique number did you select?
17
Do you accept the wager of 50?
y
Your balance is now 974.9749
$

```

No changes will be seen in the House's terminal yet.
Now open another terminal and run the following command as Player 2:
```
Are you House?
n
Starting Unique Number Game! as Player
Would you like to create an account? (only possible on devnet)
y
Please paste the contract information:
596
Your balance is 1000
What unique number did you select?
9
Do you accept the wager of 50?
y
Your balance is now 1000
$
```

Go back to the House terminal, and you will see the following output:

```
0x2499e0af103025aff7c03f6df90348706d7ac9ac054bbabc287c267c9c526e6d won by playing: 17
0x52ee542b552a79134d0c7aa6c427c19c0657eed90968de5a1db1fa331482da6b won by playing: 77
Your balance is now 1024.969
$
```

Congratulation! You have just played the Unique Number Game in a Blockchain!

## Problem Analysis
The first step of designing any program is to perform problem analysis and determine what we have to do to successfully finish the problem.

The problem analysis depends on the objective of our game which is: <b>Players submit a number within a predetermined range. Players who submit a unique number get a percentage of the pot. </b>

Now try to write down your own answers in your Reach backend program(`index.rsh`) using comments block using the following guiding questions:

```

Who is involved in this application?

What information do they know at the start of the program?

What information are they going to discover and use in the program?

What funds change ownership during the application and how?

```

**Stop!**
Write down the problem analysis of this program as a comment.

Compare those answers with our answers below:
```
This program involves two roles: a House who deploys the game and the Players who chooses unique numbers from a predifined list of number.

The House knows the set of predefined list and the wage amount at the start of the game as well as deadline for when a Player takes too long to respond.

The Player do not know anything when the application begins.
 
The Player learn the set of unique number, deadline and the wage amount during the program execution.

Each player chooses a unique number from the set of predefined list of numbers.

The house check the Players who chooses a unique number from predefined list and publishes them as winners, then distribute the total balance in the contract among the winners
```

Don't forget the starting `/*` and ending `*/` as these marks the section of code inside them as comments in Reach Language

It is completely okay if your answers differ from ours. If you're confident that your answers are correct you can continue with them through this workshop.


## Data Definition

Now that we know what the problem is, we can go ahead and decide what data structure our game will use for the answers we provided in the previous section as well as what interact interface function the game will use.

```
What functions/ values does House need to start and end the game?

What functions/ values do Players need to play the game?
```

You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

You should write your answers in your Reach file (`index.rsh`) as the participant interact interface for each of the participants.

