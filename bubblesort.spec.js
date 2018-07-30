describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  describe('single item', function(){
    it('handles a single item', function(){
      expect( bubbleSort([1]) ).toEqual( [1] );
    });
  });

  describe('multiple items', function(){
    it('handless a miltiple items', function(){
      expect( bubbleSort([5, 7, 8]) ).toEqual( [5, 7, 8] );
    });
  });

  //spy