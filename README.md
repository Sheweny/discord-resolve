# Discord-resolve

This module groups together functions to retrieve data from different types of arguments. The functions group together all the possible cases each time (id, mention, name, start of name, name + tag).

## Usage

Create a new instance of DiscordResolve with the client has a parameter. Example : `const resolve = new DiscordResolve(client)`.

### Methods

- `resolveUser(arg)` : Get a user.  
Parameter :  
  - arg : Id, mention, name, start of name, name + discriminator. (string)  

  Return : User or undefined  
  
- `resolveGuild(arg)` : Get a guild.  
Parameter :  
  - arg : Name or id of guild. (string)  

  Return : Guild or undefined  
  
- `resolveMember(guild, arg)` : Get a guild member.  
Parameter :  
  - guild : The guild (Guild)  
  - arg : Id, mention, username, start of username. (string)  

  Return : Member or undefined  
  
- `resolveChannel(guild, arg)` : Get a guild channel.  
Parameter :  
  - guild : The guild (Guild)  
  - arg : Id, mention, name, start of name. (string)  

  Return : GuildChannel or undefined  
  
- `resolveRole(guild, arg)` : Get a guild role.  
Parameter :  
  - guild : The guild (Guild)  
  - arg : Id, mention, name, start of name. (string)  
  
  Return : Role or undefined  
  
- `resolveGuildEmoji(guild, arg)` : Get a guild emoji.  
Parameter :  
  - guild : The guild (Guild)  
  - arg : Id, name, emoji. (string)

  Return : GuildEmoji or undefined  
  
- `resolveModo(member)` : Check if user is modo.  
Parameter :  
  - member : GuildMember

  Return : Boolean or undefined  

```js

const {DiscordResolve} = require('discord-resolve');
const {Client, Intents} = require('discord.js');

const client = new Client({intents:Intents.NON_PRIVILEGED});
const util = new DiscordResolve(client);
client.on('message', async msg => {
  const args = msg.content.split(' ');
  const user = await util.resolveUser(args[0]) // args[0] accept id, mention, name, start of name and username + discriminator.
  const guild = util.resolveGuild(args[1]) // args[1] accept id, and name.
  const member = await util.resolveMember(msg.guild, args[2]) // args[2] accept id, mention, username, start of username.
  const channel = util.resolveChannel(msg.guild, args[3]) // args[3] accept id, mention and name.
  const role = util.resolveRole(msg.guild, args[4]) // args[4] accept id, mention, name and start of name.
  const emoji = util.resolveGuildEmoji(msg.guild, args[5]) // args[5] accept id, name and emoji.
})
client.login('token')
```
