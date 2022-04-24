type CustomerDataType = {
  [id: number]: {
    stationName: string,
    time: number,
    latestType: 'in' | 'out'
  }
}
type InOutType = {
  [path: string]: {
    count: number,
    acc: number,
  }
}

class UndergroundSystem {
  private customers: CustomerDataType = {};
  private journeyDatabase: InOutType = {}
  constructor() {
  }

  checkIn(id: number, stationName: string, t: number): void {
    if (this.customers[id] === undefined || this.customers[id].latestType === 'out')
      this.customers[id] = {
        stationName: stationName,
        time: t,
        latestType: 'in'
      }

    else console.error('wrong input', id, stationName, t, this.customers[id], this.customers);

  }

  checkOut(id: number, stationName: string, t: number): void {
    if (this.customers[id] !== undefined || this.customers[id].latestType === 'in') {
      const jKey = this.customers[id].stationName + '-' + stationName;

      this.customers[id] = {
        stationName: stationName,
        time: t - this.customers[id].time,
        latestType: 'out'
      }

      if (this.journeyDatabase[jKey] !== undefined)
        this.journeyDatabase[jKey] = {
          count: this.journeyDatabase[jKey].count + 1,
          acc: this.journeyDatabase[jKey].acc + this.customers[id].time
        }
      else
        this.journeyDatabase[jKey] = {
          count: 1,
          acc: this.customers[id].time
        }
    }

    else console.error('wrong input', id, stationName, t, this.customers[id], this.customers);

  }

  getAverageTime(startStation: string, endStation: string): number {
    const jKey = startStation + '-' + endStation;

    // console.log(jKey, this.journeyDatabase[jKey], this.journeyDatabase);

    if (this.journeyDatabase[jKey] !== undefined)
      return this.journeyDatabase[jKey].acc / this.journeyDatabase[jKey].count
    else
      return -1;
  }
}

/**
* Your UndergroundSystem object will be instantiated and called as such:
* var obj = new UndergroundSystem()
* obj.checkIn(id,stationName,t)
* obj.checkOut(id,stationName,t)
* var param_3 = obj.getAverageTime(startStation,endStation)
*/
