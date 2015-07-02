var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var User = require('../users/model.js')
//1
var UserProfileSchema = new mongoose.Schema({
  userModel: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  , name: {
    type: String,
    required: true
  }
  , email: {
    type: String,
    required: true
  }
  , birthday: {
    type: Date
  }
});
//2
UserProfileSchema.pre('save', function(next) {
  //o presave do UserProfile vai verificar se houve alteração ou 
  //inclusao de userModel. Caso isso tenha acontecido, é necessário
  // acessar o model User e atualizar o campo profileModel
  var user = this;
  next();
});
UserProfileSchema.post('save', function (profile, next) {
  User.findById({_id: profile.userModel}, function(err, data){
    if(err){
      return res.status(500).json({
        msg: "Profile Created, but unable to save it to User Data"
        , err: err
      })
    }
    if(data){
      data.profileModel = profile._id;
      data.save(function(err, data){
        if(err){
          return res.status(500).json({
            msg: "erro ao salvar usuario com perfil novo"
            , err: err
          })
        }
        if(data){
          next();
        }
      });
    }
  })

})
module.exports = mongoose.model('UserProfile', UserProfileSchema);