jQuery(document).ready(function() {			
				
    $('#countdown_dashboard3').countDown({
					targetDate: {
						'day': 		1,
						'month': 	10,
						'year': 	2012,
						'hour': 	23,
						'min': 		59,
						'sec': 		59,	
						'utc':      true,
						},
					omitWeeks: true						
				});              
});