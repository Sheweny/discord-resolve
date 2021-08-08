const { DiscordResolve } = require("../lib");
import { Client, Intents } from "discord.js";
import type { Message } from 'discord.js'
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const util = new DiscordResolve(client);
client.on("message", async (msg: Message) => {
	const args = msg.content.split(" ");
	if (msg.content.startsWith("!test")) {
		const user = await util.resolveUser(args[1]); // args[1] accept id, mention, name, start of name and username + discriminator.
		const guild = util.resolveGuild(args[2]); // args[2] accept id, and name.
		const member = await util.resolveMember(msg.guild, args[3]); // args[3] accept id, mention, username, start of username.
		const channel = util.resolveChannel(msg.guild, args[4]); // args[4] accept id, mention and name.
		const role = util.resolveRole(msg.guild, args[5]); // args[5] accept id, mention, name and start of name.
		const emoji = util.resolveGuildEmoji(msg.guild, args[6]); // args[6] accept id, name and emoji.
		console.log(`User : ` + user.username);
		console.log(`Guild : ` + guild.name);
		console.log(`Member : ` + member.user.username);
		console.log(`Channel : ` + channel.name);
		console.log(`Role : ` + role.name);
		console.log(`Emoji : ` + emoji.name);

	}

});
client.login("<discord token>");