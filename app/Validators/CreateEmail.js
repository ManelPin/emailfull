'use strict'

class CreateEmail {
  get rules() {
    return {
      'email': 'required|unique:emails',
      // validation rules
    }
  }

  get messages() {
    return {
      'required': 'no email',
       'unique':  'duplicated email'
    }
  }

  async fails(error) {
    
    console.log(error[0]['message']);
    return this.ctx.response.json(JSON.stringify(error[0]['message']));
  }
}


module.exports = CreateEmail
