const data = {
    url : 'https://elektra.elektrarms-staging.com/',
    email : 's.polydorou@hyperiosoftware.com',
    password : 'Hyperio1234!'
}

const validate = {
    dashboard : 'Dashboard'
    
}

const asset = {
    assetId : `asset_${Date.now()}`,
    designation : 'FluoHelpSupport',
    manufacturerdata : '3M',
    city : 'city'
}

const calendardata = {
    targetMonth : 'June',
    targetYear : '2027',
    targetday : '15',
    expectMonth : '6'
}

module.exports = { data, validate, asset, calendardata };