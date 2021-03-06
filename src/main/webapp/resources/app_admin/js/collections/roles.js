/**
 * http://usejsdoc.org/
 */
define(['role', 'backbone.paginator'], function(Role, BackbonePaginator){
		 

	
	App.Collections.Roles = Backbone.PageableCollection.extend({
		   model: Role,		  
		   initialize: function () {
			    
		        // This will be called when an item is added. pushed or unshifted
		        this.on('add', function(model) {
		        	//console.log(roles.toJSON());
					//console.log(JSON.stringify(roles));
					console.log("Модель добавлена в коллекцию");					
		        });
		        // This will be called when an item is removed, popped or shifted
		        this.on('remove',  function(model) {
		            console.log('Модель удалена из коллекции');
		        });
		        // This will be called when an item is updated
		        this.on('change', function(model) {
		            console.log('Модель изменена в коллекции');
		        });
		  			
		        this.on("request", function(rolerecu){
				    console.log("Модель отправлена на сервер");
			    });
			    
		        this.on("sync", function(rolesync){
				console.log("Модель добавлена в БД");			
			    });
		        
		        this.comparator = function(role) {
		        	  return role.get("rolename");
		        	};
		        
			    
		   },
			    
		  saverole: function(id_c){               	
	               	console.log("Модель по номеру ", this.get(19));			
				},
		        
		   url: "role", 
		
		   state: {
			    pageSize: 15
		   },
		 
		   mode: "client" // page entirely on the client side		    
			   
		});	
	
	console.log("Ehf!!!!!");
	
	return App.Collections.Roles;
});