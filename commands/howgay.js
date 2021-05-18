    module.exports = {
        name: 'howgay',
        description: "this is a ping command!",
        execute(message, args){
            message.reply("calculating gayness...").then(m => { 
                setTimeout(() => {
                m.edit(+ Math.floor(Math.random() * 101) + "% gay :rainbow_flag:")
                }, 5000)
            }
            )}
    }