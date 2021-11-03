//CRIADOR: SUPRA ♡  cp -rf ALZURAS-BOT /sdcard/

const {
    WAConnection,
    MessageType,
    Presence,
    prepareMessageFromContent,
    relayWAMessage,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown } = require('./lib/leveling.js')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')

const request = require('request')
const axios = require('axios')
const encodeUrl = require('encodeurl')

const loli = new lolis()
const { isFiltered, addFilter } = require('./antispam.js')
const imgbb = require('imgbb-uploader');
const cd = 4.32e+7 ;
const crypto = require('crypto');
const { uploadimg } = require('./lib/uploadimg')
const { apikey, prefix, owner } = JSON.parse(fs.readFileSync('./config.json'))
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'))
const { webp2gifFile } = require("./lib/gif.js")
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const _leveling = JSON.parse(fs.readFileSync('./new/leveling.json'))
const antifake = JSON.parse(fs.readFileSync('./new/antifake.json'))
const antilink = JSON.parse(fs.readFileSync('./new/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./new/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./new/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'))
const samih = JSON.parse(fs.readFileSync('./new/simi.json'))
const up = JSON.parse(fs.readFileSync('./config.json'))
blocked = []
const memberlimit = up.memberlimit
//-config
const vcard = 'BEGIN:VCARD\n'

+ 'VERSION:3.0\n'

+ 'FN: SUPRA LS \n' // Nama

+ 'ORG:SUPRA LS;\n' // Nama bot

+ 'TEL;type=CELL;type=VOICE;waid=14255848121:+1 425 584-8121\n' // Nomor bot

+ 'END:VCARD' 

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

async function starts() {
	const supra = new WAConnection()
	supra.logger.level = 'warn'
	console.log(banner.string)
	supra.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && supra.loadAuthInfo('./BarBar.json')
	supra.on('connecting', () => {
		start('2', 'LHANNA CONNECTING...')
	})
	supra.on('open', () => {
		success('2', 'LHANNA CONECTADO')
	})
	await supra.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(supra.base64EncodedAuthInfo(), null, '\t'))
        
  supra.on('group-participants-update', async (anu) => {
if(antifake.includes(anu.jid)) {
	const mdata = await supra.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
				supra.sendMessage(mdata.id, 'Aqui não é permitido números estrangeiros bye bye👋 ️️', MessageType.text)							
				setTimeout(async function () {
							console.log(color('[','white'), color('!','red'), color(']','white'), color('BANINDO O NÚMERO FAKE...','red'))
				supra.groupRemove(mdata.id, [num])
					}, )
				}
			}
		}		
if (!welkom.includes(anu.jid)) return
      try {
         const mdata = await supra.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = supra.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length

         try {
               var ppimg = await supra.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               var ppgc = await supra.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
             img = await getBuffer(`  https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=BEM VINDO&nome=${encodeUrl(namaewa)}&perfil=${shortpc.data}&fundo=https://i0.wp.com/tracklist.com.br/wp-content/uploads/2019/05/blackpink-instagram.png?w=569&ssl=1&grupo=SEJA BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}&numero=2021&membroConta=${mdata.participants.length}`)
//         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${num.split('@')[0]}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
            teks = `Olá @${num.split('@')[0]}\nSeja bem vindo(a) ao grupo *${mdata.subject}* não seje ghost.`
            supra.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
         } else if (anu.action == 'remove') {
         img = await getBuffer(`  https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=ADEUS&nome=${encodeUrl(namaewa)}&perfil=${shortpc.data}&fundo=https://i0.wp.com/tracklist.com.br/wp-content/uploads/2019/05/blackpink-instagram.png?w=569&ssl=1&grupo=SAIU DE ${encodeUrl(mdata.subject)}&numero=2021&membroConta=${mdata.participants.length}`)
//         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${num.split('@')[0]}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
            teks = `Adeus @${num.split('@')[0]}👋 não volte mas...`
            supra.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
          } else if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Parabéns por se tornar um adm do grupo!&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
            teks = `◪ PROMOVER DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ @${num.split('@')[0]} se tornou um administrador do grupo`
            supra.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=${namaewa} virou membro comum&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
            teks = `◪ DESPROMOVER DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─  @${num.split('@')[0]} Não e mais um administrador do grupo`
            supra.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
    
/*  supra.on('group-participants-update', async (anu) => {
	const mdata = await supra.groupMetadata(anu.jid)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) { // @SUPRA ♡
					supra.sendMessage(mdata.id, 'Aqui não é permitido números estrangeiros bye bye👋 ', MessageType.text)
					setTimeout(async function () {
						supra.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await supra.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await supra.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá @${num.split('@')[0]}\nSeja bem vindo(a) ao grupo *${mdata.subject}* não seje ghost.`
				let buff = await getBuffer(ppimg)
				supra.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await supra.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Adeus @${num.split('@')[0]}👋 não volte mas...`
				let buff = await getBuffer(ppimg)
				supra.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}) 
 
*/


	supra.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	
	}) 
	supra.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			supra.sendMessage(call, '[❗] Sistema de auto block ativo\nmeu criador não gosta que me liguém\nse deseja ser desbloqueado converse com o supra!!\nhttps//wa.me/559391919748', MessageType.text)
			.then(() => supra.blockUser(call, "add"))
			}, 100);
		})
	
	 supra.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		supra.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    }) 

	supra.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const from = mek.key.remoteJid
			const insom = from.endsWith('@g.us')		
			const nameReq = insom ? mek.participant : mek.key.remoteJid			
			pushname2 = supra.contacts[nameReq] != undefined ? supra.contacts[nameReq].vname || supra.contacts[nameReq].notify : undefined
			const content = JSON.stringify(mek.message)			
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
		    const dfrply = fs.readFileSync('./denz.jpg')

			mess = {
				wait: 'AGUARDE UM POUCO💤',
				success: 'PRONTINHO✔️',
				error: {
					stick: 'ERROR!!! TENTE MAS TARDE👺',
					Iv: 'LINK INCORRETO! MANDA LINK VÁLIDO POHA...'
				},
				only: {
					group: '❌ ESSE COMADO SÓ PODE SER USADO EM GRUPOS❌',					
					ownerB: '❌ COMANDO SÓ PODE SER USADO PELO *SUPRA*',
					admin: '❌ESSE COMANDO É APENAS PARA ADM DO GRUPO❌',
					Badmin: 'PRECISO SER ADM PARA RESPONDER ESSE COMANDO'
				}
			}
				var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight"; break;
                case 1: jamss = "Midnight"; break;
                case 2: jamss = "Midnight"; break;
                case 3: jamss = "Midnight"; break;
                case 4: jamss = "Midnight"; break;
                case 5: jamss = "Dawn"; break;
                case 6: jamss = "Morning"; break;
                case 7: jamss = "Morning"; break;
                case 8: jamss = "Morning"; break;
                case 9: jamss = "Morning"; break;
                case 10: jamss = "Morning"; break;
                case 11: jamss = "Afternoon"; break;
                case 12: jamss = "Zuhur"; break;
                case 13: jamss = "Afternoon"; break;
                case 14: jamss = "Afternoon"; break;
                case 15: jamss = "Asr"; break;
                case 16: jamss = "Afternoon"; break;
                case 17: jamss = "Evening"; break;
                case 18: jamss = "Maghrib"; break;
                case 19: jamss = "Isha"; break;
                case 20: jamss = "Night"; break;
                case 21: jamss = "Night"; break;
                case 22: jamss = "Midnight"; break;
                case 23: jamss = "Midnight"; break;
            }
			   var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
			//verificados
			
			
		const supra2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync(`image/odc.jpeg`), surface: 200, message: `⊳ Criador : Supra £`, orderTitle: 'supra', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}	
			
		const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname2}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname2}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }	
		 
		   const totalchat = await supra.chats.all()          
			const botNumber = supra.user.jid
			const ownerNumber = ["14255848121@s.whatsapp.net"] //NUMERO DO DONO
		   const ownerNumberB = []
			const isGroup = from.endsWith('@g.us')
			const isCmd = body.startsWith(prefix)
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
            const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
            const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
            const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await supra.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''	
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false	
            const isAntiLink = isGroup ? antilink.includes(from) : false	
            const isAntiFake = isGroup ? antifake.includes(from) : false 
			const isUser = checkRegisteredUser(sender)
			const isBanned = ban.includes(sender)
			const isLevelingOn = isGroup ? _leveling.includes(from) : true
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				supra.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				supra.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? supra.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : supra.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
	const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./image/odc.jpeg`)},"title": `ZAKI GANTENG KAN? \n${pushname2}`,"description": "𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "ɪ ᴀᴍ ᴢᴀᴋʙᴏᴛᴢ","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            
			
//_PATENTE 
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
          
//_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
const lvup = {
text:
`    ════❖ LEVEL ❖════

  ╭═══════
  │‣ Nome: @${namelv.split('@')[0]}
  ├═══════
  │‣ XP: ${getLevelingXp(sender)}
  ├═══════
  │‣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ├═══════
  │‣ Patente: ${patt}
  ╰═══════
  
   ════❖LEVEL ❖════`,
contextInfo: {mentionedJid: [namelv]}}
supra.sendMessage(from, lvup, text, {quoted: mek})

}
} catch (err) {
console.error(err)
}
} 


			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
          
          supra.chatRead(from)
          

//ANTI-SPAM BY ITALU
     if (isCmd && isFiltered(from) && !isGroup && !isOwner) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff = {
                  text:  `Sem flood @${sender.split('@')[0]}...\n\nAguarde 3 segundos antes de usar outro comando✅`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        supra.sendMessage(from, ff1, text, {quoted: mek})}
        
        if (isCmd && isFiltered(from) && isGroup && !isOwner) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff1 = {
                  text:  `Sem flood @${sender.split('@')[0]}...\n\nAguarde 3 segundos antes de usar outro comando✅`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        supra.sendMessage(from, ff1, text, {quoted: mek})}
              

		switch(command) {
            case 'menu': //@SUPRA ♡
            case 'help':  
                isFiltered(from)    
             if (isBanned) return reply('Você foi banido')
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                 
                const uLevel = getLevelingLevel(sender)
                const uXp = getLevelingXp(sender)
                const requirdXp = 20 * Math.pow(uLevel, 2) + 150 * uLevel + 1000
                var itsme = `$supra@s.whatsapp.net`
                var split = `zuras`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                //const uangkau = checkATMuser(sender)
                const bruhhhh = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mansss = `╭════〘 *LHANNA-BOT* 〙═══⊷❍
┃❏╭─────────────────
┃❏│⊱❥ Versão: *1.0*
┃❏│⊱❥ Nome : *Lhanna-BOT*
┃❏│⊱❥ Conectado : *Baileys*
┃❏│⊱❥ Criador : *@SUPRA*
┃❏│⊱❥ Level: *${uLevel}*
┃❏│⊱❥ XP: *${uXp}/${requirdXp}*
┃❏│⊱❥ Patente: *${patt}* 
╰══════════════════⊷❍
┏════〘 *CMD INICIAL* 〙
┃╭───────────────────
┃│❍➣ ${prefix}info
┃│❍➣ ${prefix}restapi
┃│❍➣ ${prefix}criador
┃│❍➣ ${prefix}owner
┃│❍➣ ${prefix}covidbr
┃│❍➣ ${prefix}ping
┃│❍➣ ${prefix}profile
┃│❍➣ ${prefix}wame
┃│❍➣ ${prefix}traduzir <texto>
┃│❍➣ ${prefix}stickera
┃│❍➣ ${prefix}simi <texto>
┃│❍➣ ${prefix}sticker <img/gf>
┃│❍➣ ${prefix}sticker1 <img>
┃│❍➣ ${prefix}semoji  <emoji>
┃│❍➣ ${prefix}attp <texto>
┃│❍➣ ${prefix}attp1 <texto>
┃│❍➣ ${prefix}attp2 <texto>
┃│❍➣ ${prefix}attp3 <texto>
┃│❍➣ ${prefix}stickerwa <nome>
┃│❍➣ ${prefix}tomp3 <marcar>
┃│❍➣ ${prefix}linkimg <img>
╰══════════════════⊷❍
┏════〘 *CMD GRUPOS* 〙
┃╭───────────────────
┃│❍➣ ${prefix}welcome [1/0]
┃│❍➣ ${prefix}leveis [1/0]
┃│❍➣ ${prefix}level
┃│❍➣ ${prefix}infogp
┃│❍➣ ${prefix}online
┃│❍➣ ${prefix}delete <marcar>
┃│❍➣ ${prefix}fotogp <ft>
┃│❍➣ ${prefix}setname <nome>
┃│❍➣ ${prefix}abrirgp
┃│❍➣ ${prefix}fechargp
┃│❍➣ ${prefix}kick @
┃│❍➣ ${prefix}kick1 
┃│❍➣ ${prefix}add [nume]
┃│❍➣ ${prefix}listadmin
┃│❍➣ ${prefix}promover @
┃│❍➣ ${prefix}demitir @
┃│❍➣ ${prefix}antilink [1/0]
┃│❍➣ ${prefix}antifake [1/0]
┃│❍➣ ${prefix}simih [1/0]
╰══════════════════⊷❍
┏════〘 *CMD CONSULTA* 〙
┃╭───────────────────
┃│❍➣ ${prefix}img <nome>
┃│❍➣ ${prefix}github <nome>
┃│❍➣ ${prefix}google <nome>
┃│❍➣ ${prefix}Igstalk <nome>
┃│❍➣ ${prefix}letra <nome>
┃│❍➣ ${prefix}gplaystore <no>
┃│❍➣ ${prefix}xvideos <txt>
┃│❍➣ ${prefix}idanime <nome>
┃│❍➣ ${prefix}wait <img>
┃│❍➣ ${prefix}ddd <ddd>
┃│❍➣ ${prefix}cep <cep>
╰══════════════════⊷❍
┏════〘 *IMG MARKER* 〙
┃╭───────────────────
┃│❍➣ ${prefix}cinzav <img>
┃│❍➣ ${prefix}borrar <img>
┃│❍➣ ${prefix}police <img>
┃│❍➣ ${prefix}circulo <img>
┃│❍➣ ${prefix}camara <img>
┃│❍➣ ${prefix}viga <texto>
╰══════════════════⊷❍
┏════〘 *VID ALEATÓRIOS* 〙
┃╭───────────────────
┃│❍➣ ${prefix}saycat
┃│❍➣ ${prefix}blackpinkv
┃│❍➣ ${prefix}porno
┃│❍➣ ${prefix}
╰══════════════════⊷❍
┏════〘 *CMD DIVERSÃO* 〙
┃╭───────────────────
┃│❍➣ ${prefix}casal 
┃│❍➣ ${prefix}plaquinha<nome>
┃│❍➣ ${prefix}cornot
┃│❍➣ ${prefix}soucorno?
┃│❍➣ ${prefix}conselho
┃│❍➣ ${prefix}dado
┃│❍➣ ${prefix}gados 
┃│❍➣ ${prefix}gay
┃│❍➣ ${prefix}shipp
╰══════════════════⊷❍
┏════〘 *CMD IMAGEM* 〙
┃╭───────────────────
┃│❍➣ ${prefix}loli
┃│❍➣ ${prefix}meme
┃│❍➣ ${prefix}belle
┃│❍➣ ${prefix}hentai
┃│❍➣ ${prefix}wappanime
╰══════════════════⊷❍
┏════〘 *CMD DE BAIXAR* 〙
┃╭───────────────────
┃│❍➣ ${prefix}musica <nome>
┃│❍➣ ${prefix}musica1 <nome>
┃│❍➣ ${prefix}play <nome>
┃│❍➣ ${prefix}play1 <nome>
┃│❍➣ ${prefix}vid <nome>
┃│❍➣ ${prefix}vid1 <nome>
┃│❍➣ ${prefix}xvideosd <link>
╰══════════════════⊷❍
┏════〘 *GERADOR E DD* 〙
┃╭───────────────────
┃│❍➣ ${prefix}dadosfake
┃│❍➣ ${prefix}pessoas
┃│❍➣ ${prefix}nickff
┃│❍➣ ${prefix}
╰══════════════════⊷❍
┏════〘 *E DE VOZ* 〙
┃╭───────────────────
┃│❍➣ ${prefix}slow <audio>
┃│❍➣ ${prefix}esquilo <audio>
┃│❍➣ ${prefix}raposa <audio>
┃│❍➣ ${prefix}bass <audio>
┃│❍➣ ${prefix}audiomeme <nome>
┃│❍➣ ${prefix}tts <txt>
╰══════════════════⊷❍
┏════〘 *CMD CRIADOR* 〙
┃╭───────────────────
┃│❍➣ ${prefix}ban @
┃│❍➣ ${prefix}unban @
┃│❍➣ ${prefix}block @
┃│❍➣ ${prefix}unblock @
┃│❍➣ ${prefix}bc <texto>
┃│❍➣ ${prefix}entrargp <link>
┃│❍➣ ${prefix}addsticker <mar>
╰══════════════════⊷❍`,
wew = fs.readFileSync('./image/odc.jpeg')
 supra.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「NEWTON (SUPRA)❤️」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mansss })
 
 break
 
 	
 
 case 'github':
       play = body.slice(8)
         if (isBanned) return reply('Você foi banido')
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `supraa@s.whatsapp.net`
                var split = `lhanna`
                  hrts = body.slice(8) 
               anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/github/stalk?username=${hrts}&apikey=Alphabot`) 
               lhanaa = await getBuffer(anu.result.user.avatarUrl)             
               // const uangku = checkATMuser(sender)
                const anjmi = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                suprazi = `        ↭ *GITHUB PERFIL* ↭\n
➩Nome: ${anu.result.user.username}
➩Repositório: ${anu.result.user.publicRepos}
➩Seguidores: ${anu.result.user.followers}
➩Seguindo: ${anu.result.user.following}
➩Bio: ${anu.result.user.bio}
➩Url: ${anu.result.user.githubUrl}
➩Blog: ${anu.result.user.blog}`
 lhanaa = await getBuffer(anu.result.user.avatarUrl)   
  supra.sendMessage(from, lhanaa, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 SUPRA LS 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: suprazi })
  break
  
    
  case 'gerarnick': //BY KRATO OF KIBES
                    teksl = body.slice(10)
                    send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teksl}`)
                    teks = `✅ NICKS PERSONALIZADOS ✅

LISTA RANDOM:
🔰 ${send.random_1} 
🔰 ${send.random_2} 
🔰 ${send.random_3} 
🔰 ${send.random_4} 
🔰 ${send.random_5}
 
 FONTES PRÉ-DEFINIDAS:
🔰 ${send.squares}
🔰 ${send.inverted_squares}
🔰 ${send.italic}
🔰 ${send.bold}
🔰 ${send.future_alien}
🔰 ${send.asian_1}
🔰 ${send.asian_2}
🔰 ${send.squiggle}
🔰 ${send.squiggle_2}
🔰 ${send.squiggle_3}
🔰 ${send.squiggle_4}
🔰 ${send.neon}`
                    supra.sendMessage(from, teks, text, {
                        quoted: mek
                    })
                    
                    break
  
case 'registrar': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
if (isUser) return  reply('você já está registrado')
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar supra|18`)
// if (args.length < 1) return reply(`Como se registrar:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
const namaUser = q.substring(0, q.indexOf('|') - 0)
const umurUser = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
if (namaUser.length >= 60) return reply(`Seu nome é muito longo`)
if (umurUser > 40) return reply(`Idade máxima é 40 anos`)
if (umurUser < 12) return reply(`Idade mínima é 12 anos`)
veri = sender
try {
ppimg = await supra.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
}
captionnya = 
`    〘 *Registrado na Lhanna* 〙
  
╔════════════════❍
╠❍➣Código: ${serialUser}
╠❍➣Re dia: ${date}
╠❍➣Re hora: ${hr}
╠❍➣Número de re: @${sender.split("@")[0]}
╠❍➣Nome de registro: ${pushname2}
╠❍➣Sua dade: ${umurUser}
╠❍➣Link wame: wa.me/${sender.split("@")[0]}
╚════════════════❍
Está registrado na Lhanna, ${prefix}menu para ver minha lista de comandos`
daftarimg = await getBuffer(ppimg)
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
supra.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
break


       case'waifu':
			const res = await axios.get(`https://waifu.pics/api/sfw/waifu`)
			const mediaMsg = await supra.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: 'Waifu',
				  footerText: 'Pressione o botão abaixo para obter uma imagem waifu aleatória',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${prefix}waifu`,
                                 buttonText: {
                                    displayText: `⏯️ Outra imagem `
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await supra.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            supra.relayWAMessage(zz, {waitForAck: true}) 
		
		break

case 'clearall':
if (!isOwner && !isPremium) return  reply(ptbr.ownerB())
anu = await supra.chats.all()
list_chat = await supra.chats.all()
for (let chat of list_chat) {
supra.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break


                   ///   	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

 
  case 'info': //@SUPRA ♡
  if (isBanned) return reply('Você foi banido')
  uptime = process.uptime()
  let bateryy = global.batrei[global.batrei.length - 1]
   wew = fs.readFileSync(`./image/odc.jpeg`)
  teks = `╭ *〔 𝐈 𝐍 𝐅 𝐎  𝐑 𝐎 𝐁 𝐎 𝐓 〕*
┃ *➣ Nome* : Lhanna
┃ *➣ Versão* : 1.0
┃ *➣ Criador* : SUPRA
┃ *➣ Prefix* : ${prefix}
┃ *➣ Bateria* : ${bateryy}%
┃ *➣ Contatos bloqueados* : ${blocked.length}
┃ *➣ Total de chats* : ${totalchat.length}
┃ *➣ Online a* : ${kyun(uptime)}
╰━━━━━━━━━━━━━━━━━`
 supra.sendMessage(from, wew, image, { quoted: mek, caption: teks })
  break
  
  
  case 'command':
  stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: '*_© Dcode Denpa_*',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `Ols - fds fggg - ccv`,
 rows: [
                          {
                              "title": "Script",
                              "rowId": ""
                           },
                           {
                              "title": "Speed",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "rowId": ""
                           },
                           {
                              "title": "Jadibot",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "NsfwMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
supra.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
  
  

case 'online': //@SUPRA ♡
   if (isBanned) return reply('Você foi banido')
    let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    let online = [...Object.keys(supra.chats.get(ido).presences), supra.user.jid]
    supra.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
    contextInfo: { mentionedJid: online }
    })
    break
								
case 'criador': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
buffer = await getBuffer(`https://lh3.googleusercontent.com/pw/ACtC-3fA0Q7qP2wXEkvLfh0D2eWqSiCD-RtR98mzLPbdXn7y1inVSE8HIcDFN0y4PqS3XT7CYF3LPjyaDHELAikGQd9Pg_z-5j5tl2PxrDdiNJxYzFiD_y1EBv5G6f9E1sETBNl2S9vRmJxnbrQaDkff3eH8=s480-no?authuser=0`)
shaa = `      「 *_SUPRA LS STUDIOS_* 」

┠❖ *Nome:* NEWTON
┠❍ *Nick:* SUPRA
┠❖ *Numero:* ${prefix}owner
┠❍ *Insta:* @nilton_cant
┠❖ *Nome do bot:* Lhanna
┠❍ *Data de criação:* 28/05/21
╰──────────────────────
Espero que tenham gostado do meu bot.
Love vcs!!!❤️`
 supra.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🎸 *Status-SUPRA*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: shaa })
break

case 'jogador': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
if (args.length < 1) return supra.sendMessage(from, '.......')
var gh = body.slice(8)
var quote = gh.split("|")[0];
var wm = gh.split("|")[1];
shaa = `PRONTINHO ✔️`
hehe = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/footballplayer?text1=${quote}&text2=${wm}&apikey=w9o1DbEZxKuRkru`)
 supra.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Lhanna-BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: shaa })
 break
 
 case 'hentai': //@SUPRA ♡
 if (isBanned) return reply('Você foi banido!') 	
  reply(mess.wait)
 anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/nsfw/hentai?apikey=Alphabot`)
 hehe = await getBuffer(anu.result)
 shaa = `hentai😈`
 supra.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Lhanna-BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: shaa })
 break
  break
 
 


      
    case 'cassino': //@SUPRA ♡
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
      
  case 'porno': //@SUPRA ♡
  if (!isGroupAdmins) return reply(mess.only.admin)
  data = fs.readFileSync('./api/xvideos.js');
  jsonData = JSON.parse(data);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  buffer = await getBuffer(randKey.result)
 supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `Aí seu vídeo punheteiro`})
  break
  
  case 'xunicornx':
				supra.sendMessage(mek.key.remoteJid, '🦄XEON PAPA🦄', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: 'PAPA BOL',
    orderTitle: 'BY NURUTOMO ', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
         supra.toggleDisappearingMessages(from,`MODAR`,text)
			exec("rm -rf yourfile")
         break



case 'fotogp': //@SUPRA ♡
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)
await supra.updateProfilePicture (from, media)
  reply('Alterado com sucesso o ícone do Grupo✔️')

break     

   case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
supra.groupUpdateSubject(idgrup, `${body.slice(8)}`)
supra.sendMessage(from, 'Alterado com sucesso o nome do grupo✔', text, {quoted: mek})
break                       
          
   
case 'nickff': //@SUPRA ♡
if (isBanned) return reply('Você foi banido!') 	
supra.updatePresence(from, Presence.composing) 
sup1 = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
teks = '=================\n'
for (let i of sup1.result) {
teks += `*Nick* : ${i}\n=================\n`
 }
reply(teks.trim())
break
 case 'xvideos':
 svst = body.slice(9)
 supv = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideos?query=${svst}&apikey=trial2k21`)
 shaa = `depois coloco `
 
 hehe = await getBuffer(supv.result.image)
  supra.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Lhanna-BOT*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: shaa })
 break
 
case 'entrargp':
if (!isOwner) return reply(mess.only.ownerB)
 if (args.length < 1) return ephe('Link')
 supra.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply(`Entrei no grupo✔️`)
break

 case 'togif':
    if ((isQuotedSticker)) {
     const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
     filePath = await supra.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
     file_name = getRandom(".mp4")
     request({
     url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${up.apikey}`,
     method: 'POST',
     formData: {
     "img": fs.createReadStream(filePath),
      }
      }, function(error, response, body) {
      fs.unlinkSync(filePath)
       get_result = JSON.parse(body)
       getBuffer(get_result.result).then(result => {
       supra.sendMessage(from, result, video, { mimetype: Mimetype.gif })
        fs.unlinkSync(file_name)
      })
      });
      } else {
      reply(`Reply stickernya kawan`)
      }
      break
      
     case 'tomp4':
     if ((isQuotedSticker)) {
     const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
      filePath = await supra.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
       file_name = getRandom(".mp4")
      request({
      url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${apikey}`,
      method: 'POST',
      formData: {
      "img": fs.createReadStream(filePath),
                            }
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            get_result = JSON.parse(body)
                            getBuffer(get_result.result).then(result => {
                                supra.sendMessage(from, result, video, { mimetype: Mimetype.mp4 })
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Reply stickernya kawan`)
                    }
                    break

case 'addsticker':  // SUPRA ♡		
	if (!isQuotedSticker) return reply('marque um figurinha')
	svst = body.slice(12)
	if (!svst) return reply('coloque eu nome')
	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	delb = await supra.downloadMediaMessage(boij)
	setiker.push(`${svst}`)
	fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
	fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
	supra.sendMessage(from, `Figurinha adicionada com sucesso\nDigite: ${prefix}liststicker para ver minha lista sticker`, MessageType.text, { quoted: mek })
	break
	
	case 'slist':
				case 'lists':
				case 'stickerlist':
				case 'liststicker':  // SUPRA ♡		
				
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					supra.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
		
	case 'getsticker':
				case 'gets':   // SUPRA ♡		
				
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					supra.sendMessage(from, result, sticker, {quoted :mek})
					break

case  'rename':

		    		if (!isQuotedSticker) return reply('Apenas figuriha tio')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await supra.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Kratos`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, supra, mek, from)
					break
     
        
  case 'pessoas': //@SUPRA ♡
 data = fs.readFileSync('./image/odc.jpeg')
      anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/pessoa?apikey=brizaloka`)  
    teks = `             _*PESSOA GERADA_*\n
Nome: ${anu.resultado.nome}
Mãe: ${anu.resultado.mae}
Pai: ${anu.resultado.pai}
Rg: ${anu.resultado.RG}
Cpf: ${anu.resultado.CPF}
Telefone: ${anu.resultado.telefonde}
Nascimento: ${anu.resultado.nascimento}
Signo: ${anu.resultado.signo}
Altura: ${anu.resultado.altura}
Peso: ${anu.resultado.peso}
Tipo Sanguíneo: ${anu.resultado.tipoSanguineo}
Cep: ${anu.resultado.endereco.cep}
By: SUPRA`
 supra.sendMessage(from, data, image, {quoted: mek, caption: teks})    
  break
  
  
  
  case 'viga':
if (args.length < 1) return reply(`*Vc usou errado!!!*\nCerto: ${prefix}viga <nome>\nExemplo: ${prefix}viga supra`)
roce = body.slice(5)
reply(mess.wait)
roma = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=TES&text2=${roce}&apikey=apivinz`)
supra.sendMessage(from, roma, image, {caption: '*PRONTINHO* ✅\n*DN CASE:* @SUPRA', quoted: mek})
break

case 'nsfwgif':
anu = await fetchJson('https://nekos.life/api/v2/img/nsfw_neko_gif')
roma = await getBuffer(anu.url)
supra.sendMessage(from, roma, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
break

case 'smug':
try {
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
supra.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'report':
					const bug = body.slice(5)
					if (args.length > 300) return supra.sendMessage(from, 'máximo 300 letras', msgType.text, {quoted: mek})
					var nomor = mek.participant
					teks1 = `*[REPORT]*\nNumber : @${nomor.split("@s.whatsapp.net")[0]}\nMessage : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					supra.sendMessage('559391919748@s.whatsapp.net', options, text, {quoted: mek})
					reply('Mensagem enviada ao criador do bot✔️')
					break

    
  case 'shipp':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Marca um casal de pombinhos`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} vc tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}👩‍❤️‍👨`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break

case 'restapi':
fas =`
Site Rest api = https://supra-api.herokuapp.com
Sobre = https://supra-api.herokuapp.com/sobre`
reply(fas)
break

case 'antilink':
      if (!isGroup) return reply(mess.only.group)
	if (!isGroupAdmins) return reply(mess.only.admin)
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	if (args.length < 1) return reply('digite 1 para ativar ')
	if (Number(args[0]) === 1) {
	if (isAntiLink) return reply('o anti-link está ativo')
	antilink.push(from)
	fs.writeFileSync('./new/antilink.json', JSON.stringify(antilink))
	reply('O recurso anti-link foi ativo no grupo ✔️')
	} else if (Number(args[0]) === 0) {			
	antilink.splice(from, 1)
	fs.writeFileSync('./new/antilink.json', JSON.stringify(antilink))
	reply('O recurso anti-link desativado com sucesso neste grupo✔️')
	} else {
		reply('1 para ativar, 0 para desativar ')
	}
	break     
	
  case 'antifake':
  try {
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply('Hmmmm')
  if (Number(args[0]) === 1) {
  if (isAntiFake) return reply('Ja esta ativo')
  antifake.push(from)
  fs.writeFileSync('./new/antifake.json', JSON.stringify(antifake))
  reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
  } else if (Number(args[0]) === 0) {
  antifake.splice(from, 1)
  fs.writeFileSync('./new/antifake.json', JSON.stringify(antifake))
	reply('Desativado com sucesso o recurso de antifake neste grupo✔️')
  } else {
  reply('1 para ativar, 0 para desativar')
 }
 } catch {
 reply('Deu erro, tente novamente :/')
 }
  break
      

case 'level': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
if (!isGroup) return reply(mess.only.group)
if (!isLevelingOn) return reply(`vou ver`)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const userTime = getRegisterTime(sender) 
if (userLevel === undefined && userXp === undefined) return reply(ptbr.levelnol())
const requiredXp = 20 * Math.pow(userLevel, 2) + 150 * userLevel + 1000
levela =
`  ════❖ LEVEL ❖════

╭═══════
│➣Nome: @${sender.split("@")[0]}
├═══════
│➣XP: ${userXp}/${requiredXp}
├═══════
│➣Level: ${userLevel}
├═══════
│➣Patente: ${patt}
╰═══════

  ════❖ LEVEL ❖════`     
supra.sendMessage(from, levela, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

 
case 'dadosfake': //@SUPRA ♡
 if (isBanned) return reply('Você foi banido') 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
dadosf = 
`    *DADOS GERADOS*
   ‣ Nome: ${anu.name}
   ‣ Sexo: ${anu.gender}
   ‣ Idade: ${anu.age}
   ‣ Telefone: ${anu.phone}
   ‣ Tipo sanguíneo: ${anu.blood_type}
   ‣ E-mail: ${anu.email}
   ‣ Senha: ${anu.password}
   ‣ CEP: ${anu.zip_code}
      By:Lhanna`
supra.sendMessage(from, dadosf, text, {quoted: mek})
break

case 'wait': //@SUPRA ♡
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	reply(mess.wait)
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	media = await supra.downloadMediaMessage(encmedia)
	await wait(media).then(res => {
	supra.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
	}).catch(err => {
	reply(err)
	})
	} else {
	reply('marque uma foto de anime')
	}
	break
	
	case 'dadu5':
	random = Math.floor(Math.random() * 6) + 1
	damdu = fs.readFileSync(`./sticker/${random}.webp`)
	supra.sendMessage(from, damdu, sticker, {quoted: mek})
	break	
	
case 'esticker':
   case 'semoji': //@SUPRA ♡
     if (isBanned) return reply('Você foi banido')    
      if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
      emoji = args[0]
       try {
       emoji = encodeURI(emoji[0])
      } catch {
      emoji = encodeURI(emoji)
       }
      buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=6b25e69d0ba3dc9447010464`)
      supra.sendMessage(from, buffer, sticker, { quoted: mek })
     break

case 'igstalk': //@SUPRA ♡
 yolo = body.slice(9)
 if (args.length < 1) return reply('Insira usuário do instagram')
 hmm = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${yolo}&apikey=apivinz`)
 buffer = await getBuffer(hmm.profile_pic)
 hasil = `Nome : ${hmm.fullname}\nSeguidores : ${hmm.follower}\nSeguindo : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nLink : https://www.instagram.com/${hmm.username}\nBio : ${hmm.bio}`
 supra.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
break


case 'igvideo':
                  if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURAÇÃO* : ${anu.result.duration}\n`               
                    anu2 += `➻ *[❗] VÍDEO ESTÁ ENVIANDO*\n`
                    supra.sendMessage(from, anu2, text, {quoted: mek})
                    anu3 = await getBuffer(anu.result.video)
                    supra.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: mek})
                    break 
 
 case 'idanime': //@SUPRA ♡
  hay = body.slice(9)
  data = await fetchJson(`https://api.jikan.moe/v3/search/anime?q=${hay}`)
  buffer = await getBuffer(data.results[0].image_url)
teks = `         
✨️ *Título:* ${data.results[0].title}
🎆️ *Episódios:* ${data.results[0].episodes}
💌️ *Avaliação:* ${data.results[0].rated}
❤️ *Pontuação:* ${data.results[0].score}
💚️ *Sinopse:* ${data.results[0].synopsis}
🌐️ *URL*: ${data.results[0].url}`
 supra.sendMessage(from, buffer, image, {quoted: mek, caption: teks}) 
break


case 'gplaystore': //@SUPRA ♡

supra.updatePresence(from, Presence.composing)
goo = body.slice(12)
try {
data = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${goo}`, {method: 'get'})
teks = '*Google Play Store*\n\n'

				for (let i of data.result) {

					teks += `        ────────────────\n\n‣ *Nome* : ${i.title}\n‣ *Desenvolvedor* : ${i.developer}\n‣ *Avaliação* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`

				}

				teks += `        ────────────────`

reply(teks.trim())
} catch {
  reply(mess.ferr)
}
break


case 'infogp': //@SUPRA ♡
  if (!isGroupAdmins) return reply(mess.only.admin)
  supra.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
 try {
	 ppimg = await supra.getProfilePicture(from)
  } catch {
	 ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
	}   
  let buf = await getBuffer(ppimg)
  teks = (args.length > 1) ? body.slice(8).trim() : ''
  teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
  supra.sendMessage(from, buf, image, {quoted: mek, caption: teks})
  break 
  
  case 'fotogpp': //@SUPRA ♡
  if (!isGroupAdmins) return reply(mess.only.admin)
  supra.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
 try {
	 ppimg = await supra.getProfilePicture(from)
  } catch {
	 ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
	}   
  let burf = await getBuffer(ppimg)
  teks = (args.length > 1) ? body.slice(8).trim() : ''
  teks += `*foto do grupo*`
  supra.sendMessage(from, burf, image, {quoted: mek, caption: teks})
  break 
  
  
//case 'printchat':
   //  groupMencetak
case 'letra': //@SUPRA ♡
 if (args.length < 1) return reply('Insira o nome da música')
 supra.updatePresence(from, Presence.composing)
 tels = body.slice(7)
 try {
 anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
 method: 'get'
  })
 reply(anu.result.lirik)
 } catch {
 reply(mess.ferr)
 }
break

case 'gay':
   gays = body.slice(4)  
   ranran = `${Math.floor(Math.random() * 100)}`
   sufiz = await getBuffer(`https://cdn.pixabay.com/photo/2019/08/23/19/02/rainbow-flag-4426296_640.jpg`)
   cansi = `Veja os dados gay do: *@${gays}*\n\n${gays} você é  *${ranran}%* gay 🏳️‍🌈`
   supra.sendMessage(from, sufiz, image, {quoted: mek, caption: cansi})
   break
   
   
   

case 'dado': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')    
const brinks = ["⚀","⚁","⚂","⚃","⚄","⚅"]
kkk = brinks[Math.floor(Math.random() * brinks.length)]
brle = fs.readFileSync('./brinks/dados/'+kkk+'.webp')
supra.sendMessage(from, brle, sticker, {quoted: mek})
break

 
case 'bonito': //@SUPRA ♡	
  if (isBanned) return reply('Você foi banido')    				
	membr = []
	const nge = groupMembers
	const tod = groupMembers
	const beb = nge[Math.floor(Math.random() * nge.length)]
	const an = pushname2[Math.floor(Math.random() * tod.length)]
	teks = `*Membro mas bonito do gp:*\n @${beb.jid.split('@')[0]}🙂`
	membr.push(beb.jid)
	mentions(teks, membr, true)
	break

case 'traduzir': //@SUPRA ♡
 if (args.length < 1) return reply('Insira o texto que você deseja traduzir')
 supra.updatePresence(from, Presence.composing)
 tels = body.slice(10)
 try {
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${tels}&from=id&to=pt`, {
 method: 'get'
  })
 reply(anu.translated_text)
 } catch {
 reply(mess.ferr)
 }
break

case 'antiligar': //@SUPRA ♡
   supra.on("CB:action,,call", async json => {
   const callerId = json[2][0][1].from;
   console.log(json);
    //if (setting.responder.call.status){
   supra.sendMessage(
      callerId,
      "Sistema de cancelamento de ligação e bloqueio automático. Você será bloqueado!",
      MessageType.text
    );
    await supra.blockUser(callerId, "add"); // Block user
    //}
  });
  break

 
case 'conselho': //@SUPRA ♡
  try {
    data = fs.readFileSync('./api/frase.js');
   jsonData = JSON.parse(data);
   randIndex = Math.floor(Math.random() * jsonData.length);
   randKey = jsonData[randIndex];
     ppimg = await supra.getProfilePicture(`${sender.split('@')[0]}@c.us`)
     } catch {
     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
     }
     its = await getBuffer (ppimg)
     randTeks = randKey.teks
     supra.sendMessage(from, its, image, {quoted: mek, caption: randTeks})
     break

case 'img': //@SUPRA ♡
if (isBanned) return reply('Você foi banido') 
if (args.length < 1) return reply('Insira o nome da imagem...')
tels = body.slice(5)
supra.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
supra.sendMessage(from, pok, image, { quoted: mek, caption: `Consegue tirar fotos : *${tels}*`})
} catch {
reply(mess.ferr)
}
break

case 'calculadora':               
	if (isBanned) return reply('Você foi banido')
	if (args.length < 1) return reply(`Usou errado!!!\nCerto: *${prefix}calculadora [ Numbers ]*\nExamplo : ${prefix}calculadora 12*12`)
	const Math_js = require('mathjs')
	mtk = body.slice(12)
	if (typeof Math_js.evaluate(mtk) !== "number") {
		reply(`"${mtk}", Error!\n[❗] Send perintah *${prefix}kalkulator [ Numbers ]*\nExample : ${prefix}calculator 12*12\n*NOTE* :\n• For Multiplication Using *\n• For Sum Using +\n• For Substraction Using -\n• For Sharing Using /`)
	} else {
	reply(`*「 MATH 」*\n\n*calculator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
	}			
  break
  
 case 'loli': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')   
supra.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {method: 'get'})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
supra.sendMessage(from, pok, image, {quoted: mek, caption: `loli❤️`})

} catch {
  reply(mess.ferr)
}
break

case 'covidbr':
 susi = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
  florr = await getBuffer(`http://www.treslagoas.ms.gov.br/wp-content/uploads/coronavirus-Catraca-Livre-420x280_c.jpg`)
  claa = `        ✘ *_COVID BRASIL_* ✘\n
➥Total de Casos: ${susi.result.totalCasos}
➥Novos Casos: ${susi.result.novosCasos}
➥Total de Mortos: ${susi.result.totalMortes}
➥Novos Mortos: ${susi.result.novasMortes}
➥Recuperados: ${susi.result.recuperados}
➥Vacinados: ${susi.result.vacinadosPrimeiraDose}
➥Atualizado: ${susi.result.dadosAtualizados}
➥Case: @SUPRA LS`
  supra.sendMessage(from, florr, image, {quoted: mek, caption: claa})
  break

 case 'google':
  reply(mess.wait)
  nak = body.slice(7)
  shu = await fetchJson(`https://api-gdr2.herokuapp.com/api/search/gimage?q=${nak}`)
  buffer = await getBuffer(shu.result)
  supra.sendMessage(from, buffer, image, {quoted: mek, caption: `Imagem sobre: ${nak} `})
  break
  
case 'fechargp': //@SUPRA ♡
 supra.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 var nomor = mek.participant
 const close = { text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
contextInfo: {
 mentionedJid: [nomor]
}
  }
 supra.groupSettingChange (from, GroupSettingChange.messageSend, true);
 reply(close)
 break

case 'abrirgp':
case 'bukagc': //@SUPRA ♡
 supra.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
 text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens`,
contextInfo: {
mentionedJid: [sender]
 }
}
supra.groupSettingChange (from, GroupSettingChange.messageSend, false)
supra.sendMessage(from, open, text, {  quoted: mek
})
break


case 'delete':
  case 'del': //@SUPRA ♡
if (!isGroup)return reply(mess.only.group)
if (!isGroupAdmins)return reply(mess.only.admin)
try {
supra.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Só pode deletar mensagens minhas')
}
break
  
 
 
 // COMANDOS IMGBB
  
 case 'cinzav': //@SUPRA ♡  
	if (isBanned) return reply('Você foi banido')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await supra.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("761ea2d5575581057a799d14e9c78e28", owgi)
	  hehe = await getBuffer(`https://api.zeks.xyz/api/sketch-image?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&image=${anu.display_url}`)
	 supra.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Marque uma imagem')
	}
	break
	
	 case 'phubtxt':
	if (isBanned) return reply('Você foi banido')
	var imgbb = require('imgbb-uploader')
	makell = args.join(" ")
	ll1 = makell.split("|")[0];
	ll2 = makell.split("|")[1];
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await supra.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)	  	
	  anu = await imgbb("761ea2d5575581057a799d14e9c78e28", owgi)
	  hehe = await getBuffer(`https://api-gdr2.herokuapp.com/api/phubtext?user=${ll1}&texto=${ll2}&img=${anu.display_url}`)
	 supra.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	}
	break
	
	/*case 'stickerx':
 if (isBanned) return reply('Vc foi banido')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	supt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
   cxxs = await supra.downloadAndSaveMediaMessage(supt)
   tels = body.slice(8)
   dde = await getBuffer(`http://zekais-api.herokuapp.com/pngtowebp?url=${cxxs}`)
   supra.sendMessage(from, dde, sticker, {quoted: mek})
 break */

	
     case 'camara': //@SUPRA ♡  
	if (isBanned) return reply('Você foi banido')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await supra.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("761ea2d5575581057a799d14e9c78e28", owgi)
	  hehe = await getBuffer(`https://dapuhy-api.herokuapp.com/api/canvas1/poutine?img=${anu.display_url}`)
	 supra.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Marque uma imagem')
	}
	break
	
	 case 'borrar': //@SUPRA ♡  
	if (isBanned) return reply('Você foi banido')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await supra.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("761ea2d5575581057a799d14e9c78e28", owgi)
	  hehe = await getBuffer(`https://api-gdr2.herokuapp.com/api/pixelate?img=${anu.display_url}`)
	 supra.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Marque uma imagem')
	}
	break
	
	 case 'circulo': //@SUPRA ♡  
	if (isBanned) return reply('Você foi banido')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await supra.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("761ea2d5575581057a799d14e9c78e28", owgi)
	  hehe = await getBuffer(`https://dapuhy-api.herokuapp.com/api/canvas1/circle?img=${anu.display_url}`)
	 supra.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Marque uma imagem')
	}
	break
	
	case 'police': //@SUPRA ♡  
	if (isBanned) return reply('Você foi banido')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await supra.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("761ea2d5575581057a799d14e9c78e28", owgi)
	  hehe = await getBuffer(`https://dapuhy-api.herokuapp.com/api/canvas1/police?img=${anu.display_url}`)
	 supra.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Marque uma imagem')
	}
	break
 

case 'simi': //@SUPRA ♡
	  if (args.length < 1) return reply('Onde está o texto, Acha que sou vidente?😤')
	  teks = body.slice(5)
      anu = await simih(teks) //fetchJson(`http://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
	  //if (anu.error) return reply('*Simi não sabe*')
      reply(anu)
	  break

 case 'simih': //@SUPRA ♡
 if (isBanned) return reply('Vc foi banido')    
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (args.length < 1) return reply('Hmmmm')
 if ((args[0]) === 'on') {
 if (isSimi) return reply('O modo SIM está ativo')
 samih.push(from)
 fs.writeFileSync('./new/simi.json', JSON.stringify(samih))
  reply(`Modo simih ativo com sucesso no grupo *${groupMetadata.subject}*`)
 } else if ((args[0]) === 'off') {
 samih.splice(from, 1)
 fs.writeFileSync('./new/simi.json', JSON.stringify(samih))
 reply(`Adm desativou modo simih no grupo *${groupMetadata.subject}*`)
 } else {
 reply('On ativar, Off para desativar')
 }
 break

case 'ddd1': //@SUPRA ♡
if (args.length < 1) return reply('digite o ddd que deseja buscar')
supra.updatePresence(from, Presence.composing)
tels = body.slice(5)
data = fs.readFileSync('./image/odc.jpeg')
try {
anu = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${tels}`)
sasa =
`       *_INFORMAÇÕES DO DDD_*\n
╠❍➣Estado: ${anu.state}
╠❍➣Cidades: ${anu.cities}\n`
supra.sendMessage(from, data, image, {quoted:mek, caption:sasa})
} catch {
reply(mess.ferr)
}
break

case 'cep1': //@SUPRA ♡
if (args.length < 1) return reply('digite o cep que deseja buscar')
supra.updatePresence(from, Presence.composing)
tels = body.slice(5)
data = fs.readFileSync('./image/odc.jpeg')
try {
anu = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${tels}`)
sasa =
`       *_INFORMAÇÕES DO CEP_*\n
╠❍➣Cep: ${anu.cep}
╠❍➣Estado: ${anu.state}
╠❍➣Cidade: ${anu.city}
╠❍➣By: SUPRA\n`
supra.sendMessage(from, data, image, {quoted:mek, caption:sasa})
} catch {
reply(mess.ferr)
}
break

case 'saycat': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
data = await fetchJson(`https://pastebin.com/raw/cVDj0qz6`)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
buffer = await getBuffer(nimek.result)
supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `Amo saycat❤️`})
 break
 
 case 'blackpinkv':
   if (isBanned) return reply('Você foi banido')
   data = fs.readFileSync('./api/blackpink.js');
   jsonData = JSON.parse(data);
   randIndex = Math.floor(Math.random() * jsonData.length);
   randKey = jsonData[randIndex];
   buffer = await getBuffer(randKey.result)
   supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `Amo blackpink❤️`})
   break


case 'owner': //@SUPRA ♡
reply('Esse é o numero do meu criador salva aí meninas.')
supra.sendMessage(from, {

  displayname: "Jeff", vcard: vcard

}, MessageType.contact, {

  quoted: mek

})

break 



//case 'covidbr1':
// ddd = body.slice(4)
//anu = await fetchJson(`

case 'wappanime': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')   
supra.updatePresence(from, Presence.composing)
uk = ["wallpaper anime"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {method: 'get'})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
supra.sendMessage(from, pok, image, {quoted: mek, caption: `anime❤️`})

} catch {
  reply(mess.ferr)
}
break

  case 'meme': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')   
supra.updatePresence(from, Presence.composing)
uk = ["meme brasil"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {method: 'get'})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
supra.sendMessage(from, pok, image, {quoted: mek, caption: `meme br`})

} catch {
  reply(mess.ferr)
}
break

  case 'belle': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')   
supra.updatePresence(from, Presence.composing)
uk = ["belle delphine"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {method: 'get'})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
supra.sendMessage(from, pok, image, {quoted: mek, caption: `Belle Delphine❤️ `})

} catch {
  reply(mess.ferr)
}
break
	
case 'leveis': //@SUPRA ♡
 if (isBanned) return reply('Você foi banido')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('Você ativou o recurso de leveis no grupo✔️')
_leveling.push(from)
fs.writeFileSync('./data/leveling.json', JSON.stringify(_leveling))
reply('Leveis foi ativo✔️')
} else if (Number(args[0]) === 0) {
_leveling.splice(from, 1)
fs.writeFileSync('./datauser/leveling.json', JSON.stringify(_leveling))
reply('❌Você desativou o recurso de leveis ❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
}
break	

case 'wa.me':
case 'wame':
  supra.updatePresence(from, Presence.composing)
 options = { text: `Link WhatsApp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
 contextInfo: {
mentionedJid: [sender]
}

 }
 supra.sendMessage(from, options, text, {quoted: mek })
break

case 'ban': //@SUPRA ♡
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} supra baniu vc  nao pode mas usar comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban': //@SUPRA ♡
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} Vc foi desbanido❎`
mentions(`${susp}`, mentioned, true)   
break


   case 'promover': //@SUPRA ♡
    if (isBanned) return reply('Você foi banido')
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  if (mentioned.length > 1) {
  teks = 'Sucesso Promote\n'
  for (let _ of mentioned) {
   teks += `@${_.split('@')[0]}\n`
   }
  mentions(from, mentioned, true)
  supra.groupRemove(from, mentioned)
  } else {
 mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} como administrador do grupo!`, mentioned, true)
  supra.groupMakeAdmin(from, mentioned)
  }
 break
 
 case 'demitir': //@SUPRA ♡
if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
 mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
 if (mentioned.length > 1) {
 teks = 'Sucesso Demote\n'
 for (let _ of mentioned) {
  teks += `@${_.split('@')[0]}\n`
 }
 mentions(teks, mentioned, true)
 supra.groupRemove(from, mentioned)
 } else {
 mentions(`Rebaixado com sucesso @${mentioned[0].split('@')[0]} Torne-se um membro do grupo!`, mentioned, true)
 supra.groupDemoteAdmin(from, mentioned)
 }
break
 
  case 'tomp3':
supra.updatePresence(from,Presence.composing)
if (!isQuotedVideo) return reply('*☒* Reply video')
reply(mess.wait)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await supra.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
  if (err) return reply('Falha ao converter vídeo para mp3')
  buffer = fs.readFileSync(ran)
  supra.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek
})
fs.unlinkSync(ran)
})
break

case 'text3d': //@SUPRA ♡
if (isBanned) return reply('Você foi banido') 
if (args.length < 1) return reply('Insira o texto.')
tels = body.slice(7)
anu = await fetchJson(`http://supra-api.herokuapp.com/api/text3d-2?text=${tels}`)
po = await getBuffer(anu.results)
supra.sendMessage(from, po, image, { quoted: mek})
break


case 'ping':

  case 'speed': //@SUPRA ♡
  if (isBanned) return reply('Você foi banido')
const timestamp = speed();
const latensi = speed() - timestamp
supra.updatePresence(from, Presence.composing)
uptime = process.uptime()
supra.sendMessage(from, `*Velocidade de resposta do bot*\n‣ *Velocidade* : ${latensi.toFixed(4)} _Segundo_\n\n*Info do bot*\n‣ *Total chat* : ${totalchat.length}\n‣ *Total de usuários* : ${_registered.length}\n‣ *Block* : ${blocked.length}\n‣ *Online* : ${kyun(uptime)}`, text, {quoted: mek})
break

	case 'listadmins':
    case 'listadmin':
    case 'adminlist': //@SUPRA ♡
    if (isBanned) return reply('Você foi banido')
    if (!isGroup) return reply(mess.only.group)
    teks = `Lista de adm do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
    no = 0
    for (let admon of groupAdmins) {
    no += 1
    teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
    }
    mentions(teks, groupAdmins, true)
    break

case 'block': //@SUPRA ♡
supra.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
supra.blockUser (`${body.slice(8)}@c.us`, "add")
supra.sendMessage(from, `Membro bloqueado não pode mas usar command do bot no pv`, text, {
quoted: mek
})
break

case 'unblock': //@SUPRA ♡
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
supra.blockUser (`${body.slice(9)}@c.us`, "remove")
supra.sendMessage(from, `supra desbloqueou membro`, text, {
quoted: mek
})
break

 case 'kick': //@SUPRA ♡
 if (isBanned) return reply('Você foi banido')
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  if (mentioned.length > 1) {
  teks = 'Pedidos recebidos, emitidos :\n'
  for (let _ of mentioned) {
  teks += `@${_.split('@')[0]}\n`
  }
  mentions(teks, mentioned, true)
  supra.groupRemove(from, mentioned)
  } else {
  mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
  supra.groupRemove(from, mentioned)
  }
  break
  
  case 'kk':
  case 'kick1': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
supra.groupRemove(from, M_exe)
} else {
supra.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
supra.groupRemove(from, [exe1])
}
break


break

case 'add': //@SUPRA ♡
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (args.length < 1) return reply('Insira o número alvo')
if (args[0].startsWith('08')) return reply('Use o código do país mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
supra.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar destino, talvez porque é privado')
}
break

  
  case 'gados':
		if (isBanned) return reply('Você foi banido') 					
		jds = []
		const eee = groupMembers
		const ttll = groupMembers
		const fdss = groupMembers
		const neww = groupMembers					
		const akui = eee[Math.floor(Math.random() * eee.length)]
		const diao = ttll[Math.floor(Math.random() * ttll.length)]
		const noit = fdss[Math.floor(Math.random() * fdss.length)]
		const suprf = neww[Math.floor(Math.random() * neww.length)]
		teks = `*TOP 4 +GADOS DO GRUPO*\n\n🐂├➣@${akui.jid.split('@')[0]}️\n🐂├➣@${diao.jid.split('@')[0]}\n🐂├➣@${noit.jid.split('@')[0]}️\n🐂├➣@${suprf.jid.split('@')[0]}️\n\n*ESSES ACIMA SÃO OS GADOS DO GRUPO*\n\n*Lhanna-BOT*`
		jds.push(akui.jid)
		jds.push(diao.jid)
		jds.push(noit.jid)
		jds.push(suprf.jid)
		mentions(teks, jds, true)
		break
                             
            
case 'bc': //@SUPRA ♡
	if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
	if (args.length < 1) return reply('.......')
	anu = await supra.chats.all()
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	buff = await supra.downloadMediaMessage(encmedia)
	for (let _ of anu) {
	supra.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(4)}`})
	}
	reply('Transmissão enviada com sucesso')
	} else {
	for (let _ of anu) {
	sendMess(_.jid, `[ TRANSMISSÃO DE AVISO ]\n\n${body.slice(4)}`)
	}
	reply('Transmissão enviada com sucesso')
	}
	break

case 'profile':
case 'perfil': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
try {
ppimg = await supra.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pf = 
`
  ‣ Nome: @${pushname2}
  ‣ Registrado: ✔️
  ‣ Idade: ${idad}
  ‣ Nome de registro: ${regin}
  ‣ Registrado desde: ${usTime}
  ‣ Level: ${usLevel}
  ‣ XP: ${usXp}/${requirXp}
  ‣ Patente: ${patt}
  ‣ link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serh}
`
its = await getBuffer (ppimg)
supra.sendMessage(from, its, image, {quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
if(usLevel == undefined && usXp == undefined && usTime == undefined && serh == undefined) {
reply('Informações com "undefined" indicam que você ainda não se registrou \nUse o comando =registrar')
}
break			

case 'tts': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
if (args.length < 1) return supra.sendMessage(from, `Digite command coreto`, text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return supra.sendMessage(from, 'Cadê o texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? reply('Texto muito grande')
: gtts.save(ranm, dtt, function() {
supra.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

//DIVERSÃO 
case 'casal':
    jds = []
   const dd = groupMembers
  const ll = groupMembers
   const gg = dd[Math.floor(Math.random() * dd.length)]
	const rr = ll[Math.floor(Math.random() * ll.length)]
	teks = `*Futuro casal do grupo:*\n@${gg.jid.split('@')[0]} ❤️\n @${rr.jid.split('@')[0]} ❤️ `	
      data = fs.readFileSync('./api/roman.js');
      jsonData = JSON.parse(data);
      randIndex = Math.floor(Math.random() * jsonData.length);
      randKey = jsonData[randIndex];
      buffer = await getBuffer(randKey.result)
      supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: teks})
      break
	
	
case 'plaquinha': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
  if (args.length < 1) return reply(mess.blank)
	teks = body.slice(10)
	if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
	reply('*Estou fazendo* 💤')
	 buffer = await getBuffer(`https://restioas.sirv.com/Spins/artworks-000056121029-geglen-t500x500.jpg?text.0.text=${teks}&text.0.position.gravity=west&text.0.position.x=16%25&text.0.size=34&text.0.color=140f15&text.0.opacity=64&text.0.font.family=Yellowtai&text.0.font.weight=700&text.0.background.opacity=94&text.0.outline.color=0a0a0a&text.0.outline.opacity=42%22%20width=%22500%22%20height=%22500%22%20alt=`)
	 supra.sendMessage(from, buffer, image, {quoted: mek, caption: '*Se usou deve uma mamada no supra*'})
	 break
	 
	 case 'plaquinha2':
//PEDI O REGISTRO
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(12)
					if (teks.length > 25) return reply('O texto é longo, até 25 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					supra.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈'})
					break
	 
case 'cornot':
var chifre = ["Corno triste", "Corno cego", "Corno escravo", "Corno Conformado", "Corno acostumado", "Corno rei", "Deus dos cornos", "Corno de carteira", "Corno gado", "Corno e não sabe", "Corno iludido", "Corno avançado", "Corno iniciante"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break    

case 'soucorno?':
var corno = ["Segundo meus cálculos....Vc é corno", "Rlx amigo(a) vc ainda nao é corno"]
var galha = corno[Math.floor(Math.random() * corno.length)]
fdp = `${Math.floor(Math.random() * 100)}`
hisil = `${galha}`
reply(hisil)
break    
	 
	 
case 'covi': //@SUPRA ♡
if (isBanned) return reply('Você foi banido')
 if (args.length < 1) return reply(mess.blank)
teks = body.slice(5)
buffer = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=`)
cc =
` *COVID BRASIL* 
  ‣ Estado: ${buffer.Estado_Informado}
  ‣ Casos E: ${buffer.Casos_Encontrados}\n`
supra.sendMessage(from, cc, text, {quoted:mek})
break	 

/*case 'sticker1': //@SUPRA ♡
	if (isBanned) return reply('vc foi banido!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await supra.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("761ea2d5575581057a799d14e9c78e28", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/convert/towebp?apikey=${up.apikey}&img=${anu.display_url}`)
	 supra.sendMessage(from, hehe, sticker, {quoted:mek})
	} else {
	}
	break
*/
	
 case 'stickerwa': //@SUPRA ♡
  if (isBanned) return reply('Você foi banido')
    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${up.apikey1}&query=${query}`)
    get_result = get_result.result[0].stickers
    for (var x of get_result) {
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${up.apikey1}&img=${x}`)
    await supra.sendMessage(from, ini_buffer, sticker)
     }
     break
	
	 case 'stickerwa1': //@SUPRA ♡
  if (isBanned) return reply('Você foi banido')
    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
    query = args.join(" ")
    get_result = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/searchsticker?query=${query}`)
    get_result = get_result.sticker
    for (var x of get_result){
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${up.apikey1}&img=${x}`)
    await supra.sendMessage(from, ini_buffer, sticker)
     }
     break
	      
case 'linkimg':  //@SUPRA ♡
 if (isBanned) return reply('Você foi banido')
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    reply(mess.wait)
    owgi = await supra.downloadAndSaveMediaMessage(ger)
     anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
     teks = `${anu.url}`
reply(teks)
}
break	
case 'memefigu':  //@SUPRA ♡
 if (isBanned) return reply('Você foi banido')
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    reply(mess.wait)
    owgi = await supra.downloadAndSaveMediaMessage(ger)
     anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
 //    teks = `${anu.url}`
// attp2 = await getBuffer(`https://supra-api.herokuapp.com/api/canvas/figmeme?text1=Supra&text2=Fofinho&img=${anu.url}&apikey=supraz`)
 hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/convert/towebp?apikey=6b25e69d0ba3dc9447010464&img=https://supra-api.herokuapp.com/api/canvas/figmeme?text1=Supra&text2=Fofinho&img=${anu.url}&apikey=supraz`)
	 Pin.sendMessage(from, hehe, sticker, {quoted:mek})
	 }
break


case 'rainbow':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                      
                        owgi = await supra.downloadAndSaveMediaMessage(ger)
                        upload = await uploadimg(owgi, Date.now() + '.jpg')
                        //anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teeks = `${upload.result.image}`
                        anu3 = (`https://some-random-api.ml/canvas/gay?avatar=${teeks}`)
                        abc = await getBuffer(anu3)
                        supra.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    addFilter(from)
                    break

case 'testecc':  //@SUPRA ♡
 if (isBanned) return reply('Você foi banido')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    reply(mess.wait)
    owgi = await supra.downloadAndSaveMediaMessage(ger)
     anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/others/telegraph?url= ,${owgi}&apikey=w9o1DbEZxKuRkru`)
     teks = `${anu.result}`
reply(teks)
}
break

 case 'idfigu':	
 if (isBanned) return reply('Vc foi banido')
 if (args.length < 1) return reply(`*digite nome do sticker*`)
 reply(mess.wait)
aad = await fetchJson(`https://api.xteam.xyz/sticker/stickerly?q=saycat&APIKEY=63b3e16b23026b82`)
 supx  = await getBuffer(aad.result.stickerlist[0])
  supra.sendMessage(from, supx, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Lhanna-BOT", 'jpegThumbnail': fs.readFileSync('./image/odc.jpeg')}}}})
 break
		
							
 case 'attp':	
 if (isBanned) return reply('Vc foi banido')
 if (args.length < 1) return reply(`Não está usando comando correto!!\n*Exempo: ${prefix}attp supra gostoso*`)
 reply(mess.wait)
 anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
  supra.sendMessage(from, anu, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Lhanna-BOT", 'jpegThumbnail': fs.readFileSync('./image/odc.jpeg')}}}})
 break
 
 case 'attp2':	
 if (isBanned) return reply('Vc foi banido')
 if (args.length < 1) return reply(`Não está usando comando correto!!\n*Exempo: ${prefix}attp2 supra gostoso*`)
 reply(mess.wait)
  anu = await getBuffer(`https://pecundang.herokuapp.com/api/texttopng4?teks=${body.slice(7)}`)
  supra.sendMessage(from, anu, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Lhanna-BOT", 'jpegThumbnail': fs.readFileSync('./image/odc.jpeg')}}}})
 break
 
 case 'attp3':	
 if (isBanned) return reply('Vc foi banido')
 if (args.length < 1) return reply(`Não está usando comando correto!!\n*Exempo: ${prefix}attp2 supra gostoso*`)
 reply(mess.wait)
  anu = await getBuffer(`https://pecundang.herokuapp.com/api/attp?teks=${body.slice(7)}`)
 supra.sendMessage(from, anu, sticker, {quoted: mek})
 break
 
 case 'dadu':	
 if (isBanned) return reply('Vc foi banido')
  anu = await getBuffer(`https://supra-api.herokuapp.com/api/dadu?apikey=supraz`)
 supra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 case 'stickera':	
 if (isBanned) return reply('Vc foi banido')
 reply(`AGUARDE UM POUCO💤`)
  anu = await getBuffer(`https://supra-api.herokuapp.com/api/stickera?apikey=supraz`)
 supra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 case 'audiomeme':
  if (isBanned) return reply('Você foi banido')  
  las = body.slice(11)
  reply(`AGUARDE UM POUCO💤`)
  sads = await getBuffer(`https://supra-api.herokuapp.com/api/audiomeme?quero=${las}&apikey=supraz`)
  supra.sendMessage(from, sads, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  break
  
  case 'ip':
    textw = body.slice(4)
    reply(`AGUARDE UM POUCO💤`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/ip?quero=${textw}&apikey=supraz`)
   textt = `     ↜ *INFORMAÇÕES DO IP* ↝\n
➞ Ip = ${fref.ip}
➞ Pais = ${fref.pais}
➞ Estado = ${fref.estado}
➞ Cidade = ${fref.cidade}
➞ Lat = ${fref.latitude}
➞ Long = ${fref.longitude}
➞ Isp = ${fref.isp}
➞ As = ${fref.as}`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 case 'ddd':
    textw = body.slice(5)
    reply(`AGUARDE UM POUCO💤`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/ddd?quero=${textw}&apikey=supraz`)
   textt = `     ↜ *INFORMAÇÕES DO DDD* ↝\n
➞ Estado = ${fref.estado}
➞ Cidades = ${fref.cidades}
*By: Supra-api*`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
  case 'cep':
    textw = body.slice(5)
    reply(`AGUARDE UM POUCO💤`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/cep1?quero=${textw}&apikey=supraz`)
   textt = `     ↜ *INFORMAÇÕES DO CEP* ↝\n
➞ Cep = ${fref.cep}
➞ Estado = ${fref.estado}
➞ Cidade = ${fref.cidade}
➞ Lugar = ${fref.lugar}
➞ Rua = ${fref.rua}
*By: Supra-api*`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 
 
 case 'waifu2':
  reply(`AGUARDE UM POUCO💤`)
   data = await fetchJson(`https://supra-api.herokuapp.com/api/waifu2?&apikey=supraz`)
   sads = await getBuffer(data.image)   
   shaa = `Waifu️`
  supra.sendMessage(from, sads, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🎆 Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: shaa })
 break
 
  case 'romantic':
  sads = await getBuffer(`https://luganobr.vteximg.com.br/arquivos/ids/156458-800-800/coracao-de-chocolate-ao-leite-lugano-laminado-75-ambientada.jpg?v=637358652692600000`)
   fre = await fetchJson(`https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz`)
   shaa = `Frase Romântica\n ❤️${fre.frase}❤️`
  supra.sendMessage(from, sads, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🎆 Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: shaa })
 break
    
  case 'ttp':	
 if (isBanned) return reply('Vc foi banido')
 if (args.length < 1) return reply(`Não está usando comando correto!!\n*Exempo: ${prefix}attp supra gostoso*`)
 reply(mess.wait)
 attp2 = await getBuffer(`http://fahmiapi.herokuapp.com/maker/ttp?text=${body.slice(6)}&apikey=9ac082da-70fa-4638-be66-d3bde5aec58f`)
 supra.sendMessage(from, attp2, sticker, {quoted: mek})
 break
 
 case 'attp1':
 if (isBanned) return reply('Vc foi banido')	
if (args.length < 1) return reply(`Não está usando comando correto!!\n*Exempo: ${prefix}attp1 supra gostoso*`)
 reply(mess.wait)
 attp2 = await getBuffer(`https://lolhuman.herokuapp.com/api/attp?apikey=73cea893c3a573384e52e0a6&text=${body.slice(6)}`)
   supra.sendMessage(from, attp2, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Lhanna-BOT", 'jpegThumbnail': fs.readFileSync('./image/odc.jpeg')}}}})
 break

										
				case 'figu':
				case 'fig':
				case 'f':
				if (isBanned) return reply('Você foi banido')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await supra.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await supra.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await supra.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								supra.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await supra.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas *.f* ou marque uma imagem que já foi enviada`)
					}
					break

case 'toimg':
 if (isBanned) return reply('Você foi banido')
 reply(mess.wait)
 imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 medimg = await supra.downloadAndSaveMediaMessage(imgmed)
 ran = getRandom('.png')
 exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {
 fs.unlinkSync(medimg)
 if (err) return reply('Gagal')
 buffer = fs.readFileSync(ran)
 supra.sendMessage(from, buffer, image, {quoted: mek, caption: 'Convertido em image'})
  fs.unlinkSync(ran)
 })
 break
 

			  case 'welcome':
			       if (isBanned) return reply('Você foi banido') 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('RECURSO DE BEM VINDO ESTÁ  ATIVO')
						welkom.push(from)
						fs.writeFileSync('./new/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./new/welkom.json', JSON.stringify(welkom))
						reply('Recurso de boas-vindas desativado')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                       break
                       
                       case 'slow':
    if (isBanned) return reply('Você foi banido')                   
   low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   slo = await supra.downloadAndSaveMediaMessage(low)
   ran = getRandom('.mp3')
   exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(slo)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   supra.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   fs.unlinkSync(ran)
   })
   break
   
     case 'teste':
    if (isBanned) return reply('Você foi banido')                   
 const  sup = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 const  iaa = await supra.downloadAndSaveMediaMessage(sup)
  // wew = fs.readFileSync('image/odc.jpeg')
   anu = await fetchJson(`https://api.zeks.xyz/api/searchmusic?apikey=apivinz&audio=${iaa}`)
  teks =`Nome : ${anu.data.title}
         Artista : ${anu.data.artists}`
  supra.sendMessage(from, teks, text, {quoted:mek})
	break  
	     
	     case 'textoi':
	
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						reply(mess.wait)

						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})

							.then(teks => {

								reply(teks.trim())

								fs.unlinkSync(media)

							})

							.catch(err => {

								reply(err.message)

								fs.unlinkSync(media)

							})

					} else {

						reply('Foto aja mas')

					}

					break

  
				
  case 'esquilo':
  if (isBanned) return reply('Você foi banido')
   pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   tup = await supra.downloadAndSaveMediaMessage(pai)
   ran = getRandom('.mp3')
   exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(tup)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   supra.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   fs.unlinkSync(ran)
    })
   break
		
  case 'raposa':
  if (isBanned) return reply('Você foi banido')
   muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   gem = await supra.downloadAndSaveMediaMessage(muk)
   ran = getRandom('.mp3')
   exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(gem)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   supra.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   fs.unlinkSync(ran)
    })
   break

//c8b525d64479dba1a7e86cc83c2dbed0

/* case 'sticke':
 if (isBanned) return reply('Você foi banido')
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    sue = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    fffs = await supra.downloadAndSaveMediaMessage(sue)
     anu = await imgbb("761ea2d5575581057a799d14e9c78e28", fffs)
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/img-to-webp?image_url=${anu.display_url}`)
buffer = await getBuffer(data.result)
supra.sendMessage(from, buffer, sticker, {quoted: mek})
break */

  case 'bass':  
   if (isBanned) return reply('Você foi banido')              
   ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   bas = await supra.downloadAndSaveMediaMessage(ass)
   ran = getRandom('.mp3')
   exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(bas)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   supra.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   fs.unlinkSync(ran)
    })
   break
   
   case 'musica':
   if (isBanned) return reply('Você foi banido')
		if (args.length < 1) return reply('Qual o nome da música?')
         reply(mess.wait)
         play = body.slice(7)
         anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${play}`)
         buffer = await getBuffer(anu.result.thumb)
         lagu = await getBuffer(anu.result.url)
         supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA ESTÁ BAIXANDO SUA MÚSICA🎶🎶'})
         supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.result.title}.mp3`, 'jpegThumbnail': await getBuffer(anu.result.thumb)}}}})
         break
         
      case 'musica3':
   if (isBanned) return reply('Você foi banido')
 if (args.length < 1) return reply('Digite o nome da música')
 hay = body.slice(7)
 reply(mess.wait)
 anuq = await fetchJson(`http://zekais-api.herokuapp.com/ytplay?query=${hay}`)
 buffer = await getBuffer(anu.thumb) 
 lagu = await getBuffer(anu.result)
  supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA ESTÁ BAIXANDO SUA MÚSICA🎶🎶'})
 supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `NEWTON(SUPRA)❤️`, 'jpegThumbnail': await getBuffer(anu.thumb)}}}})
 break       
     // https://server-api-rey.herokuapp.com/api/yt/playmp3?query=${data.body}&apikey=apirey   
   case 'play1':
   if (isBanned) return reply('Você foi banido')
 if (args.length < 1) return reply('Digite o nome da música')
 hay = body.slice(6)
 reply(mess.wait)
 anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)
 buffer = await getBuffer(anu.result.thumbnail) 
 lagu = await getBuffer(anu.result.url_audio)
  supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA ESTÁ BAIXANDO SUA MÚSICA🎶🎶'})
 supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `NEWTON(SUPRA)❤️`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)}}}})
 break
 
 case 'playaudio':
   if (isBanned) return reply('Você foi banido')
 if (args.length < 1) return reply('Digite o nome da música')
 hay = body.slice(11)
 reply(mess.wait)
 anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)
 buffer = await getBuffer(anu.result.thumbnail) 
 lagu = await getBuffer(anu.result.url_audio)
  supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA ESTÁ BAIXANDO SUA MÚSICA🎶🎶'})
 supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `NEWTON(SUPRA)❤️`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)}}}})
 break
 
  case 'play10': //@SUPRA ♡
                    if (args.length < 1) return reply('Digite o nome da música')
                    play = body.slice(7)
                    reply(mess.wait)
                    anu = await fetchJson(`https://jonaz-api-v2.herokuapp.com/play?music=${play}`)
                    lagu = await getBuffer(anu.url_dl)
                     supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.titulo}.mp3`, 'jpegThumbnail': fs.readFileSync('./image/odc.jpeg')}}}})					
                    break
    
    
  case 'play20': //@SUPRA ♡
                    if (args.length < 1) return reply('Digite o nome da música')
                    hay = body.slice(7)
                    reply(mess.wait)
                    anu = await fetchJson(`https://jonaz-api-v2.herokuapp.com/play?music=${hay}`)
                    lagu = await getBuffer(anu.url_dl)
                     supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: supra2})
                     break
                     
 case 'musica4': //@SUPRA //REMOD SKILLER

  if (args.length < 1) return reply('Qual o nome da música?')
  reply(mess.wait)
  anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${body.slice(8)}`)
  msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/yt/play2?query=${body.slice(8)}`)
  //buffer = await getBuffer(anu.result.thumb)
  buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.url)}&album=Lhanna-BOT&capa=${anu.result.thumb}`)
  lagu = await getBuffer(msc.result.url_audio)
  supra.sendMessage(from, buffer, image, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": anu.result.title, 'jpegThumbnail': fs.readFileSync('./image/odc.jpeg')}}}})					
  supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.result.title}.mp3`, 'jpegThumbnail': await getBuffer(anu.result.thumb)}}}})
  break
                   
   case 'play':   
   if (isBanned) return reply('Você foi banido')
   reply(mess.wait)
   hay = body.slice(5)
   anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${hay}&APIKEY=63b3e16b23026b82`)  
   buffer = await getBuffer(anu.thumbnail) 
   lagu = await getBuffer(anu.url)
   supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA ESTÁ BAIXANDO SUA MÚSICA🎶🎶'})   
   supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   break
   
   case 'musica1':   
  const xxff = body.slice(8)
  reply(mess.wait)
   anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytplaymp3?query=${xxff}`)  
   buffer = await getBuffer(anu.thumb) 
   lagu = await getBuffer(anu.url)
   supra.sendMessage(from, buffer, image, {quoted: mek, caption:'SUA MÚSICA ESTÁ SENDO BAIXADA🎶🎶'})   
   supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
   break
   
      case 'play2':   
   if (isBanned) return reply('Você foi banido')
   reply(mess.wait)
   hay = body.slice(6)
   anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${hay}`)  
   buffer = await getBuffer(anu.Imagem_Do_Video) 
   lagu = await getBuffer(anu.Link_De_Download)
   supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA ESTÁ BAIXANDO SUA MÚSICA🎶🎶'})   
   supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   break
   
   case 'play4': case 'ytplay': case 'ytmp3':
 reply(mess.wait)
 ytsnya = await yts(q);
res = ytsnya.all;
anu = await dl.yta(res[0].url)
bup = await getBuffer(anu.audio)
supra.sendMessage(from, bup, audio, {mimetype: 'audio/mp4', quoted:mek})
break
   

    case 'vid':
  if (isBanned) return reply('Você foi banido') 
   reply(mess.wait)
   hay = body.slice(5)
   anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)   
   buffer = await getBuffer(anu.result.thumbnail)
   lagu = await getBuffer(anu.result.url_video)
   supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA ESTÁ BAIXANDO SEU VÍDEO🎬'})
   supra.sendMessage(from, lagu, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `NEWTON(SUPRA)❤️`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)}}}})
   break
   
    case 'vid3':
  if (isBanned) return reply('Você foi banido') 
   reply(mess.wait)
   hay = body.slice(6)
   anu = await fetchJson(`http://zekais-api.herokuapp.com/yts?query=${hay}`)   
   buffer = await getBuffer(anu.result.thumbnail)
   lagu = await getBuffer(anu.result.url_video)
   supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA ESTÁ BAIXANDO SEU VÍDEO🎬'})
   supra.sendMessage(from, lagu, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `NEWTON(SUPRA)❤️`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)}}}})
   break
   
   
      case 'igvideo1':
  if (isBanned) return reply('Você foi banido') 
   anu_i = args[0]
   anu_i = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=ini_i`)   
   anu_i = anu_i.result.url  
   if (ini_url.includes(".mp4")) ini_type = video
      ini_buffer = await getBuffer(anu_i)
   supra.sendMessage(from, ini_buffer, ini_type, { quoted: mek})
   break
   
   case 'instagram':

				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${up.apikey1}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    supra.sendMessage(from, ini_buffer, ini_type, { quoted: mek})
                    break
 
 
 
    case 'bloqueados':

					teks = 'Essa é minha lista de bloqueados :\n'

					for (let block of blocked) {

						teks += `~> @${block.split('@')[0]}\n`

					}

					teks += `Total : ${blocked.length}`

					supra.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})

					break 
       
   case 'swm': 
case 'sticker':
const fgif = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: "📄Lhanna-BOT", jpegThumbnail: fs.readFileSync('image/odc.jpeg')} } }
const { convertSticker } = require('./swm.js')
if (type === 'imageMessage' || isQuotedImage){
const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const dlfile = await supra.downloadMediaMessage(getbuff)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `@Supra`, `Newton`)
var imageBuffer = new Buffer.from(mantap, 'base64');
supra.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgif})
} else {
reply('Marque uma imagem!')
}
break

 

   case 'xvideosd':
  hay = body.slice(9)
  anu = await fetchJson(`http://fahmiapi.herokuapp.com/nsfw/xvideos?url=${hay}&apikey=${up.apikey2}`)
   buffer = await getBuffer(anu.streams.hq)
   supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `Aí seu vídeo punheteiro️`})
   break
/*   }
       
   
   Client.cmd.on('*', async (data) => {
            const {
                args,
                body,
                message,
                prefix,
                from,
                sender,
                command,
                isOwner,
                type,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = data
            switch(command.toLowerCase()) {
            case 'stikergif':
                   
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    const getbuff = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    else Client.sendImageAsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    break
                       
			*/
				default:
				
				if (budy.includes("https://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname2}* vc é admin por isso não vou te banir`)
		    supra.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname2}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    supra.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }			
				   if (budy.includes("canta")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/canta.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                     if (budy.includes("Canta")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/canta.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                              
                     if (budy.includes("Bot")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/oih.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                   if (budy.includes("yamete")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/yamete.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                     if (budy.includes("Yamete")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/yamete.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                   	if (budy.includes("🤣")){
			        supra.updatePresence(from, Presence.composing)
			        reply("Cringe usar emoji")
			        }
			        if (budy.includes("supra")){
			        supra.updatePresence(from, Presence.composing)
			        reply("Oq estão falando do meu dono?👀")
			        }
			        if (budy.includes("Supra")){
			        supra.updatePresence(from, Presence.composing)
			        reply("Oq estão falando do meu dono?👀")
			        }			     			           			                         
                   	if (budy.includes("freefire")){
			       supra.updatePresence(from, Presence.composing)
			       reply("Só corno que joga")
		           const d = fs.readFileSync('./sticker/corni.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
	                }
                   if (budy.includes("Lhanna")){
		           supra.updatePresence(from, Presence.composing)
		           var alzu = ["Oiee❤️", "Me chamou?❤️", "Olá", "Hii❤️", "Oie vc já sabe que é corno?", "Olá amigo como vai.", "Nao quero conversar"]
                   var fie = alzu[Math.floor(Math.random() * alzu.length)]
                   cra = `${Math.floor(Math.random() * 100)}`
                   hisil = `${fie}`
                   reply(hisil)
                   }
                   if (budy.includes("lhanna")){
		           supra.updatePresence(from, Presence.composing)
		           var alzu = ["Oiee❤️", "Me chamou?❤️", "Olá", "Hii❤️", "Oie vc já sabe que é corno?", "Olá amigo como vai.", "Nao quero conversar"]
                   var fie = alzu[Math.floor(Math.random() * alzu.length)]
                   cra = `${Math.floor(Math.random() * 100)}`
                   hisil = `${fie}`
                   reply(hisil)
                   }
                   if (budy.includes("filha")){		          
		          supra.updatePresence(from, Presence.composing)
			        reply("Vc é o supra?")
			       
			        }
                   if (budy.includes("Filha")){		          
		          supra.updatePresence(from, Presence.composing)
			        reply("Vc é o supra?")
			        }		
                   if (budy.includes("Osh")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/tenor.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                  if (budy.includes("frio")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                   if (budy.includes("fria")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                  if (budy.includes("Fria")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                 if (budy.includes("Frio")){  // respon tag ubah aja
                 const d = fs.readFileSync('./sticker/frio.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("loli")){  // respon tag ubah aja
                 const d = fs.readFileSync('./sticker/loli.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("Loli")){  // respon tag ubah aja
                 const d = fs.readFileSync('./sticker/loli.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("feia")){  // respon tag ubah aja
                  const d = fs.readFileSync('./sticker/porno.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                  }
   /* if (budy.includes("lhass")){ //@SUPRA ♡
    supra.updatePresence(from, Presence.composing)
    const brinus = ["1","2","3","4"]
     kkk = brinus[Math.floor(Math.random() * brinus.length)]
     brle = fs.readFileSync('./audio/mcs'+kkk+'.mp3')
      supra.sendMessage(from, brle, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   } */
                  if (budy.includes("chata")){  // respon tag ubah aja
                  const d = fs.readFileSync('./sticker/porno.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                  }
                if (budy.includes("lhanna")){  // respon tag ubah aja
                 const d = fs.readFileSync('./strg/sticker/lhanna.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                   if ((budy === `Quem e teu pai?`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("Meu pai é o supra")
                   }
                    if ((budy === `Te amo`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("Ta carente porra?")
                   }
                    if ((budy === `Não`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("ta;-;")
                   }
                 if (budy.includes("Lhanna")){  // respon tag ubah aja
                 const d = fs.readFileSync('./strg/sticker/lhanna.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()