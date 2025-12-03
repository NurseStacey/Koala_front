export const SURGICAL_HISTORY_FIELDS = [
    {
        'order':0,
        'name':'surgery',
        'label':'Surgery',
        'type':'text', 
        'options':[]        
    },
    {
        'order':1,
        'name':'date',
        'label':'Date of Surgery',
        'type':'date', 
        'options':[]        
    }, 
    {
        'order':2,
        'name':'year',
        'label':'Year of Surgery',
        'type':'number', 
        'options':[]
    },  
    {
        'order':3,
        'name':'month',
        'label':'Month of Surgery',
        'type':'dropdown', 
        'options':[
            '',
            'January', 
            'February', 
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ] 
    },
    {
        'order':4,
        'name':'details',
        'label':'Details of Surgery',
        'type':'textarea', 
        'options':[],        
        'cols':15,
        'rows':5
    }
]