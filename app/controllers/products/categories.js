import Controller from '@ember/controller';
import { empty} from '@ember/object/computed';

export default Controller.extend({
	headerMessage: 'Categories',

 isDisabled: empty ('newCategoryId'),
 isDisabled: empty ('newCategoryHomepage'),
 isDisabled: empty ('newCategoryDescription')

});


