Require Extraction.
Extraction Language OCaml.
Require Import Coq.ZArith.ZArith.
Require Import Coq.Lists.List.
Require Import Coq.Strings.String.
Require Import MetaCoq.Template.All.
Require Import MetaCoq.Template.Checker.

Import ListNotations.
Open Scope string_scope.

(* SelfProof is represented as a record *)
Record SelfProof := {
  sp_publicInput : nat;
}.

(* ZkProgram is represented as a module type *)
Module Type ZkProgram.
  Parameter name : String.string.
  Parameter publicInput : nat.
  
  Parameter init : nat -> Prop.
  Parameter addNumber : nat -> SelfProof -> nat -> Prop.
  Parameter add : nat -> SelfProof -> SelfProof -> Prop.
End ZkProgram.


Module Add <: ZkProgram.

  Definition name := "add-example".
  Definition publicInput := 0.
  
  Definition init (state : nat) : Prop := state = 0.

  Definition addNumber (newState : nat) (earlierProof : SelfProof) (numberToAdd : nat) : Prop :=
    newState = (sp_publicInput earlierProof) + numberToAdd.
  
  Definition add (newState : nat) (earlierProof1 : SelfProof) (earlierProof2 : SelfProof) : Prop :=
    newState = (sp_publicInput earlierProof1) + (sp_publicInput earlierProof2).
End Add.

(* Helper function to create a SelfProof *)
Definition makeSelfProof (input : nat) : SelfProof := {|
  sp_publicInput := input;
|}.

(* Main function *)
Definition main : Prop :=
  exists proof0 proof1 proof2,
    (* Compilation step - we just assume it's done *)
    True /\
    (* Making proof 0 *)
    Add.init (sp_publicInput proof0) /\
    (* Making proof 1 *)
    Add.addNumber (sp_publicInput proof1) proof0 4 /\
    (* Making proof 2 *)
    Add.add (sp_publicInput proof2) proof1 proof0 /\
    (* Verification step - we just assume it's done *)
    True.

(* Theorem to prove that our main proposition holds *)
Theorem main_holds : main.
Proof.
  unfold main.
  exists (makeSelfProof 0).
  exists (makeSelfProof 4).
  exists (makeSelfProof 4).
  repeat split.
Qed.

Set Extraction Output Directory "../../extraction".
Extraction "example.ml" main main_holds makeSelfProof Add.Add.Add .


(*Redirect "extraction/add.rs" Rust Extract main_holds.*)

