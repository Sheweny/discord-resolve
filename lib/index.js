"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordResolve = void 0;
class DiscordResolve {
    constructor(client) {
        /**
         *
         * @param {Guild} guild The guild
         * @param {string} arg The argument (id, mention, username, start of username )
         * @returns {GuildMember}
         */
        this.resolveMember = async (guild, arg) => {
            if (!arg || !guild || !guild.available) {
                return;
            }
            let member = guild.members.cache.find((mem) => mem.id === arg.replace('!', '').replace(/<@|>/g, '') || // Mention
                mem.user.username.toLowerCase() === arg.toLowerCase() || // Username
                `${mem.user.username.toLowerCase()}#${mem.user.discriminator}` === arg.toLowerCase() || // Username + discriminator
                mem.user.username.toLowerCase().startsWith(arg.toLowerCase())); // Starts with
            if (!member) {
                try {
                    member = await (await guild.members.fetch({ query: arg, limit: 1 })).first();
                    if (!member) {
                        const id = arg.replace('!', '').replace(/<@|>/g, '');
                        member = await guild.members.fetch(id);
                    }
                    return member;
                }
                catch {
                    return undefined;
                }
            }
            else
                return member;
        };
        /**
         *
         * @param {string} arg The argument (id, mention, username, username and discriminator, start of username )
         * @returns {User}
         */
        this.resolveUser = async (arg) => {
            if (!arg) {
                return;
            }
            let user = this.client.users.cache.find((u) => u.id === arg.replace('!', '').replace(/<@|>/g, '') ||
                u.username.toLowerCase() === arg.toLowerCase() ||
                u.username.toLowerCase().startsWith(arg.toLowerCase()) ||
                `${u.username.toLowerCase()}#${u.discriminator}` === arg.toLowerCase());
            if (!user) {
                try {
                    const id = arg.replace('!', '').replace(/<@|>/g, '');
                    return await this.client.users.fetch(id);
                }
                catch {
                    return undefined;
                }
            }
            return user;
        };
        /**
         *
         * @param {Guild} guild The guild
         * @param {string} arg The argument (id, mention, name)
         * @returns {GuildChannel}
         */
        this.resolveChannel = (guild, arg) => {
            if (!guild || !arg) {
                return;
            }
            const channel = guild.channels.cache.find((chan) => chan.id === arg ||
                chan.id === arg.replace(/<#|>/g, '') ||
                chan.name.toLowerCase().startsWith(arg.toLowerCase()) ||
                chan.name === arg.toLowerCase());
            return channel;
        };
        /**
         *
         * @param {string} arg The argument (id, name)
         * @returns {Guild}
         */
        this.resolveGuild = (arg) => {
            if (!arg)
                return null;
            const guild = this.client.guilds.cache.find((g) => g.id === arg || g.name === arg.toLowerCase());
            return guild;
        };
        /**
         *
         * @param {Guild} guild The guild
         * @param {string} arg The argument (id, mention, name, start of name )
         * @returns
         */
        this.resolveRole = (guild, arg) => {
            if (!guild || !arg)
                return null;
            const role = guild.roles.cache.find((r) => r.id === arg ||
                r.id === arg.replace('&', '').replace(/<@|>/g, '') ||
                r.name.toLowerCase().startsWith(arg.toLowerCase()) ||
                r.name === arg.toLowerCase());
            return role;
        };
        /**
         *
         * @param {Guild} guild The guild
         * @param {string} arg The argument (id, name, emoji )
         * @returns {GuildEmoji}
         */
        this.resolveGuildEmoji = (guild, arg) => {
            if (!guild || !arg)
                return null;
            const emoji = guild.emojis.cache.find((e) => e.id == arg || e.name == arg) ||
                guild.emojis.cache.find((e) => e.id == arg.replace('<:', '').replace('<a:', '').replace('>', '').split(':')[1]); // await guild.emojis.cache.find(arg.replace('<:', '').replace('<a:', '').replace('>', '').split(':')[1]).catch(() => null);
            return emoji;
        };
        /**
         *
         * @param {GuildMember} member
         * @returns {boolean}
         */
        this.resolveModo = (member) => {
            if (member.permissions.has('ADMINISTRATOR') || member.permissions.has('MANAGE_GUILD') || member.permissions.has('BAN_MEMBERS'))
                return true;
            return false;
        };
        this.client = client;
    }
    ;
}
exports.DiscordResolve = DiscordResolve;
