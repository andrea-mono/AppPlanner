export const formatDate = (date: Date, type: string) => {
  switch (type) {
    case 'ampm': {
      let hours: string | number = date.getHours();
      let minutes: string | number = date.getMinutes();
      let ampm = hours >= 12 ? 'pm' : 'am';

      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = ('0' + minutes).slice(-2);

      return hours + ':' + minutes + ' ' + ampm;
    }
  }
};
