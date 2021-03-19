# The Witcher 3 Bestiario API

### Endpoinst
> https://warm-taiga-14620.herokuapp.com/  

***
### Formato de resposta da API
```javascript
const endpoint = "https://warm-taiga-14620.herokuapp.com/"
//RESPOSTA
{
    results:[
        {
            _id: "",
            name: "",
            otherNames:[""],
            type:"",
            description:["", ""],
            image:"",
            occurrences:"",
            weakness:["", ""],
            drops:{
                making:["",""],
                alchemical:[""],
                others:[""]

            },
            missions:["", ""]

        }
    ],
    types:[{
            name:"Vampiros",
            monsters:[{_id, name },]
        }
    ]
}
```