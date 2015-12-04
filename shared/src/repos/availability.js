import moment from 'moment';

class Availability {
  constructor(attributes) {
    Object.assign(this, attributes);
  }

  get arrivalDateFormatted() {
    return moment.unix(this.arrivalDate).format('MM/DD/YYYY');
  }

  get reserveUrl() {
    // TODO - Reserve America specific
    return 'http://reserveamerica.com';
  }
}

export { Availability };
