export class HistoryService {
  static initHistory() {
    // if (!HistoryService.getHistory())
    //   localStorage.setItem('history', JSON.stringify([]));
  }

  static getHistory() {
    return JSON.parse(localStorage.getItem('history') || '[]');
  }

  static updateHistory(data) {
    const {
      main: { temp },
      name,
    } = data;
    const currentVal = { city: name, weather: Math.floor(temp) };
    const prevVal = HistoryService.getHistory();
    localStorage.setItem('history', JSON.stringify([...prevVal, currentVal]));
  }
}
