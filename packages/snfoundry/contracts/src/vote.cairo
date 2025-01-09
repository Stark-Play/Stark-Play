// StarkPlay Hub Contract Voting Awards

/// External dependencies required for contract functionality
use core::starknet::ContractAddress;

/// Interface specification for voting operations
#[starknet::interface]
trait VoteTrait<T> {
    /// Retrieves the current tally of votes
    fn get_vote_status(self: @T) -> (u8, u8, u8, u8);
    /// Validates if an address has voting privileges
    fn voter_can_vote(self: @T, user_address: ContractAddress) -> bool;
    /// Confirms if an address belongs to the voter registry
    fn is_voter_registered(self: @T, address: ContractAddress) -> bool;
    /// Records a voter's decision
    fn vote(ref self: T, vote: u8);
}

/// Implementation of a basic voting system for three authorized participants
#[starknet::contract]
mod Vote {
    use core::starknet::ContractAddress;
    use core::starknet::get_caller_address;
    use core::starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess, StorageMapReadAccess,
        StorageMapWriteAccess, Map
    };

    const YES: u8 = 1_u8;
    const NO: u8 = 0_u8;

    /// Data structure for maintaining voting records
    #[storage]
    struct Storage {
        yes_votes: u8,
        no_votes: u8,
        can_vote: Map::<ContractAddress, bool>,
        registered_voter: Map::<ContractAddress, bool>,
    }

    /// Initializes voting system with three authorized participants
    #[constructor]
    fn constructor(
        ref self: ContractState,
        voter_1: ContractAddress,
        voter_2: ContractAddress,
        voter_3: ContractAddress
    ) {
        // Add participants to registry
        self._register_voters(voter_1, voter_2, voter_3);

        // Reset vote counters
        self.yes_votes.write(0_u8);
        self.no_votes.write(0_u8);
    }

    /// Notification system for voting activities
    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        VoteCast: VoteCast,
        UnauthorizedAttempt: UnauthorizedAttempt,
    }

    /// Record of a valid vote submission
    #[derive(Drop, starknet::Event)]
    struct VoteCast {
        voter: ContractAddress,
        vote: u8,
    }

    /// Record of invalid voting attempt
    #[derive(Drop, starknet::Event)]
    struct UnauthorizedAttempt {
        unauthorized_address: ContractAddress,
    }

    /// Core voting functionality implementation
    #[abi(embed_v0)]
    impl VoteImpl of super::VoteTrait<ContractState> {
        /// Provides current voting statistics
        fn get_vote_status(self: @ContractState) -> (u8, u8, u8, u8) {
            let (n_yes, n_no) = self._get_voting_result();
            let (yes_percentage, no_percentage) = self._get_voting_result_in_percentage();
            (n_yes, n_no, yes_percentage, no_percentage)
        }

        /// Verifies voting eligibility
        fn voter_can_vote(self: @ContractState, user_address: ContractAddress) -> bool {
            self.can_vote.read(user_address)
        }

        /// Confirms voter registration status
        fn is_voter_registered(self: @ContractState, address: ContractAddress) -> bool {
            self.registered_voter.read(address)
        }

        /// Processes a vote submission
        fn vote(ref self: ContractState, vote: u8) {
            assert!(vote == NO || vote == YES, "VOTE_0_OR_1");
            let caller: ContractAddress = get_caller_address();
            self._assert_allowed(caller);
            self.can_vote.write(caller, false);

            if (vote == NO) {
                self.no_votes.write(self.no_votes.read() + 1_u8);
            }
            if (vote == YES) {
                self.yes_votes.write(self.yes_votes.read() + 1_u8);
            }

            self.emit(VoteCast { voter: caller, vote: vote, });
        }
    }

    /// Helper functions for internal operations
    #[generate_trait]
    impl InternalFunctions of InternalFunctionsTrait {
        /// Adds initial voters to the registry with voting rights
        fn _register_voters(
            ref self: ContractState,
            voter_1: ContractAddress,
            voter_2: ContractAddress,
            voter_3: ContractAddress
        ) {
            self.registered_voter.write(voter_1, true);
            self.can_vote.write(voter_1, true);

            self.registered_voter.write(voter_2, true);
            self.can_vote.write(voter_2, true);

            self.registered_voter.write(voter_3, true);
            self.can_vote.write(voter_3, true);
        }
    }

    /// Validation functions for voting operations
    #[generate_trait]
    impl AssertsImpl of AssertsTrait {
        /// Validates voter eligibility and permissions
        fn _assert_allowed(ref self: ContractState, address: ContractAddress) {
            let is_voter: bool = self.registered_voter.read((address));
            let can_vote: bool = self.can_vote.read((address));

            if (!can_vote) {
                self.emit(UnauthorizedAttempt { unauthorized_address: address, });
            }

            assert!(is_voter, "USER_NOT_REGISTERED");
            assert!(can_vote, "USER_ALREADY_VOTED");
        }
    }

    /// Functions for calculating voting results
    #[generate_trait]
    impl VoteResultFunctionsImpl of VoteResultFunctionsTrait {
        /// Retrieves raw vote counts
        fn _get_voting_result(self: @ContractState) -> (u8, u8) {
            let n_yes: u8 = self.yes_votes.read();
            let n_no: u8 = self.no_votes.read();

            (n_yes, n_no)
        }

        /// Calculates percentage distribution of votes
        fn _get_voting_result_in_percentage(self: @ContractState) -> (u8, u8) {
            let n_yes: u8 = self.yes_votes.read();
            let n_no: u8 = self.no_votes.read();

            let total_votes: u8 = n_yes + n_no;

            if (total_votes == 0_u8) {
                return (0, 0);
            }
            let yes_percentage: u8 = (n_yes * 100_u8) / (total_votes);
            let no_percentage: u8 = (n_no * 100_u8) / (total_votes);

            (yes_percentage, no_percentage)
        }
    }
}