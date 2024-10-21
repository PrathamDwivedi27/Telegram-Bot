// t.me/dsa_cp_development_bot.

import {solve} from './segmentTree.js'
import {power,isPerfectSquare,isPrime} from './more_functions.js'
import { Telegraf } from 'telegraf';

// const power=power(5,3);
const bot=new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start((ctx)=> ctx.reply('Welcome to coding bot . Which code do you want?'));
bot.command('seive of erastothenes',(ctx)=>ctx.reply(seiveOfErastothenes));
bot.command('segment_tree',(ctx)=>ctx.reply(solve ));
bot.command('power_function',(ctx)=>ctx.reply(power));
bot.command('perfect_square',(ctx)=>ctx.reply(isPerfectSquare));
bot.command('isPrime',(ctx)=>ctx.reply(isPrime));


bot.on('sticker',(ctx)=>ctx.reply('💗'));
bot.on('emoji',(ctx)=>ctx.reply('🥺'))

bot.launch();
