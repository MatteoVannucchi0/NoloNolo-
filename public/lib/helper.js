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

const fileExists = async path => !!(await fs.stat(path).catch(e => false));

async function deleteFile(absPath) {
    console.log(absPath);
    if (await fileExists(absPath))
        await fs.unlink(absPath);

}

function getRandomNameForImage(prefix, suffix) {
    const random = Math.floor(Math.random() * 1000000) 
    return `${prefix}-${Date.now()}-${random}${suffix}`;
}

function mapAsync(array, callbackfn) {
  return Promise.all(array.map(callbackfn));
}

function filterAsync(array, callbackfn) {
  return mapAsync(array, callbackfn).then(filterMap => {
    return array.filter((value, index) => filterMap[index]);
  });
}

Array.prototype.mapAsync = async function (callbackfn){ return mapAsync(this, callbackfn); }

Array.prototype.filterAsync = async function (callbackfn){ return filterAsync(this, callbackfn); }


module.exports = {dayDifference, isWeekend, createFileAndDir, createFileAndDirSync, deleteFile, getRandomNameForImage, filterAsync}