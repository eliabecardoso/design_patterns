import { v4 as uuidv4 } from 'uuid';

abstract class Identifier {
  private id: string;

  constructor() {
    this.id = uuidv4();
  }

  getId(): string {
    return this.id;
  }
}

export default Identifier;
