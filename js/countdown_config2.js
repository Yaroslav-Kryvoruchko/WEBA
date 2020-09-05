jQuery(document).ready(function() {			
				
    $('#countdown_dashboard2').countDown({
					targetDate: {
						'day': 		29,
						'month': 	09,
						'year': 	2020,
						'hour': 	23,
						'min': 		59,
						'sec': 		59,	
						'utc':      true,
						},
					omitWeeks: true						
				});              
});