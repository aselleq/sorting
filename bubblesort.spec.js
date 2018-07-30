describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([])).toEqual([]);
    });
  });

  describe('single item', function(){
    it('handles a single item', function(){
      expect( bubbleSort([1]) ).toEqual( [1] );
    });
  });

  describe('multiple items', function(){
    it('handless a miltiple items', function(){
      expect( bubbleSort([9, 7, 1]) ).toEqual( [1, 7, 9] );
    });
  });


  it('call spyOn', function () {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([1,5,4])
    expect(swap.calls.count()).toEqual(3);
  })
  