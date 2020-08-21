jQuery(document).ready(function() {
    
    $('#countdown_dashboard').countDown({
					targetDate: {
						'day': 		15,
						'month': 	10,
						'year': 	2020,
						'hour': 	23,
						'min': 		59,
						'sec': 		59,	
						'utc':      true,
						},
					omitWeeks: true					
				});               
                             
});