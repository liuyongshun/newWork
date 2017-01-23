    	function dialog() {
		    layer.open( {
				type: 1,
				area: ['365px', '236px'],
				shadeClose: true, 
				title: '提示',
				content: $( '#click' )		
		 	} );    		
    	}
        
		function closeDialog(){ 
		    layer.closeAll();  
		}