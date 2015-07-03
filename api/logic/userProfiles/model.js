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
  var profile = this;
  console.log('pre save do profile!');
  User.findById({_id: profile.userModel })
    .exec(function(err, data){
    console.log('procurando por id: ' + profile.userModel);
    if(data){
      console.log('Achamos!', data);
      if(data.profileModel == null || data.profileModel == '' || data.profileModel.length < 2) {
        console.log('Encontrado usuario, sem profileModel!')
        next();
      } else {
        console.log('Encontrado usuario, mas JA TEM PROFILE MODEL')
        var err = new Error({err: 'Error: Users got profile. Cant create another one for same user.'});
        return next(err);
      }
    }
    if(err){
      next(err);
    }
  })
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