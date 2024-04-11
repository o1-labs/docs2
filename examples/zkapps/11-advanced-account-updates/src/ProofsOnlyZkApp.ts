import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
} from 'o1js';

export class ProofsOnlyZkApp extends SmartContract {
  @state(Field) num = State<Field>();
  @state(Field) calls = State<Field>();

  deploy(args: DeployArgs) {
    super.deploy(args);
    this.account.permissions.set({
      ...Permissions.default(),
      setDelegate: Permissions.proof(),
      setPermissions: Permissions.proof(),
      setVerificationKey: Permissions.proof(),
      setZkappUri: Permissions.proof(),
      setTokenSymbol: Permissions.proof(),
      incrementNonce: Permissions.proof(),
      setVotingFor: Permissions.proof(),
      setTiming: Permissions.proof(),
    });
  }

  @method async init() {
    super.init();

    this.account.provedState.requireEquals(this.account.provedState.get());
    this.account.provedState.get().assertFalse();

    this.num.set(Field(1));
    this.calls.set(Field(0));
  }

  @method async add(incrementBy: Field) {
    this.account.provedState.requireEquals(this.account.provedState.get());
    this.account.provedState.get().assertTrue();

    const num = this.num.get();
    this.num.requireEquals(num);
    this.num.set(num.add(incrementBy));

    this.incrementCalls();
  }

  @method async incrementCalls() {
    this.account.provedState.requireEquals(this.account.provedState.get());
    this.account.provedState.get().assertTrue();

    const calls = this.calls.get();
    this.calls.requireEquals(calls);
    this.calls.set(calls.add(Field(1)));
  }
}
