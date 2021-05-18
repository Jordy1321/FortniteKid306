module.exports = {
    name: 'beans',
    description: "this is a ping command!",
    execute(message, args){
        message.reply("counting the **beans**").then(m => { 
            setTimeout(() => {
            m.edit(+ Math.floor(Math.random() * 1001) + " Beans")
            }, 2000)
        }
        )}
}