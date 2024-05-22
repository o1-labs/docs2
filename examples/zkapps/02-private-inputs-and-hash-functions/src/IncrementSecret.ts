import { Field, SmartContract, state, State, method, Poseidon } from 'o1js';

export class IncrementSecret extends SmartContract {
  @state(Field) x = State<Field>();

  @method async initState(salt: Field, firstSecret: Field) {
    this.x.set(Poseidon.hash([salt, firstSecret]));
  }

  @method async incrementSecret(salt: Field, secret: Field) {
    const x = this.x.get();
    this.x.requireEquals(x);

    Poseidon.hash([salt, secret]).assertEquals(x);
    this.x.set(Poseidon.hash([salt, secret.add(1)]));
  }
}
