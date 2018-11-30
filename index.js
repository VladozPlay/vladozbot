const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('message', message => {

    if (message.content == '!роли' && message.member.hasPermission('ADMINISTRATOR')) {
        message.guild.roles.forEach(function(role) {
        message.channel.send(`'${role.name}': '${role.id}',`);
        })

    }
});

client.on('guildMemberAdd', member => {
    member.user.send(`
Добро пожаловать в Альянс :star: The Silent Masters :star:

Наше сообщество **Гиперсоциальное** - в наших кланах имеет приемущество: общение и игра в команде.
Все действия связанное с игрой, у нас происходят в Discrord'e!

:gem: **ОСНОВНЫЕ ПРАВИЛА НАШЕГО АЛЬЯНСА:**
:pushpin: **Набор участников в кланы с 18 лет**. (Бывают исключения - после личного общения через голосовую связь)
:pushpin: **Мы принимаем только общительных игроков, заинтересованных в новых знакомствах и игре в команде**. (Соло-игроков мы не держим)
:pushpin: **Все команды собираются только через голосовой чат.** (Чат клана в игре мы не используем, т.к. у нас есть альянсовый чат в Дискорде)

**ВНИМАНИЕ:** Если вам не подходят данные правила, не стоит вступать к нам в Альянс на "авось" или от безысходности. 
Кланы у нас социальные и в первую очередь для Общения. Если вы необщительный, не можете терпеть скопления людей..
И у вас кучи факторов, из-за которых, у вас непостоянный онлайн и нет возможности сидеть в голосовых каналах - **НЕ ВСТУПАЙТЕ К НАМ!**
Серьезно.. В игре есть куча кланов/альянсов, где вас примут без обязательств, такими - какие вы есть. 
У нас Альянс - для **реально** заинтересованных людей в общении и освоении контента.

**Чтобы в ступить в один из несколько кланов.. В первую очередь - прочтите все правила Альянса:** <#467486458454999050>
**Если вы долгое время сидите в комнате ожидания и вас ни кто не принимает.. Отпишите главе клана, который в сети.** Список глав: <#505123044126097418>

**По всем вопросам Альянса, писать -** <@267781147222605825>
`)
})

const modRoles0 = ['505097311710478368'];
const clanRoles0 = ['505097312821968896', '517406786970583051']
const guestRole0 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьATS`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        modRoles0.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles0.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole0);
    }
});

const modRoles1 = ['505097305519816706'];
const clanRoles1 = ['505097311408619560', '517406786970583051']
const guestRole1 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьTOS`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        modRoles1.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles1.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole1);
    }
});

const modRoles2 = ['505750406643712030'];
const clanRoles2 = ['505750403950837771', '517406786970583051']
const guestRole2 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьTDR`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        modRoles2.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles2.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole2);
    }
});

const modRoles3 = ['505370600756477962'];
const clanRoles3 = ['505097313652310026', '517406786970583051']
const guestRole3 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьJH`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        modRoles3.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles3.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole3);
    }
});

const modRoles4 = ['507290134115254282'];
const clanRoles4 = ['507290137265176588', '517406786970583051']
const guestRole4 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьPP`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        modRoles4.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles4.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole4);
    }
});

const modRoles5 = ['505097314105294878'];
const clanRoles5 = ['505097318387810314', '517406786970583051']
const guestRole5 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьID`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        modRoles5.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles5.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole5);
    }
});

const modRoles6 = ['505475455831375892'];
const clanRoles6 = ['505475448403394587', '517406786970583051']
const guestRole6 = '505097320157806593'

client.on('message', message => {
    if (message.content.startsWith(`!выдатьTC`)) {
        let mod = false;

        let messageArray = message.content.split(/\s+/g);
        let toRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(messageArray[1]));

        modRoles6.forEach(function(roleID) {
            if (message.member.roles.has(roleID)) {
                mod = true;
            }
        })

        if (!mod) return message.channel.send(`У Вас нет прав для выполнения данной команды`);

        clanRoles6.forEach(function(roleID) {
            toRole.addRole(roleID).catch(console.error)
        })

        message.channel.send('Роли: **клана** и **участника альянса** - выданы!')

        toRole.removeRole(guestRole6);
    }
});

client.on("ready", () => {
    function clear_nicks() {
        client.guilds.get('467467257115836416').members.filter(memb => memb.displayName.startsWith('!')).forEach(member => member.setNickname(member.displayName.replace(/^!+/gi, '')).catch())
    }
    clear_nicks();
    setInterval(clear_nicks, 300000);
});

client.on("guildMemberUpdate", (old_memb, new_memb) => {
    if (new_memb.displayName.startsWith('!')) new_memb.setNickname(new_memb.displayName.replace(/^!+/gi, '')).catch();
});

client.on("userUpdate", (old_user, new_user) => {
    if (!client.guilds.get('467467257115836416').members.get(old_user.id)) return;
    if (client.guilds.get('467467257115836416').members.get(old_user.id).displayName.startsWith('!')) client.guilds.get('467467257115836416').members.get(new_user.id).setNickname(client.guilds.get('467467257115836416').members.get(new_user.id).displayName.replace(/^!+/gi, '')).catch();
});

client.on('error', function(error) {
console.log(error)
});
