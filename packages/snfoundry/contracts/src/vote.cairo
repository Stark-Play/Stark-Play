// StarkPlay Game Voting Contract
use core::starknet::ContractAddress;

#[starknet::interface]
trait IGameVoting<T> {
    /// Returns the number of likes and dislikes for a specific game
    fn get_game_votes(self: @T, game_id: u32) -> (u32, u32);
    /// Returns if a user has already voted for a specific game
    fn has_voted(self: @T, user: ContractAddress, game_id: u32) -> bool;
    /// Adds a new game to the voting system
    fn add_game(ref self: T, game_id_custom: felt252, game_name: felt252);
    /// Registers a vote (like/dislike) for a game
    fn vote(ref self: T, game_id: u32, is_like: u8);
    /// Gets total number of registered games
    fn get_total_games(self: @T) -> u32;
    /// Gets game info by ID
    fn get_game_info(self: @T, game_id: u32) -> (felt252, felt252);
}

#[starknet::contract]
mod GameVoting {
    use core::starknet::ContractAddress;
    use core::starknet::get_caller_address;
    use core::starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess, StorageMapReadAccess,
        StorageMapWriteAccess, Map
    };

    const LIKE: u8 = 1_u8;
    const DISLIKE: u8 = 0_u8;

    #[storage]
    struct Storage {
        // Game data
        games: Map::<u32, Game>,
        total_games: u32,
        // Voting records
        has_voted: Map::<(ContractAddress, u32), bool>,
        likes: Map::<u32, u32>,
        dislikes: Map::<u32, u32>
    }

    #[derive(Copy, Drop, Serde, starknet::Store)]
    struct Game {
        game_id_custom: felt252,
        name: felt252
    }

    #[constructor]
    fn constructor(ref self: ContractState) {
        self.total_games.write(0);
    }

    #[abi(embed_v0)]
    impl GameVotingImpl of super::IGameVoting<ContractState> {
        fn get_game_votes(self: @ContractState, game_id: u32) -> (u32, u32) {
            let likes = self.likes.read(game_id);
            let dislikes = self.dislikes.read(game_id);
            (likes, dislikes)
        }

        fn has_voted(self: @ContractState, user: ContractAddress, game_id: u32) -> bool {
            self.has_voted.read((user, game_id))
        }

        fn add_game(ref self: ContractState, game_id_custom: felt252, game_name: felt252) {
            let new_game_id = self.total_games.read() + 1;
            
            // Store game information
            self.games.write(new_game_id, Game { game_id_custom, name: game_name });
            self.total_games.write(new_game_id);
            
            // Initialize vote counters
            self.likes.write(new_game_id, 0);
            self.dislikes.write(new_game_id, 0);
        }

        fn vote(ref self: ContractState, game_id: u32, is_like: u8) {
            let caller = get_caller_address();
            
            // Validate game exists
            assert!(game_id <= self.total_games.read(), "INVALID_GAME_ID");
            // Check if user hasn't voted before
            assert!(!self.has_voted.read((caller, game_id)), "ALREADY_VOTED");

            // Record vote
            self.has_voted.write((caller, game_id), true);
            
            // Update vote counts
            if is_like == LIKE {
                self.likes.write(game_id, self.likes.read(game_id) + 1);
            } else {
                self.dislikes.write(game_id, self.dislikes.read(game_id) + 1);
            }
        }

        fn get_total_games(self: @ContractState) -> u32 {
            self.total_games.read()
        }

        fn get_game_info(self: @ContractState, game_id: u32) -> (felt252, felt252) {
            assert!(game_id <= self.total_games.read(), "INVALID_GAME_ID");
            let game = self.games.read(game_id);
            (game.game_id_custom, game.name)
        }
    }
}