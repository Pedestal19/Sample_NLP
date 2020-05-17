import {handleSubmit} from '../client/js/formHandler';

describe('Form Handler Test', () => {
    it('should be true if handleSubmit is defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    it('It should be true if handleSubmit is a function', () => {
        expect(typeof handleSubmit).toBe('function');
    });
})

