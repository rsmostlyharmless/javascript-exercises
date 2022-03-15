const getTheTitles = function(value) {
    return value.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;


/*
function updateRecords(records, id, prop, value) {
      if (value === '') {
        delete records[id][prop];
      } else if (prop === 'tracks') {
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
      } else {
        records[id][prop] = value;
      }
      return records;
    }
*/