module.exports = {
    name: 'ppsize',
    description: "this is a ping command!",
    execute(message, args){
        message.reply("measuring pp..").then(m => { 
            setTimeout(() => {
            m.edit(+ Math.floor(Math.random() * 101) + " Inches 🍆")
            }, 2000)
        }
        )}
}