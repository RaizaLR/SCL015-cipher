import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');

    });

  });

  describe('cipher.decode', () =>{ 

    it('should be a function', () => {  
      expect(typeof cipher.decode).toBe('function');
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', ()=>{

      expect(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG',33)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

  });     


});