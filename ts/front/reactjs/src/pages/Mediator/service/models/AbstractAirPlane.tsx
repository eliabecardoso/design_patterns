import Identifier from './Identifier';

abstract class AbstractAirPlane extends Identifier {
  name: string;
  code: string;

  constructor(name: string, code: string) {
    super();
    this.name = name;
    this.code = code;
  }
}

export default AbstractAirPlane;
