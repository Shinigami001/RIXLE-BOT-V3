let { MessageType, mentionedJid } = require("@adiwajshing/baileys")
let knights = require('knights-canvas')
let fetch = Ft.fetch
module.exports = {
async battery(json) {
let battery = json[2][0][1].value
let persenbat = parseInt(battery)
battrey.value = `${persenbat}%`
battrey.live = json[2][0][1].live
global.battery = ({
value: battrey.value,
isCharge: battry.live
})
}
}

module.exports = {
async groupUpdate(member) {
console.log(member)
let groupM = await conn.groupMetadata(member.jid)
let mem = member.participants[0]
let action = member.action
try {
let img = Ft.getBuffer(await vanz.getProfilePicture(mem))
} catch {
img = await (await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1pVfdb1zUoSve4Unc08jl5BpCHwfys8qxA&usqp=CAU')).buffer()
}
switch (action) {
case 'remove': 
let namegc = await conn.groupMetadata(m.chat)
  let pp = 'https://ibb.co/syWXQ7J'
  let ppgc = 'https://ibb.co/syWXQ7J'
try {
  pp = await uploadImage(await (await fetch(await this.getProfilePicture(user))).buffer())
   ppgc = await uploadImage(await (await fetch(await this.getProfilePicture(jid))).buffer())
            } catch (e) {
            } finally {
  let lev = await new knights.Goodbye()
                .setUsername(this.getName(m.sender))
                .setGuildName(this.getName(namegc))
                .setGuildIcon(ppgc)
                .setMemberCount(groupM.participants.length)
                .setAvatar(pp)
                .setBackground("https://i.ibb.co/KhtRxwZ/dark.png")
                .toAttachment()
                
teks = `@${mem.split("@")[0]} Keluar Dari Group ${groupM.subject} \njangan lupa bawa gorengan kalo balik lagi`
conn.sendFile(member.jid, lev.toBuffer(), null, teks, { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(teks)}})
}
break
case 'add' : 
teks = `@${mem.split("@")[0]} Bergabung ke Dalam Group ${groupM.subject}`
conn.sendMessage(member.jid, teks, MessageType.text, {thumbnail: img,
contextInfo: {"mentionedJid": conn.parseMention(teks)}})
break
}
}
}


