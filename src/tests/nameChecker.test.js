import {checkForName} from '../client/js/nameChecker';


describe('Check Name Test', () => {
    it('should be true if checkForName is defined', () => {
        expect(checkForName).toBeDefined();
    });

    it('It should be true if checkForName is a function', () => {
        expect(typeof checkForName).toBe('function');
    });
})