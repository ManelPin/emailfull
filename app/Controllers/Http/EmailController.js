'use strict'

const Mail = use('Mail')
const Email = use('App/Models/Email')
class EmailController {
    async store ({ request,response }) {
        console.log(request)
        const data = request.only(['email'])
        console.log(data)
        const user = await Email.create(data)
    
//        await Mail.send('emails.welcome', user.toJSON(), (message) => {
//          message
//            .to(user.email)
//            .from('<from-email>')
//            .subject('Welcome to yardstick')
//        })
    
        return JSON.stringify("Registered successfully");
      }
}

module.exports = EmailController