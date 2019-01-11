import Route from '@ember/routing/route';

export default Route.extend({

	model() {
     return [
      {
        id: 1,
        homepage: 'google.com',
        description: 'Search Engine'
      },
      {
        id: 2,
        homepage: 'amazon.com',
        description: 'E-Commerce'
      },
      {
        id: 4,
        homepage: 'amazon.com',
        description: 'online shopping'
      },
      {
        id: 5,
        homepage: 'amazon.com',
        description: 'online shopping'
      },

    ];
  },

   actions: {

    addNewCategory(id, homepage, description) {
      this.controller.get('model').pushObject({ id, homepage, description});
    },

    deleteCategory(category) {
      this.controller.get('model').removeObject(category);
      
    },

    editCategory(category) {
      category.set('isEditing', true);
    },

    updateCategory(category) {
      category.save().then(
        category => category.set('isEditing', false)
      );
    }
  }

});
