var moment = require('moment');

function ReadJumpsJson(jumps, category) {
  let jumpsCategorized = {}
  if (jumps){
    jumps.forEach((jump) => {
      jumpsCategorized[jump[category]] = (jumpsCategorized[jump[category]] || 0) + 1;
    })
  }

  return formatIntoGraphReadableData(jumpsCategorized)
}

function ReadJumpsByMonth(jumps) {
  let jumpsByMonth = {}

  if (jumps){
    jumps.forEach((jump) => {
      let month = moment(jump['jump_date'], 'YYYY-MM-DD').month()
      let monthName = getMonthName(month)

      jumpsByMonth[monthName] = (jumpsByMonth[monthName] || 0) + 1;
    })
  }
  return formatIntoGraphReadableData(jumpsByMonth)
}

function formatIntoGraphReadableData(dataByKeyValuePairs){
  let dataForGraph = []
  Object.keys(dataByKeyValuePairs).forEach((d) => {
    let dataum = {}
    dataum['name'] = d
    dataum['value'] = dataByKeyValuePairs[d]
    dataForGraph.push(dataum)
  })
  return dataForGraph
}

function getMonthName(monthNumberFromMoment) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
  return months[monthNumberFromMoment]
}

export  { ReadJumpsJson, ReadJumpsByMonth };
