const fs = require("fs").promises;
var getDirName = require('path').dirname;

function dayDifference(date1, date2){
    return Math.round((date2-date1)/(1000*60*60*24));
}

function isWeekend(date){
    let day = date.getDay();
    return day === 6 || day === 0;
}

async function createFileAndDir(path) {
  try{
    await fs.mkdir(getDirName(path), { recursive: true });
    (await fs.open(path, "a")).close();
  } catch (error) {
    console.error(error);
  }
}

function createFileAndDirSync(path) {
  const fsSync = require("fs");
  try{
    fsSync.mkdirSync(getDirName(path), { recursive: true });
    const file = fsSync.openSync(path, "a");
    fsSync.closeSync(file);
  } catch (error) {
    console.error(error);
  }
}


module.exports = {dayDifference, isWeekend, createFileAndDir, createFileAndDirSync};