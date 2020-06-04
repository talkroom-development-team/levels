module.exports = (msg) => {
  if(msg.author.id !== '159985870458322944') return

  const arr = msg.content.split(' ')
  const idx = arr.indexOf('레벨은')

  if(idx < 0) return
  msg.channel.send(arr[idx + 1]  + ' 레벨 체크!')
}
