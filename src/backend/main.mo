import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type SubmissionId = Nat;

  var nextSubmissionId : SubmissionId = 0;

  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    projectDetails : Text;
  };

  module Submission {
    public func compare(s1 : Submission, s2 : Submission) : Order.Order {
      Text.compare(s1.email, s2.email);
    };
  };

  let submissions = Map.empty<SubmissionId, Submission>();

  public query ({ caller }) func getSubmission(id : SubmissionId) : async ?Submission {
    submissions.get(id);
  };

  public query ({ caller }) func listSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, projectDetails : Text) : async SubmissionId {
    let id = nextSubmissionId;
    let submission : Submission = {
      name;
      email;
      phone;
      projectDetails;
    };

    submissions.add(id, submission);
    nextSubmissionId += 1;
    id;
  };
};
