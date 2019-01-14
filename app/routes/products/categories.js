import Route from '@ember/routing/route';

export default Route.extend({

  model() {
     return [
      {
        "homepage": 'google.com',
        "description": 'Search Engine'
      },
      {
        "homepage": 'amazon.com',
        "description": 'E-Commerce'
      },
      {
        "homepage": 'amazon.com',
        "description": 'online shopping'
      },
      {
        "homepage": 'amazon.com',
        "description": 'online shopping'
      },

    ];
  },


  // Sends AJAX request for new Category saving
  saveCategory(homepage, description){
      const data = {
           "homepage": homepage,
           "description": description
      };

    $.ajax({
          url: "https://www.onlinetool.in/api/products/",
          type: "POST",
          data: data,
          success: function(response, textStatus, xhr) {
              console.log(response);
              console.log(response.status);
          },
          error: function(response) { 
              console.log(response.responseText);
              console.log(response.status);
          }
          })
  },

  // Delete Category 
 deleteCategory (category){
      const {id, homepage, description} = category;
      $.ajax({
            url: `https://www.onlinetool.in/api/products/${categoryId}`,
            type: "DELETE",
            data: data,
            success: function(response, textStatus, xhr) {
                console.log(response);
                console.log(response.status);
            },
            error: function(response) {
                console.log(response.responseText);
                console.log(response.status);
            }
        })  
},

   actions: {

    addNewCategory(homepage, description) {
      // Calls function for sending of AJAX request
      this.controller.get('model').pushObject({homepage, description});
      this.saveCategory(homepage, description);

    },

    deleteCategory(category) {
    this.controller.get('model').removeObject(category);
      //this.deleteCategory(category);
    }
  }

});