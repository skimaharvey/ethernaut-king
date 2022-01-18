King
Difficulty 6/10

The contract below represents a very simple game: whoever sends it an amount of ether that is larger than the current prize becomes the new king. On such an event, the overthrown king gets paid the new prize, making a bit of ether in the process! As ponzi as it gets xD

Such a fun game. Your goal is to break it.

When you submit the instance back to the level, the level is going to reclaim kingship. You will beat the level if you can avoid such a self proclamation.

# Solution

Create a contract with a function that will send ethers to the King Contract but create the contract without a fallback function so that the king contract cannot send money back

ps: I was having issue because I created a fallback function that will throw an error when called however all my transactions were failling because of that (probably because the gas refund was calling this function)
