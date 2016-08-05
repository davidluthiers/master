

define([
    'jquery',
    'underscore',
    'backbone',
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    'text!../Templates/passwordP.html',
    'text!../Templates/headerandpanel.html',
    'jquerymobile'
  
    ], function($, _, Backbone, XORCipher, passwordP, headerandpanel){



        passwordView = Backbone.View.extend({
  
            events:{
                "click #password_protect_button":"password_protect"
            },
   
            render: function(id, historycollection){
				console.log("PassV 1");
                this.$el.attr('data-role', 'page');
                this.$el.attr('data-theme', 'a');
                this.$el.attr('class', 'page');

                this.history=historycollection;
	
                if(id=='0'){
                    compiledTemplate = _.template( passwordP );
			 
			
                }
		
				console.log("PassV 2");
                var self=this;
                historycollection.get("languages").set("helppanel",""); //Aquí en lugar de cadena vacía iría el texto de panel de ayuda de la página password_protect
				console.log("PassV 2.1");
                result= historycollection.get("languages").toJSON();
                compiledheaderandpanel=_.template( headerandpanel );
				console.log("PassV 2.2");
                this.$el.empty().append(compiledTemplate(result)).append(compiledheaderandpanel(result));
				console.log("PassV 2.3");
	
	
	
            },
	
            password_protect: function(){
                try{
                    var newpassword1 = $('#textinput60').val();
					var newpassword2 = $('#textinput70').val();
					if(newpassword1 != newpassword2){
						alert(this.history.get("languages").get("dic_passwords_not_match"));//passwords_not_match
					}
					else if (newpassword1.length < 6){
						alert(this.history.get("languages").get("dic_password_too_short"));//password_too_short
					}
					else{
						console.log("Contraseña: ->"+newpassword1+"<-");
						console.log("btoa: ->"+btoa(newpassword1)+"<-");

						donot=this.history.get("donotshow");
						donot.set("pass",btoa(newpassword1));
						this.history.get("donotshow").destroy();
						this.history.create(donot);
				
						//console.log("atob: ->"+atob(btoa(newpassword1))+"<-");
						
					}
                }
                catch(e){
                    alert(e);
                }
            }	


        });

        return passwordView;
    });