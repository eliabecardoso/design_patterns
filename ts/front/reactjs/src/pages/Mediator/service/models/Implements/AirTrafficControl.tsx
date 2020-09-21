import AbstractAirTrafficControl from '../AbstractAirTrafficControl';
import AirPlane from './AirPlane';

class AirTrafficControl extends AbstractAirTrafficControl {
  private airPlanes: Array<AirPlane>;

  constructor(name: string, code: string) {
    super(name, code);
    this.airPlanes = new Array<AirPlane>();
  }

  registerAirPlane(airPlane: AirPlane): void {
    this.airPlanes.push(airPlane);
  }

  unregisterAirPlane(id: string): void {
    const index = this.airPlanes.findIndex(ap => ap.getId() === id);
    if (index) this.airPlanes.splice(index, 1);
  }
}

export default AirTrafficControl;
