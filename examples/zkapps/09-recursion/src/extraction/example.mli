
type __ = Obj.t

type bool =
| True
| False

type nat =
| O
| S of nat

type ascii =
| Ascii of bool * bool * bool * bool * bool * bool * bool * bool

type string =
| EmptyString
| String of ascii * string

type selfProof =
  nat
  (* singleton inductive, whose constructor was Build_SelfProof *)

module Add :
 sig
  val name : string

  val publicInput : nat
 end

val makeSelfProof : nat -> selfProof

type main = __

val main_holds : __
