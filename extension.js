module.exports = {
    "name": "confirmation-pack",
    "publisher": "WESSLY",
    "configuration": {
        "client": [{}],
        "server": [{}]
    },
    "cards": [{
        "type": "CONFIRMATION CARD",
        "source": "./src/App",
        "title": "CONFIRMATION CARD",
        "displayCardType": "CONFIRMATION CARD",
        "description": "Confirms contact information in Self-Service"
    }, {
        "type": "ASSEMBLIES CARD",
        "source": "./src/Assemblies",
        "title": "ASSEMBLIES CARD",
        "displayCardType": "ASSEMBLIES CARD",
        "description": "Shows assembly video",
        "pageRoute": {
            "route": "/"
        }
    }],
    "page": {
        "source": "./src/page/index.jsx"
    }
}