
type __ = Obj.t
let __ = let rec f _ = Obj.repr f in Obj.repr f

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

module Add =
 struct
  (** val name : string **)

  let name =
    String ((Ascii (True, False, False, False, False, True, True, False)),
      (String ((Ascii (False, False, True, False, False, True, True, False)),
      (String ((Ascii (False, False, True, False, False, True, True, False)),
      (String ((Ascii (True, False, True, True, False, True, False, False)),
      (String ((Ascii (True, False, True, False, False, True, True, False)),
      (String ((Ascii (False, False, False, True, True, True, True, False)),
      (String ((Ascii (True, False, False, False, False, True, True, False)),
      (String ((Ascii (True, False, True, True, False, True, True, False)),
      (String ((Ascii (False, False, False, False, True, True, True, False)),
      (String ((Ascii (False, False, True, True, False, True, True, False)),
      (String ((Ascii (True, False, True, False, False, True, True, False)),
      EmptyString)))))))))))))))))))))

  (** val publicInput : nat **)

  let publicInput =
    O
 end

(** val makeSelfProof : nat -> selfProof **)

let makeSelfProof input =
  input

type main = __

(** val main_holds : __ **)

let main_holds =
  __
