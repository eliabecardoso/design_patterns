import AbstractAirPlane from './AbstractAirPlane';
import Identifier from './Identifier';

abstract class AbstractAirTrafficControl extends Identifier {
  name: string;
  code: string;

  constructor(name: string, code: string) {
    super();
    this.name = name;
    this.code = code;
  }

  abstract registerAirPlane(airPlane: AbstractAirPlane): void;
  abstract unregisterAirPlane(id: string): void;
}

export default AbstractAirTrafficControl;
