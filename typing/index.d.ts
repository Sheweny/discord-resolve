import type { Client, Guild, GuildMember, Role, GuildEmoji, GuildChannel, ThreadChannel } from "discord.js";
export declare class DiscordResolve {
    client: any;
    constructor(client: Client);
    /**
     *
     * @param {Guild} guild The guild
     * @param {string} arg The argument (id, mention, username, start of username )
     * @returns {GuildMember}
     */
    resolveMember: (guild: Guild, arg: string) => Promise<GuildMember>;
    /**
     *
     * @param {string} arg The argument (id, mention, username, username and discriminator, start of username )
     * @returns {User}
     */
    resolveUser: (arg: string) => Promise<any>;
    /**
     *
     * @param {Guild} guild The guild
     * @param {string} arg The argument (id, mention, name)
     * @returns {GuildChannel}
     */
    resolveChannel: (guild: Guild, arg: string) => GuildChannel | ThreadChannel;
    /**
     *
     * @param {string} arg The argument (id, name)
     * @returns {Guild}
     */
    resolveGuild: (arg: string) => any;
    /**
     *
     * @param {Guild} guild The guild
     * @param {string} arg The argument (id, mention, name, start of name )
     * @returns
     */
    resolveRole: (guild: Guild, arg: string) => Role;
    /**
     *
     * @param {Guild} guild The guild
     * @param {string} arg The argument (id, name, emoji )
     * @returns {GuildEmoji}
     */
    resolveGuildEmoji: (guild: Guild, arg: string) => GuildEmoji;
    /**
     *
     * @param {GuildMember} member
     * @returns {boolean}
     */
    resolveModo: (member: GuildMember) => boolean;
}
