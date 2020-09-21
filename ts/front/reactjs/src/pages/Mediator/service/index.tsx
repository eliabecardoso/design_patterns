import AirPlane from './models/Implements/AirPlane';
import AirTrafficControl from './models/Implements/AirTrafficControl';

class MediatorPattern {
  atc: AirTrafficControl;

  constructor(name: string, code: string) {
    this.atc = new AirTrafficControl(name, code);
  }

  newAirPlane(name: string, code: string): void {
    const airPlane = new AirPlane(name, code);
    this.atc.registerAirPlane(airPlane);
  }
}

export default MediatorPattern;
