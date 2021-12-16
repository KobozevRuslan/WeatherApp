export class HistoryService {
  static initHistory() {
    if (!HistoryService.getHistory())
      localStorage.setItem('history', JSON.stringify([]));
  }

  static getHistory() {
    return localStorage.getItem('history');
  }

  static updateHistory(data) {
    const {
      main: { temp },
      name,
    } = data;
    const currentVal = { city: name, weather: Math.floor(temp) };
    const prevVal = JSON.parse(HistoryService.getHistory());
    if (prevVal) {
      localStorage.setItem('history', JSON.stringify([...prevVal, currentVal]));
    } else {
      localStorage.setItem('history', JSON.stringify([]));
    }
  }
}
