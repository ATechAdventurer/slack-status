# Slack-Status

This is a very basic implementation of a slack status changer written as a npm package

## How to Use
```javascript
let slackChanger = require('slack-changer');

slackChanger.setSlackStatus("Happy To Be Alive", ":smile:", "<slacktoken>")
```
## Parameters
.setSlackStatus("Slack status", "Emoji with ::", (optional) "slacktoken")

"Slack status": A string that you would like to set your status
"Emoji": A string referencing the slack icon EX: ":poop:"
"slacktoken": Optional can also be set with an environment variable - slackToken